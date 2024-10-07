import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import DrawerWrapper from "@/components/drawer-wrapper";
import DrawerContent from "@/components/drawer";
import Header from "@/components/header";
import { ProvidersWrapper } from "../context/ProvidersWrapper";

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
  title: "Verse Boilerplate",
  description: "Verse Boilerplate App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-background antialiased`}
      >
        <ProvidersWrapper>
          <DrawerWrapper>
            <Header />
            <DrawerContent>{children}</DrawerContent>
          </DrawerWrapper>
        </ProvidersWrapper>
      </body>
    </html>
  );
}
