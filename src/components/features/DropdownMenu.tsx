'use client'

import React from 'react'
import Link from 'next/link'

interface DropdownItem {
    label: string
    href: string
}

interface DropdownMenuProps {
    items: DropdownItem[]
    onMouseEnter?: () => void
    onMouseLeave?: () => void
}

export default function DropdownMenu({ items, onMouseEnter, onMouseLeave }: DropdownMenuProps) {
    return (
        <div
            className="absolute top-full left-0 mt-1 w-48 bg-white/95 backdrop-blur-sm rounded-md shadow-lg overflow-hidden"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            <div className="py-1">
                {items.map((item) => (
                    <Link
                        key={item.label}
                        href={item.href}
                        className="block px-4 py-2 text-sm text-black hover:bg-gray-800 hover:text-white transition-colors"
                    >
                        {item.label}
                    </Link>
                ))}
            </div>
        </div>
    )
} 