import { Figtree, Instrument_Serif } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import GradualBlurMemo from "@/components/GradualBlur";
import { ReactLenis } from "lenis/react";
import Footer from "@/components/Footer/Footer";
import { ThemeProvider } from "next-themes";

const figtree = Figtree({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-figtree",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
  display: "swap",
});

export const metadata = {
  title: "Tamim — UI/UX Designer & Web Developer",
  description:
    "Crafting luxury minimalist digital experiences and high-performance SaaS applications.",
  icons: {
    icon: "/tamim.png", // Dynamic favicon
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${instrumentSerif.variable} ${figtree.variable} font-figtree antialiased bg-background text-foreground selection:bg-[#6366f1]/20 selection:text-[#6366f1]`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col">
            <Header />

            <main className="flex-1">{children}</main>

            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
