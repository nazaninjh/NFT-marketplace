import { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "NFT Marketplace",
  description: "Discover digital art & Collect NFTs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
