"use client";

import { useState, useMemo, useEffect } from "react";

// --- Configuration and Utility Functions ---

const API_CONFIG = {
    GEMINI_BASE: "https://generativelanguage.googleapis.com/v1/models/",
    OPENROUTER_BASE: "https://openrouter.ai/api/v1/chat/completions",
};

const MODELS = [
    { id: "gemini-2.5-flash", name: "Gemini 2.5 Flash", type: "gemini" },
    { id: "gemini-2.5-pro", name: "Gemini 2.5 Pro", type: "gemini" },
    { id: "openrouter-mixtral-8x7b-instruct-v0.1", name: "OpenRouter: Mixtral 8x7B", type: "openrouter" },
    { id: "openrouter-gpt-4o", name: "OpenRouter: GPT-4o", type: "openrouter" },
];

// Base prompt instructions
const BASE_PROMPT_INSTRUCTIONS =
    "Analyze this image and return ONLY a JSON object. The response must be valid, clean JSON.";

/**
 * Generates the specific AI prompt text based on the desired output type.
 */
function getAiPrompt(type) {
    let instructions = "";
    if (type === 'full') {
        instructions =
            "- A very descriptive prompt (for AI image generation), using the key: 'prompt'\n" +
            "- A short title, using the key: 'title'\n" +
            "- Up to 50 relevant keywords (comma separated), using the key: 'keywords'";
    } else if (type === 'prompt_only') {
        instructions =
            "- A very descriptive prompt (for AI image generation), using the key: 'prompt'. Set 'title' and 'keywords' to empty strings.";
    } else if (type === 'metadata_only') {
        instructions =
            "- A short title, using the key: 'title'\n" +
            "- Up to 50 relevant keywords (comma separated), using the key: 'keywords'. Set 'prompt' to an empty string.";
    }

    // Always include the full JSON structure in the instructions for consistency
    const json_structure = "Return the JSON with keys: prompt, title, keywords.";

    return `${BASE_PROMPT_INSTRUCTIONS} Based on your analysis, generate: ${instructions} ${json_structure}`;
}


/**
 * Converts a File object to a Base64 data URL.
 */
function toBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = reject;
    });
}

/**
 * Parses the raw text output from the model into a structured metadata object.
 */
function parseModelOutput(output) {
    let parsed = {};
    try {
        const cleanOutput = output.replace(/```json|```/g, '').trim();
        parsed = JSON.parse(cleanOutput);
    } catch (err) {
        console.warn("Model output was not valid JSON. Using raw text as prompt.", output);
        parsed = { prompt: output, title: "Untitled (JSON Parse Failed)", keywords: "error" };
    }
    // Ensure all keys exist, even if empty, for rendering safety
    return {
        prompt: parsed.prompt || '',
        title: parsed.title || '',
        keywords: parsed.keywords || '',
    };
}

/**
 * Calls the selected API (Gemini or OpenRouter) to generate metadata.
 */
async function generateMetadata(imageInfo, settings, outputType) {
    const { file, base64, mimeType } = imageInfo;
    const { key, model, type } = settings;

    let apiUrl = "";
    let headers = { "Content-Type": "application/json" };
    let payload = {};
    const base64Data = base64.split(",")[1];
    const promptText = getAiPrompt(outputType);

    if (type === 'gemini') {
        // --- GEMINI API Configuration ---
        apiUrl = `${API_CONFIG.GEMINI_BASE}${model}:generateContent?key=${key}`;
        payload = {
            contents: [{
                parts: [
                    { text: promptText },
                    { inlineData: { mimeType, data: base64Data } },
                ],
            }],
        };

    } else if (type === 'openrouter') {
        // --- OPENROUTER API Configuration (OpenAI-like structure) ---
        apiUrl = API_CONFIG.OPENROUTER_BASE;
        headers['Authorization'] = `Bearer ${key}`;
        headers['HTTP-Referer'] = 'image-metadata-app';

        payload = {
            model: model.replace('openrouter-', ''),
            messages: [{
                role: "user",
                content: [
                    { type: "text", text: promptText },
                    { type: "image_url", image_url: { url: base64 } }
                ],
            }],
        };

    } else {
        throw new Error("Invalid API type selected.");
    }

    // --- Fetch Request ---
    const res = await fetch(apiUrl, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(payload),
    });

    if (!res.ok) {
        const errorData = await res.json();
        throw new Error(`API call failed: ${res.status} (${res.statusText}). Details: ${errorData.error?.message || errorData.message || "Unknown error"}`);
    }

    const data = await res.json();

    let output = "";
    if (type === 'gemini') {
        output = data?.candidates?.[0]?.content?.parts?.[0]?.text || "";
    } else {
        output = data?.choices?.[0]?.message?.content || "";
    }

    return parseModelOutput(output);
}

