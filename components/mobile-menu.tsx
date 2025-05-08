"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"

export function MobileMenu() {
  const [open, setOpen] = useState(false)

  const menuItems = [
    { name: "ABOUT", href: "/about" },
    { name: "ADMISSIONS", href: "/admissions" },
    { name: "ACADEMICS", href: "/academics" },
    { name: "PROGRAMS", href: "/programs" },
    { name: "GIVING", href: "/giving" },
  ]

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden text-white">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="bg-navy-blue text-white border-bridges-red">
        <SheetHeader>
          <SheetTitle className="text-white">Menu</SheetTitle>
        </SheetHeader>
        <nav className="flex flex-col gap-4 mt-8">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-lg font-medium py-2 border-b border-gray-700 hover:text-bridges-yellow transition-colors"
              onClick={() => setOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <div className="mt-4 pt-4 border-t border-gray-700">
            <Link
              href="/contact"
              className="bg-bridges-red text-white px-4 py-2 rounded-full font-medium hover:bg-red-800 transition-colors inline-block"
              onClick={() => setOpen(false)}
            >
              Contact
            </Link>
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  )
}
