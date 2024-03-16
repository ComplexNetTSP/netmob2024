import type { Metadata } from "next";
import { Atrament } from './fonts';
import { GeistSans } from 'geist/font/sans';
import "./globals.css";

export const metadata: Metadata = {
  title: "Netmob 2024",
  description: "Official website of Netmob 2024",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${GeistSans.variable} ${Atrament.variable} font-sans`}>{children}</body>
    </html>
  );
}
