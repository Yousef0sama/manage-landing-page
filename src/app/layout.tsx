import type { Metadata } from "next";
import { Be_Vietnam_Pro } from "next/font/google";
import "@/styles/globals.css"; // Ensure global styles are imported

const beVietnamPro = Be_Vietnam_Pro({
  weight: ["400", "500", "700"],
  variable: "--font-be-vietnam-pro",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Manage Landing Page | Frontend Mentor Challenge",
  description:
    "A clean, responsive landing page built with Next.js and Tailwind CSS as part of a Frontend Mentor challenge. Optimized for all devices with smooth layout and UI.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${beVietnamPro.variable} antialiased bg-white`}>{children}</body>
    </html>
  );
}
