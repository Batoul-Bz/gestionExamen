"use client";  // تأكد من إضافة هذا السطر

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Sidebar from "./resonsable/Sidebar";  // تأكد من استيراد Sidebar بشكل صحيح
import { useState } from "react"; // استيراد useState لإدارة الحالة

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [open, setOpen] = useState(false);
  const toggleOpen = () => setOpen(!open);

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{ display: "flex", minHeight: "100vh" }}
      >
        <Sidebar open={open} toggleOpen={toggleOpen} />
        <div style={{ flex: 1, padding: "20px", backgroundColor: "#f4f4f4" }}>
          {children}
        </div>
      </body>
    </html>
  );
}
