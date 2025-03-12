'use client'

import React, { useState, useCallback } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, ChevronDown } from 'lucide-react'
import DropdownMenu from '@/components/features/DropdownMenu'

const navigationItems = [
    {
        label: 'Personal Work',
        href: '/personal-work',
        submenu: [
            // { label: 'Street', href: '/personal-work/street' },
            // { label: 'Nature', href: '/personal-work/nature' },
            // { label: 'Urban', href: '/personal-work/urban' },
        ],
    },
    {
        label: 'Commercial Services',
        href: '/commercial',
        submenu: [
            { label: 'Fashion/Lookbook', href: '/commercial/fashion' },
            { label: 'Beauty', href: '/commercial/beauty' },
            { label: 'Advertising', href: '/commercial/advertising' },
        ],
    },
    {
        label: 'Personalize',
        href: '/personalize',
        submenu: [
            { label: 'Portrait', href: '/personalize/portrait' },
            { label: 'Family', href: '/personalize/family' },
            { label: 'Wedding', href: '/personalize/wedding' },
        ],
    },
    {
        label: 'About Us',
        href: '/about',
        submenu: [
            { label: 'Introduction', href: '/about/intro' },
            { label: 'Contact Us', href: '/about/contact' },
        ],
    },
]

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
    const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null)

    const handleMouseEnter = useCallback((label: string) => {
        if (timeoutId) clearTimeout(timeoutId)
        setActiveDropdown(label)
    }, [timeoutId])

    const handleMouseLeave = useCallback(() => {
        const id = setTimeout(() => {
            setActiveDropdown(null)
        }, 300) // 300ms delay before closing
        setTimeoutId(id)
    }, [])

    return (
        <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm">
            <nav className="container mx-auto px-4 h-16">
                <div className="flex items-center justify-between h-full mr-15">
                    <Link href="/" className="relative w-[250px] h-[90px]">
                        <Image
                            src="/NICEE.png"
                            alt="Logo"
                            fill
                            className="object-contain"
                            priority
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navigationItems.map((item) => (
                            <div
                                key={item.label}
                                className="relative group"
                                onMouseEnter={() => handleMouseEnter(item.label)}
                                onMouseLeave={handleMouseLeave}
                            >
                                <Link
                                    href={item.href}
                                    className="flex items-center space-x-1 hover:text-gray-300 transition-colors"
                                >
                                    <span>{item.label}</span>
                                    <ChevronDown className="w-4 h-4" />
                                </Link>
                                {activeDropdown === item.label && (
                                    <DropdownMenu
                                        items={item.submenu}
                                        onMouseEnter={() => handleMouseEnter(item.label)}
                                        onMouseLeave={handleMouseLeave}
                                    />
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        <Menu className="w-6 h-6" />
                    </button>
                </div>

                {/* Mobile Navigation */}
                {mobileMenuOpen && (
                    <div className="md:hidden absolute top-16 left-0 right-0 bg-black/95 backdrop-blur-sm">
                        <div className="px-4 py-2">
                            {navigationItems.map((item) => (
                                <div key={item.label} className="py-2">
                                    <Link
                                        href={item.href}
                                        className="block py-2 hover:text-gray-300 transition-colors"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        {item.label}
                                    </Link>
                                    <div className="pl-4">
                                        {item.submenu.map((subItem) => (
                                            <Link
                                                key={subItem.label}
                                                href={subItem.href}
                                                className="block py-2 text-sm text-gray-400 hover:text-white transition-colors"
                                                onClick={() => setMobileMenuOpen(false)}
                                            >
                                                {subItem.label}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </nav>
        </header>
    )
} 