import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import { LanguageProvider } from "@/context/LanguageContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Shaxriyorbek Usmonov | Frontend & Fullstack Developer Portfolio",
  description:
    "Shaxriyorbek Usmonov - Personal Portfolio website built with Next.js, React.js, Tailwind CSS, and JavaScript. Supporting Uzbek, English, and Russian.",
  keywords: [
    "Shaxriyorbek Usmonov",
    "Frontend Developer",
    "Fullstack Developer",
    "React.js",
    "Next.js",
    "Tailwind CSS",
    "JavaScript",
    "Portfolio",
  ],
  authors: [{ name: "Shaxriyorbek Usmonov" }],
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="uz"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} dark`}
    >
      <body className="min-h-screen bg-zinc-50 dark:bg-[#090a0f] text-zinc-900 dark:text-zinc-100 font-sans selection:bg-indigo-500 selection:text-white transition-colors duration-300">
        <ThemeProvider>
          <LanguageProvider>
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
