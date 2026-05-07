import type { ReactNode } from "react"
import type { Metadata } from "next"
import Script from "next/script"
import { siteName, siteUrl } from "@/lib/seo"
import "@/styles/globals.css"

const googleTagId = "G-DXNG1F7QFP"

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "香港信托、数字资产与家族信托资产管理 | FIDERE TRUST",
    template: `%s | ${siteName}`,
  },
  description:
    "FIDERE TRUST 提供香港信托、家族信托、数字资产托管与资产管理方案，服务全球家族、专业投资者与企业客户。",
  applicationName: siteName,
  authors: [{ name: siteName }],
  creator: siteName,
  publisher: siteName,
  category: "Trust and asset management services",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${googleTagId}`}
          strategy="afterInteractive"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${googleTagId}');
            `,
          }}
        />
      </body>
    </html>
  )
}
