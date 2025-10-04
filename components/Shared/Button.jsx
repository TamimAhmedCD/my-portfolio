import { Loader2, Check } from "lucide-react"

export const PrimaryButton = ({
    label = "Click Me",
    isSubmitting = false,
    isSubmitted = false,
    className = "",
    ...props
}) => {
    return (
        <button
            type="submit"
            disabled={isSubmitting}
            className={`group relative text-white bg-[#6366f1] shadow-2xl cursor-pointer rounded-lg overflow-hidden ${className} text-center disabled:opacity-70 disabled:cursor-not-allowed`}
            {...props}
        >
            <span className="absolute inset-0 bg-gradient-to-t from-white/50 via-white/10 to-transparent opacity-60 transition-all duration-500 group-hover:opacity-80"></span>

            <div className="relative z-10 px-6 text-center py-2 space-x-2 rounded-lg transition-transform duration-500 flex items-center justify-center">
                {isSubmitting ? (
                    <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        <span>Sending...</span>
                    </>
                ) : isSubmitted ? (
                    <>
                        <Check className="mr-2 h-4 w-4" />
                        <span>Message Sent!</span>
                    </>
                ) : (
                    <span>{label}</span>
                )}
            </div>
        </button>
    )
}


export const SecondaryButton = ({ label = "Click Me", className = "" }) => {
    return (
        <button className={`group relative bg-gray-800/90 text-white shadow-2xl cursor-pointer rounded-lg overflow-hidden ${className} text-center`}>
            <span className="absolute inset-0 bg-gradient-to-t from-white/50 via-white/10 to-transparent opacity-60 transition-all duration-500 group-hover:opacity-80"></span>
            <div className="relative z-10 px-6 py-2 space-x-2 rounded-lg transition-transform duration-500">
                <span>{label}</span>
            </div>
        </button>
    );
};
