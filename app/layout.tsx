import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Husnain Mazhar — Software Engineer · Python, Backend & AI Systems",
  description:
    "Personal portfolio of Husnain Mazhar, Software Engineer specializing in Python, FastAPI, Django/DRF, High-Throughput REST APIs, and Applied AI Engineering.",
  authors: [{ name: "Husnain Mazhar" }],
  openGraph: {
    title: "Husnain Mazhar — Software Engineer",
    description:
      "Classical editorial design meets modern software engineering. Python, FastAPI, Django, and Applied AI systems.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Husnain Mazhar — Software Engineer",
    description: "Reliable backend architectures and intelligent systems with Python.",
  },
};

export const viewport: Viewport = {
  themeColor: "#FAF8F5",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,300..700;1,14..32,300..500&family=JetBrains+Mono:ital,wght@0,300..600;1,400&family=Newsreader:ital,opsz,wght@0,6..72,300..700;1,6..72,300..600&display=swap"
          rel="stylesheet"
        />
        <meta id="meta-theme-color" name="theme-color" content="#FAF8F5" />
      </head>
      <body>{children}</body>
    </html>
  );
}
