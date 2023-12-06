import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";
import { MantineProvider, ColorSchemeScript } from "@mantine/core";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Efrain Ceh Pavia",
  description: "My website - Efrain Ceh Pavia",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body className="bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500 min-h-screen">
        <MantineProvider>{children}</MantineProvider>
      </body>
    </html>
  );
}
