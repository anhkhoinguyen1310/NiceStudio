'use client'

import React from 'react'
import Image from 'next/image'
import StickyDivider from '@/components/layout/StickyDivider'

export default function CommercialPage() {
    return (
        <div className="container mx-auto px-4 py-20">
            <StickyDivider />
            <h1 className="text-4xl font-bold mb-8 text-black mt-8">Beauty</h1>
            <p className="mb-6 text-lg text-gray-700">
                Explore our beauty photography projects that showcase creativity and artistic expression.
            </p>
            {/* Add your beauty content here */}
            <section className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                        { id: 1011, label: 'Street' },
                        { id: 1012, label: 'Nature' },
                        { id: 1013, label: 'Urban' },
                        { id: 1014, label: 'Portrait' },
                        { id: 1015, label: 'Family' },
                        { id: 1016, label: 'Wedding' },
                    ].map(({ id, label }) => (
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