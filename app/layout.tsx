import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { Navbar } from "@/components/Navbar";
import { ModeToggle } from "@/components/ModeToggle";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Vert San - Developer",
  description:
    "A passionate web developer crafting modern, scalable web experiences from Cambodia.",
  keywords: ["web developer", "Cambodia", "Next.js", "React", "TypeScript"],
  openGraph: {
    title: "Vert San - Developer",
    description:
      "A passionate web developer crafting modern, scalable web experiences from Cambodia.",
    url: "https://vertsan.vercel.app",
    siteName: "Vert San",
    images: [
      {
        url: "https://vertsan.vercel.app/og.png",
        width: 1200,
        height: 630,
      },
    ],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} antialiased min-h-screen flex flex-col bg-background`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <main className="mx-auto p-4 sm:px-0 sm:max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-6xl w-full">
            <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
              <div className="mx-auto px-4 sm:px-6 lg:px-8 py-4 max-w-7xl flex justify-between items-center">
                <Navbar />
                <ModeToggle />
              </div>
            </header>
            {children}
            <Footer />
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
