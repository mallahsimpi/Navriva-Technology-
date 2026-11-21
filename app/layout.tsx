// import type { Metadata } from "next";
// import "./globals.css";

// export const metadata: Metadata = {
//   title: "NAVRIVA TECHNOLOGY | Building Tomorrow’s Digital World",
//   description: "NAVRIVA TECHNOLOGY builds modern websites, custom software, mobile apps and intelligent business solutions.",
// };

// export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
//   return <html lang="en"><body>{children}</body></html>;
// }

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

  openGraph: {
    title: "NAVRIVA TECHNOLOGY",
    description:
      "Building Tomorrow’s Digital World.",
    siteName: "Navriva Technology",
    type: "website",
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
