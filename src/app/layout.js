import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "K-Hub | Deep-Tech Innovation",
  description:
    "K-Hub — Driving deep-tech innovation across drug discovery, cybersecurity, robotics, materials science, and more.",
  authors: [{ name: "K-Hub" }],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased smooth-scroll`}>
      <body className="min-h-full flex flex-col font-sans tracking-tight">
        {children}
      </body>
    </html>
  );
}