// --- Main Component ---

const initialSettings = {
    geminiKey: "",
    openRouterKey: "",
    selectedModel: "gemini-2.5-flash",
};

export default function ImageMetadataApp() {
    const [settings, setSettings] = useState(initialSettings);
    const [images, setImages] = useState([]);
    const [isProcessing, setIsProcessing] = useState(false);
    const [tempKeys, setTempKeys] = useState({ gemini: "", openrouter: "" });
    // NEW STATE: To track the user's desired CSV format
    const [exportFormat, setExportFormat] = useState('full'); // 'full' or 'basic'

    // Load keys from localStorage on mount
    useEffect(() => {
        const savedGemini = localStorage.getItem("gemini_api_key");
        const savedOpenRouter = localStorage.getItem("openrouter_api_key");
        if (savedGemini) setSettings(s => ({ ...s, geminiKey: savedGemini }));
        if (savedOpenRouter) setSettings(s => ({ ...s, openRouterKey: savedOpenRouter }));
        setTempKeys({ gemini: savedGemini || "", openrouter: savedOpenRouter || "" });
    }, []);

    // Determines the active API settings based on the selected model
    const activeApiSettings = useMemo(() => {
        const modelObj = MODELS.find(m => m.id === settings.selectedModel);
        if (!modelObj) return null;

        const key = modelObj.type === 'gemini' ? settings.geminiKey : settings.openRouterKey;

        if (!key) return null;

        return { key, model: settings.selectedModel, type: modelObj.type };
    }, [settings.selectedModel, settings.geminiKey, settings.openRouterKey]);

    const saveKeys = () => {
        if (tempKeys.gemini) {
            localStorage.setItem("gemini_api_key", tempKeys.gemini);
            setSettings(s => ({ ...s, geminiKey: tempKeys.gemini }));
        }
        if (tempKeys.openrouter) {
            localStorage.setItem("openrouter_api_key", tempKeys.openrouter);
            setSettings(s => ({ ...s, openRouterKey: tempKeys.openrouter }));
        }
        alert("✅ API Keys saved successfully!");
    };

    const isModelAvailable = (modelType) => {
        if (modelType === 'gemini') return !!settings.geminiKey;
        if (modelType === 'openrouter') return !!settings.openRouterKey;
        return false;
    };


    const handleFileChange = async (e) => {
        const files = Array.from(e.target.files);
        if (!files.length) return;

        // Create new image objects and add them to the state
        const newImages = files.map((file) => ({
            id: Date.now() + Math.random(),
            file: file,
            url: URL.createObjectURL(file),
            status: 'pending',
            result: null, // result: { prompt: string, title: string, keywords: string }
        }));

        setImages(prev => [...newImages, ...prev]);
    };

    /**
     * Handles the click of a specific generation button for a specific image.
     */
    const handleGenerateClick = async (imageId, outputType) => {
        const img = images.find(i => i.id === imageId);
        if (!img || isProcessing) return;

        if (!activeApiSettings) {
            alert("❌ Please set and select a valid API key and model.");
            return;
        }

        setIsProcessing(true);

        // Update status to processing
        setImages(prev => prev.map(i => i.id === imageId ? { ...i, status: 'processing' } : i));

        try {
            const base64 = await toBase64(img.file);

            const metadata = await generateMetadata(
                { file: img.file, base64, mimeType: img.file.type },
                activeApiSettings,
                outputType // Pass the selective output type
            );

            // Update status to complete and store result
            setImages(prev => prev.map(i => i.id === imageId ? {
                ...i,
                status: 'complete',
                result: metadata,
            } : i));

        } catch (error) {
            console.error(`Error processing ${img.file.name}:`, error);
            // Update status to error
            setImages(prev => prev.map(i => i.id === imageId ? {
                ...i,
                status: 'error',
                result: {
                    prompt: `Error: ${error.message}`,
                    title: 'API ERROR',
                    keywords: 'error'
                }
            } : i));
        } finally {
            setIsProcessing(false);
        }
    };

    // UPDATED: Now takes the image object and uses the global exportFormat state
    const handleExportCSV = (img) => {
        if (!img.result) return;
        const result = img.result;
        const sanitize = (text) => (text || "").replace(/"/g, '""');

        let csv = "";

        if (exportFormat === 'full') {
            // Format 2: Filename, Title, Description (Prompt), and Keywords
            const header = "Filename,Title,Description,Keywords\n";
            const dataRow = `"${sanitize(img.file.name)}","${sanitize(result.title)}","${sanitize(result.prompt)}","${sanitize(result.keywords)}"`;
            csv = header + dataRow;
        } else {
            // Format 1: Filename, Title, and Keywords
            const header = "Filename,Title,Keywords\n";
            const dataRow = `"${sanitize(img.file.name)}","${sanitize(result.title)}","${sanitize(result.keywords)}"`;
            csv = header + dataRow;
        }

        const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.setAttribute("download", `${exportFormat}_metadata_${result.title.replace(/\s/g, '_')}.csv`);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };


    return (
        <main className="min-h-screen bg-gray-50 flex flex-col items-center p-4 sm:p-10">
            <h1 className="text-3xl font-bold mb-8 text-gray-800">🖼 Selective Prompt & Metadata Generator</h1>

            {/* --- 1. SETTINGS PANEL --- */}
            <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-4xl mb-8 border border-gray-200">
                <h2 className="text-xl font-bold mb-4 text-gray-800">🔑 API Configuration</h2>

                <div className="grid md:grid-cols-3 gap-4 mb-6 items-end">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Gemini API Key</label>
                        <input
                            type="password"
                            value={tempKeys.gemini}
                            onChange={(e) => setTempKeys(k => ({ ...k, gemini: e.target.value }))}
                            placeholder="AIzaSy..."
                            className="border p-2 w-full rounded-lg"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">OpenRouter API Key</label>
                        <input
                            type="password"
                            value={tempKeys.openrouter}
                            onChange={(e) => setTempKeys(k => ({ ...k, openrouter: e.target.value }))}
                            placeholder="sk-or-v1-..."
                            className="border p-2 w-full rounded-lg"
                        />
                    </div>
                    <button
                        onClick={saveKeys}
                        className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition duration-150 h-full"
                    >
                        Save Keys
                    </button>
                </div>

                <h3 className="text-lg font-semibold mb-2 text-gray-800">🤖 Select Model</h3>
                <select
                    value={settings.selectedModel}
                    onChange={(e) => setSettings(s => ({ ...s, selectedModel: e.target.value }))}
                    className="border p-2 w-full rounded-lg bg-gray-50"
                >
                    {MODELS.map(model => (
                        <option
                            key={model.id}
                            value={model.id}
                            disabled={!isModelAvailable(model.type)}
                        >
                            {model.name} ({isModelAvailable(model.type) ? 'Ready' : 'Key Missing'})
                        </option>
                    ))}
                </select>
            </div>

            {/* --- 2. UPLOAD AREA --- */}
            <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-4xl mb-8">
                <label
                    htmlFor="image-upload"
                    className={`block text-center cursor-pointer p-8 border-4 border-dashed rounded-lg text-gray-700 transition duration-200 ${activeApiSettings
                            ? 'border-green-300 hover:border-green-600 hover:text-green-600'
                            : 'border-red-300 bg-red-50 text-red-700 cursor-not-allowed'
                        }`}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto h-12 w-12 mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="text-lg font-semibold">
                        {isProcessing ? "Processing Images..." : (activeApiSettings ? "Click or Drag to Upload Multiple Images" : "SETUP REQUIRED: Select a model and provide an API Key.")}
                    </span>
                    <span className="block text-sm mt-1">
                        Files will be processed on demand.
                    </span>
                </label>
                <input
                    id="image-upload"
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    multiple
                    className="hidden"
                    disabled={isProcessing || !activeApiSettings}
                />
            </div>

            {/* --- 3. RESULTS AREA --- */}
            <div className="w-full max-w-4xl space-y-8">
                {images.length > 0 && (
                    <div className="bg-white p-4 rounded-xl shadow-lg mb-4">
                        <h3 className="text-lg font-semibold mb-2">CSV Export Format</h3>
                        <div className="flex gap-4">
                            <label className="flex items-center space-x-2 cursor-pointer">
                                <input
                                    type="radio"
                                    name="exportFormat"
                                    value="full"
                                    checked={exportFormat === 'full'}
                                    onChange={() => setExportFormat('full')}
                                    className="text-blue-600 focus:ring-blue-500"
                                />
                                <span className="text-sm font-medium">Full: Filename, Title, Description, Keywords</span>
                            </label>
                            <label className="flex items-center space-x-2 cursor-pointer">
                                <input
                                    type="radio"
                                    name="exportFormat"
                                    value="basic"
                                    checked={exportFormat === 'basic'}
                                    onChange={() => setExportFormat('basic')}
                                    className="text-blue-600 focus:ring-blue-500"
                                />
                                <span className="text-sm font-medium">Basic: Filename, Title, Keywords</span>
                            </label>
                        </div>
                    </div>
                )}


                {images.map(img => (
                    <div key={img.id} className="bg-white shadow-2xl rounded-xl p-6 border border-gray-100">
                        <div className="flex items-start mb-4 border-b pb-4">
                            <img
                                src={img.url}
                                alt={img.file.name}
                                className="w-24 h-24 object-cover rounded-lg mr-4 border border-gray-200"
                            />
                            <div className="flex-grow">
                                <h3 className="text-xl font-bold truncate mb-1">{img.file.name}</h3>
                                <p className="text-sm text-gray-500">
                                    Size: {(img.file.size / 1024 / 1024).toFixed(2)} MB
                                </p>
                                <div className={`mt-2 font-semibold text-sm px-3 py-1 rounded-full w-fit ${img.status === 'processing' ? 'bg-yellow-100 text-yellow-800' :
                                        img.status === 'complete' ? 'bg-green-100 text-green-800' :
                                            img.status === 'error' ? 'bg-red-100 text-red-800' :
                                                'bg-gray-100 text-gray-800'
                                    }`}>
                                    {img.status.toUpperCase()}
                                </div>
                            </div>
                        </div>

                        {/* --- GENERATION BUTTONS --- */}
                        <div className="mb-6 flex gap-3">
                            <button
                                onClick={() => handleGenerateClick(img.id, 'prompt_only')}
                                disabled={isProcessing || img.status === 'processing'}
                                className="flex-1 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition disabled:bg-gray-400"
                            >
                                📝 Generate **Prompt Only**
                            </button>
                            <button
                                onClick={() => handleGenerateClick(img.id, 'metadata_only')}
                                disabled={isProcessing || img.status === 'processing'}
                                className="flex-1 px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition disabled:bg-gray-400"
                            >
                                🏷️ Generate **Metadata Only**
                            </button>
                            <button
                                onClick={() => handleGenerateClick(img.id, 'full')}
                                disabled={isProcessing || img.status === 'processing'}
                                className="flex-1 px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition disabled:bg-gray-400"
                            >
                                ✨ Generate **Full**
                            </button>
                        </div>


                        {/* --- RESULTS DISPLAY --- */}
                        {img.result && (
                            <div className="grid md:grid-cols-2 gap-6">
                                {/* SECTION 1: PROMPT (Displays only if prompt data exists) */}
                                {img.result.prompt && (
                                    <div>
                                        <h4 className="text-lg font-bold mb-2 text-blue-600">📝 AI Prompt (Description)</h4>
                                        <textarea
                                            readOnly
                                            className="w-full p-3 bg-blue-50 rounded-lg border border-blue-200 min-h-40 resize-none text-sm"
                                            value={img.result.prompt}
                                        />
                                    </div>
                                )}

                                {/* SECTION 2: METADATA (Displays only if title or keywords exist) */}
                                {(img.result.title || img.result.keywords) && (
                                    <div>
                                        <h4 className="text-lg font-bold mb-2 text-purple-600">🏷️ Title & Keywords</h4>
                                        <div className="space-y-3">
                                            <div className="p-3 bg-purple-50 rounded-lg border border-purple-200">
                                                <strong className="block text-sm text-gray-700">Title:</strong>
                                                <p className="font-medium">{img.result.title || "N/A"}</p>
                                            </div>
                                            <div className="p-3 bg-purple-50 rounded-lg border border-purple-200">
                                                <strong className="block text-sm text-gray-700">Keywords:</strong>
                                                <p className="text-sm">{img.result.keywords || "N/A"}</p>
                                            </div>
                                        </div>

                                        <button
                                            onClick={() => handleExportCSV(img)}
                                            className="w-full mt-4 px-6 py-2 bg-green-600 text-white rounded-lg shadow-md font-semibold hover:bg-green-700 transition duration-150 disabled:bg-gray-400"
                                            disabled={img.status !== 'complete'}
                                        >
                                            📥 Export ({exportFormat.toUpperCase()}) as CSV
                                        </button>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                ))}

                {!images.length && (
                    <div className="text-center p-12 text-gray-500 border-2 border-dashed border-gray-300 rounded-xl bg-white shadow-inner max-w-4xl mx-auto">
                        <p className="text-lg font-medium">No images uploaded yet.</p>
                        <p className="text-sm">Start by configuring your keys and uploading files.</p>
                    </div>
                )}
            </div>
        </main>
    );
}