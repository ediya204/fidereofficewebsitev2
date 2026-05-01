import type React from "react"
import type { Metadata } from "next"
import "@/styles/globals.css"

export const metadata: Metadata = {
  title: "FIDERE TRUST | Family Office, Trust & Global Wealth Solutions",
  description: "FIDERE TRUST delivers private trust, family office governance, and cross-border wealth solutions with institutional compliance, custody, and global asset execution.",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return children
}
