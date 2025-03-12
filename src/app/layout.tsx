import React from 'react'
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'NICE STUDIO',
    description: 'Minimalist Photography Portfolio showcasing artistic and commercial work',
    icons: {
        icon: [
            {
                url: '/favicon.ico',
                sizes: 'any',
            },
            {
                url: '/favicon.ico',
                sizes: '32x32',
            },
        ],
    },
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={`${montserrat.className} bg-black text-white min-h-screen`}>
                <Header />
                <main>
                    {children}
                </main>
            </body>
        </html>
    )
} 