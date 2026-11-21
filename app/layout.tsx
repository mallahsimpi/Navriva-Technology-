
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NAVRIVA TECHNOLOGY | Building Tomorrow’s Digital World",

  description:
    "NAVRIVA TECHNOLOGY builds modern websites, custom software, mobile apps and intelligent business solutions.",

  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/apple-icon.png",
  },

  applicationName: "Navriva Technology",

  keywords: [
    "Navriva Technology",
    "Web Development",
    "Software Development",
    "Mobile App Development",
    "Custom Software Solutions",
  ],

  verification: {
    google: "simpi110MALLAH1996",
  },

  openGraph: {
    title: "NAVRIVA TECHNOLOGY",
    description: "Building Tomorrow’s Digital World.",
    siteName: "Navriva Technology",
    type: "website",
    url: "https://navriva-technology-yzpg.vercel.app/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
