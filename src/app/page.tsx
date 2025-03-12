'use client'

import React from 'react'
import Image from 'next/image'
import { Camera } from 'lucide-react'

export default function Home() {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative h-screen">
                <Image
                    src="/background.jpg"
                    alt="Hero Photography"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/40" />

                {/* <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">
                        SEE THE UNSEEN 2025
                    </h1>
                    <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto px-4">
                        Capturing moments that tell stories, creating memories that last forever
                    </p>
                </div> */}

                {/* Bottom Right Logo */}
                <div className="absolute bottom-8 right-8">
                    <Camera className="w-12 h-12" />
                </div>
            </section>

            {/* Featured Work Preview */}
            <section className="container mx-auto px-4 py-16">
                <h2 className="text-3xl font-bold mb-8">Featured Work</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[1011, 1015, 1018].map((id) => (
                        <div key={id} className="relative aspect-[4/5] group overflow-hidden">
                            <Image
                                src={`https://picsum.photos/id/${id}/800/1000`}
                                alt={`Featured work ${id}`}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <p className="text-lg font-medium">View Gallery</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
} 