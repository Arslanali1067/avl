import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Aloha AVL | Audio, Video, and Lighting Solutions",
    template: "%s | Aloha AVL",
  },
  description: "Aloha AVL designs and installs custom audio, video, and lighting solutions tailored to your space.",
  icons: {
    icon: "/aloha-avl-logo-light.png",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
