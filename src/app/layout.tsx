import { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "./globals.css";
export const metadata: Metadata = {
  title: "NFT Marketplace",
  description: "Discover digital art & Collect NFTs",
};
const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--work-sans",
  weight: "400",
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr" className={workSans.variable}>
      <body className="dark">{children}</body>
    </html>
  );
}
