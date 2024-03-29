import "./globals.css";
import type { Metadata } from "next";
import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";
import { MantineProvider, ColorSchemeScript } from "@mantine/core";
import SideBar from "./components/sidebar/sidebar";
import * as styles from "./styles";

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
      <body className={styles.body}>
        <MantineProvider>
          <div className="absolute">
            <SideBar />
          </div>
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
