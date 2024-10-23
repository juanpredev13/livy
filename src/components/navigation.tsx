'use client'

import { useState } from 'react'
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from 'lucide-react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { href: "#", label: "Nosotros" },
    { href: "#", label: "Planes de campaña" },
    { href: "#", label: "Pricing" },
    { href: "#", label: "Casos de uso" },
  ]

  return (
    <nav className="flex justify-between items-center w-full">
      <Link href="/" className="text-purple-600 text-2xl font-bold">
        Livy
      </Link>
      
      {/* Desktop Navigation */}
      <ul className="hidden md:flex space-x-6">
        {navItems.map((item) => (
          <li key={item.label}>
            <Link href={item.href} className="text-gray-700 hover:text-purple-600 text-sm font-medium">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile Navigation */}
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" className="p-0 md:hidden" onClick={() => setIsOpen(true)}>
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle Menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-[300px] sm:w-[400px]">
          <nav className="flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="block px-2 py-1 text-lg text-gray-700 hover:text-purple-600"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
    </nav>
  )
}