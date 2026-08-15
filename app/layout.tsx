import type { Metadata } from "next";
import "./globals.css";

const isGitHubPages = process.env.GITHUB_PAGES === "true";
const publicBaseUrl = "https://0xImwhatIm.github.io/hdd-sale-catalog";
const publicAssetPrefix = isGitHubPages ? "/hdd-sale-catalog" : "";

export const metadata: Metadata = {
  ...(isGitHubPages ? { metadataBase: new URL(`${publicBaseUrl}/`) } : {}),
  title: "硬碟資產選購站｜HDD Sale Catalog",
  description: "二手硬碟健康履歷、品項比較與詢價清單。",
  openGraph: {
    title: "硬碟資產選購站｜HDD Sale Catalog",
    description: "二手硬碟健康履歷、品項比較與詢價清單。",
    type: "website",
    images: [isGitHubPages ? `${publicBaseUrl}/og.png` : "/og.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "硬碟資產選購站｜HDD Sale Catalog",
    description: "二手硬碟健康履歷、品項比較與詢價清單。",
    images: [isGitHubPages ? `${publicBaseUrl}/og.png` : "/og.png"],
  },
  icons: {
    icon: `${publicAssetPrefix}/favicon.svg`,
    shortcut: `${publicAssetPrefix}/favicon.svg`,
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
