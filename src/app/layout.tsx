import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Harinandha A K | UI/UX Designer",
  description: "Portfolio of Harinandha A K, a UI/UX Designer crafting intuitive digital experiences.",
};

import { cn } from "@/lib/utils";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className="antialiased bg-white text-slate-900"
        suppressHydrationWarning
      >
        <div className={cn(inter.variable, poppins.variable, "font-sans min-h-screen")}>
          {children}
        </div>
      </body>
    </html>
  );
}
