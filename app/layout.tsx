import type { Metadata } from "next";
import "./globals.css";

const title = "JayHaul Junk Removal | From Clutter to Clean";
const description =
  "JayHaul Junk Removal helps clear garages, furniture, appliances, rental cleanouts, and clutter with simple local hauling service.";

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
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "JayHaul Junk Removal branded cleanout preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og.png"],
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
