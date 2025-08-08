import type { Metadata } from "next";
import { Inter } from 'next/font/google';
import "./globals.css";
import { CDPProvider } from "@/components/cdp-provider";
import { ThemeProvider } from "next-themes";

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
    <html lang="en" suppressHydrationWarning><body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
        >
          <CDPProvider>{children}</CDPProvider>
        </ThemeProvider>
      </body></html>
  );
}
