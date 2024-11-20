// src/app/layout.tsx
import type { Metadata } from "next";
import localFont from "next/font/local";
import Link from 'next/link';
import "@/styles/globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "NYT Bestsellers",
  description: "New York Times Bestsellers Explorer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <nav className="nav">
          <div className="nav-content">
            <Link href="/" className="logo">
              NYT Bestsellers
            </Link>
            <div className="nav-links">
              <Link href="/" className="nav-link">
                Home
              </Link>
              <Link href="/about" className="nav-link">
                About
              </Link>
            </div>
          </div>
        </nav>
        <main className="main">
          {children}
        </main>
        <footer className="footer">
          <p>&copy; 2024 NYT Bestsellers Explorer</p>
        </footer>
      </body>
    </html>
  );
}