import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SITE_CONFIG } from "@/config/config";
import { defaultMetadata } from "@/config/metadata";

const appleTitle = SITE_CONFIG.siteName;

const geist = Geist({
  subsets: ["latin"],
});

export const metadata = defaultMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="apple-mobile-web-app-title" content={appleTitle} />
        <body className={`${geist.className} flex min-h-screen flex-col`}>
          <ThemeProvider
            attribute="class"
            enableSystem={false}
            defaultTheme="light"
            storageKey="theme"
          >
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </ThemeProvider>
        </body>
      </head>
    </html>
  );
}
