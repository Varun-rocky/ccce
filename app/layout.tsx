import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/layout/themeProvider";
import {
  ClerkProvider
} from '@clerk/nextjs'
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AI Powered Collaborative Cloud Code Editor",
  description:  "AI Powered Collaborative Cloud Code Editor",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
<html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" forcedTheme="dark" disableTransitionOnChange>{children}</ThemeProvider></body>
    </html>
    </ClerkProvider>
    
  );
}
