import type { Metadata } from "next"
import { JetBrainsMono } from "@/app/fonts/font-loader"
import "./globals.css"
import ThemeProvider from "@/components/theme-provider"

export const metadata: Metadata = {
  title: "0xktee - Personal Website",
  description: "Korrawich Khosripetch's personal website",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        {/* Cloudflare Web Analytics */}
        <script
          defer
          src="https://static.cloudflareinsights.com/beacon.min.js"
          data-cf-beacon={`{"token": "${process.env.CFWA_TOKEN}"}`}
        />
        {/* End Cloudflare Web Analytics */}
      </head>
      <body className={`${JetBrainsMono.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
