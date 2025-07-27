'use client'

import React from 'react'
import Image from 'next/image'
import StickyDivider from '@/components/layout/StickyDivider'

export default function WeddingPage() {
    return (
        <div className="container mx-auto px-4 py-20">
            <StickyDivider />
            <h1 className="text-4xl font-bold mb-8 text-black mt-8">Wedding</h1>
            <p className="mb-6 text-lg text-gray-700">
                View our wedding photography projects that celebrate love and special moments.
            </p>
            <section className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                        { id: 1041, label: 'Ceremony' },
                        { id: 1042, label: 'Reception' },
                        { id: 1043, label: 'Couple Portraits' },
                    ].map(({ id, label }) => (
                        <div key={id} className="relative aspect-[4/5] group overflow-hidden flex flex-col">
                            <div className="relative w-full h-full">
                                <Image
                                    src={`https://picsum.photos/id/${id}/800/1000`}
                                    alt={label}
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-black" />
                                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <p className="text-lg font-medium">View Gallery</p>
                                </div>
                            </div>
                            <div className="mt-4 text-center text-black text-lg font-semibold">
                                {label}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}