import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pexalune Technologies | Building Tomorrow’s Digital World",
  description: "Pexalune Technologies builds modern websites, custom software, mobile apps and intelligent business solutions.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
