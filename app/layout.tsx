import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NAVRIVA TECHNOLOGY | Building Tomorrow’s Digital World",
  description: "NAVRIVA TECHNOLOGY builds modern websites, custom software, mobile apps and intelligent business solutions.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
