'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import StickyDivider from '@/components/layout/StickyDivider'

export default function CommercialPage() {
    return (
        <div className="container mx-auto px-4 py-20">
            <StickyDivider />
            <h1 className="text-4xl font-bold mb-8 text-black mt-8">Personalize</h1>
            <p className="mb-6 text-lg text-gray-700">
                Explore our personalized photography services tailored to your unique vision.
            </p>
            {/* Add your personalized content here */}

            <section className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                        { id: 1011, label: 'Portrait', href: '/personalize/portrait' },
                        { id: 1015, label: 'Family', href: '/personalize/family' },
                        { id: 1018, label: 'Wedding', href: '/personalize/wedding' },
                    ].map(({ id, label, href }) => (
                        <div key={id} className="relative aspect-[4/5] group overflow-hidden flex flex-col">
                            <div className="relative w-full h-full">
                                <Image
                                    src={`https://picsum.photos/id/${id}/800/1000`}
                                    alt={`Featured work ${id}`}
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-black" />
                                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <Link href={href}>
                                        <p className="text-lg font-medium underline cursor-pointer">View Gallery</p>
                                    </Link>
                                </div>
                            </div>
                            <Link href={href}>
                                <div className="mt-4 text-center text-black text-lg font-semibold underline cursor-pointer">
                                    {label}
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}