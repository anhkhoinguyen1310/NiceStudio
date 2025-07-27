'use client'

import React from 'react'
import Image from 'next/image'
import { Camera } from 'lucide-react'
import Link from 'next/link'

export default function Home() {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative flex items-center justify-center py-12 pt-24">
                <div className="container mx-auto px-4 flex justify-center">
                    <Image
                        src="/background.JPG"
                        alt="Hero Photography"
                        width={800}
                        height={1000}
                        className="rounded-lg shadow-lg object-cover w-full h-auto"
                        priority
                    />
                </div>



                {/* Bottom Right Logo */}
                <div className="absolute bottom-8 right-8">
                    <Camera className="w-12 h-12" />
                </div>
            </section>

            {/* Featured Work Preview */}
            <section className="container mx-auto px-4 py-16">
                <h2 className="text-3xl font-bold text-black mb-8">Works</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[{
                        id: 1001,
                        label: 'Personal Work',
                        href: '/personal-work'
                    }, {
                        id: 1002,
                        label: 'Commercial Services',
                        href: '/commercial'
                    }, {
                        id: 1003,
                        label: 'Personalize',
                        href: '/personalize'

                    }].map(({ id, label, href }) => (
                        <div key={id} className=" group">
                            <div className="relative aspect-[4/5] overflow-hidden">
                                <Image
                                    src={`https://picsum.photos/id/${id}/800/1000`}
                                    alt={label}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black" />
                                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <Link href={href}>
                                        <p className="text-lg font-medium underline cursor-pointer">View Gallery</p>
                                    </Link>
                                </div>
                            </div>
                            {/* Link to the gallery */}
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