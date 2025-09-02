// components/ShinyButton.jsx
import React from "react";

const PrimaryButton = ({ label = "Click Me", className = "" }) => {
    return (
        <button className={`group relative text-white bg-[#6366f1] shadow-2xl cursor-pointer rounded-lg overflow-hidden ${className} text-center`}>
            {/* Permanent Bottom-to-Top White Effect */}
            <span
                className="absolute inset-0 bg-gradient-to-t from-white/50 via-white/10 to-transparent 
        opacity-60 transition-all duration-500 group-hover:opacity-80"
            ></span>

            {/* Button Content */}
            <div className="relative z-10 px-6 text-center py-2 space-x-2 rounded-lg transition-transform duration-500">
                <span>{label}</span>
            </div>
        </button>
    );
};

export default PrimaryButton;
