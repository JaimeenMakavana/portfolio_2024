import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jaimeen M.",
  description: "For curiosity purpose.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`montserrat bg-[--offwhite]`}>{children}</body>
    </html>
  );
}
