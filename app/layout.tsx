import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { bookIcon } from "@/public";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Libba Books",
  description: "A platform for book lovers",
  icons: {
    icon: "./book.ico",
    shortcut: "./book.ico",
    apple: "./book.ico"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
