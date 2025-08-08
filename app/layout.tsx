import type { Metadata } from "next";
import { Inter } from 'next/font/google';
import "./globals.css";
import { CDPProvider } from "@/components/cdp-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "John Doe's Wishlist",
  description: "Help fund the gear I need to keep the podcast going.",
  generator: 'v0.dev',
  icons: {
    icon: '/avatar.png',
    shortcut: '/avatar.png',
    apple: '/avatar.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" style={{ backgroundColor: '#222222' }}>
      <body className={inter.className} style={{ backgroundColor: '#222222' }}>
        <CDPProvider>{children}</CDPProvider>
      </body>
    </html>
  );
}
