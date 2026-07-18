import type { Metadata } from "next";
import "./globals.css";

const title = "JayHaul Junk Removal | From Clutter to Clean";
const description =
  "JayHaul Junk Removal offers volume-based junk removal pricing starting at $100, with clear quotes before loading.";

export const metadata: Metadata = {
  title,
  description,
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  openGraph: {
    title,
    description,
    type: "website",
  },
  twitter: {
    card: "summary",
    title,
    description,
  },
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
