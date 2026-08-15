import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "硬碟資產選購站｜HDD Sale Catalog",
  description: "二手硬碟健康履歷、品項比較與詢價清單。",
  openGraph: {
    title: "硬碟資產選購站｜HDD Sale Catalog",
    description: "二手硬碟健康履歷、品項比較與詢價清單。",
    type: "website",
    images: ["/og.png"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-Hant">
      <body>{children}</body>
    </html>
  );
}
