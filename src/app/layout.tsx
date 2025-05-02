import type { Metadata } from 'next'
import { DM_Sans as FontSans, DM_Mono as FontMono } from 'next/font/google'

import './globals.css'
import { cn } from '@/lib/utils'

const fontSans = FontSans({
  variable: '--font-sans',
  subsets: ['latin'],
})

const fontMono = FontMono({
  variable: '--font-mono',
  subsets: ['latin'],
  weight: ['400', '500'],
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL),
  title: '🧱 Nextalism',
  description: 'Minimalist Next.js app template with Neobrutalism UI',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          fontSans.variable,
          fontMono.variable,
          'font-sans text-emerald-950 antialiased',
          'bg-emerald-50 bg-[linear-gradient(to_right,#80808033_1px,transparent_1px),linear-gradient(to_bottom,#80808033_1px,transparent_1px)] bg-[size:48px_48px]',
        )}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  )
}
