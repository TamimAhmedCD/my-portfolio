"use client";
import { Figtree, Instrument_Serif } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
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

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body
        className={`${instrumentSerif.variable} ${figtree.variable} font-figtree antialiased bg-white dark:bg-[#050505] text-foreground selection:bg-indigo-500/30 selection:text-indigo-600 transition-colors duration-500`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {/* THE TRENDING MODERN BACKGROUND SYSTEM */}
          <div className="fixed inset-0 -z-50 overflow-hidden pointer-events-none">
            {/* 1. The Grain Overlay (Texture) */}
            <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] brightness-100 contrast-150 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

            {/* 2. Soft Ambient Orbs (Modern Corporate Gradient) */}
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-indigo-500/10 dark:bg-indigo-600/5 blur-[120px] animate-pulse" />
            <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] rounded-full bg-blue-500/10 dark:bg-blue-600/5 blur-[100px]" />

            {/* 3. Subtle Grid (Architectural Feel) */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:44px_44px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
          </div>

          <div className="relative flex min-h-screen flex-col">
            <Header />
            <main className="flex-1 relative z-10">{children}</main>
          </div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
