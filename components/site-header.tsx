"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { cn } from "@/lib/utils"

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const navItems = [
    {
      name: "ABOUT",
      href: "/about",
      dropdown: [
        { name: "Mission & Vision", href: "/about#mission-vision" },
        { name: "Director's Message", href: "/about#welcome-message" },
        { name: "History", href: "/about#history" },
        { name: "Values", href: "/about#values" },
        { name: "Accreditations", href: "/about#accreditations" },
      ],
    },
    {
      name: "ADMISSIONS",
      href: "/admissions",
      dropdown: [
        { name: "How to Apply", href: "/admissions#how-to-apply" },
        { name: "Requirements", href: "/admissions#requirements" },
        { name: "Fees", href: "/admissions#fees" },
        { name: "FAQs", href: "/admissions#faqs" },
      ],
    },
    {
      name: "ACADEMICS",
      href: "/academics",
      dropdown: [
        { name: "Primary School", href: "/academics#primary" },
        { name: "Junior Secondary", href: "/academics#junior-secondary" },
        { name: "Senior Secondary", href: "/academics#senior-secondary" },
        { name: "Subjects Offered", href: "/academics#subjects" },
      ],
    },
    {
      name: "STUDENT LIFE",
      href: "/student-life",
      dropdown: [
        { name: "Clubs & Activities", href: "/student-life#clubs" },
        { name: "Boarding", href: "/student-life#boarding" },
        { name: "Gallery", href: "/gallery" },
      ],
    },
    // {
    //   name: "PROGRAMS",
    //   href: "/programs",
    //   dropdown: [
    //     { name: "Music Program", href: "/programs#music" },
    //     { name: "Catering & Culinary", href: "/programs#catering" },
    //     { name: "Fashion Design", href: "/programs#fashion" },
    //     { name: "Financial Literacy", href: "/programs#financial" },
    //   ],
    // },
    { name: "CONTACT", href: "/contact", dropdown: [] },
  ]

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Top Bar */}
      <div className="bg-navy-blue text-white py-2">
        <div className="container flex justify-between items-center">
          <div className="flex items-center space-x-4">
            {/* <div className="flex items-center text-sm">
              <Phone className="h-4 w-4 mr-2" />
              <span>+2347068004110 | +2348056157345</span>
            </div> */}
            {/* <div className="hidden md:flex items-center text-sm">
              <Mail className="h-4 w-4 mr-2" />
              <span>greatandyinternationalacademy@gmail.com</span>
            </div> */}
          </div>
          {/* <div className="flex space-x-4">
            <Link href="/calendar" className="text-sm hover:text-gold-yellow transition-colors">
              School Calendar
            </Link>
            <Link href="/parent" className="text-sm hover:text-gold-yellow transition-colors">
              Parent Portal
            </Link>
          </div> */}
        </div>
      </div>

      {/* Main Navigation */}
      <div
        className={cn("bg-navy-blue border-t border-navy-blue/30 transition-all duration-300", scrolled && "shadow-md")}
      >
        <div className=" px-[25px] md:px-[55px] flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              {/* <div
                className={cn(
                  "relative h-16 w-16 bg-school-blue flex items-center justify-center rounded-b-lg shadow-lg transition-all duration-300",
                  scrolled ? "h-14 w-14" : "h-16 w-16",
                )}
              > */}
              <Image src="/gia2.png" alt="Greatandy International Academy" width={70} height={70} />
              {/* </div> */}
              <div className="hidden md:block text-white">
                <div className="text-lg font-bold">GREATANDY</div>
                <div className="text-xs">INTERNATIONAL ACADEMY</div>
              </div>
            </Link>
          </div>

          <nav className="hidden lg:flex items-center">
            {navItems.map((item) => (
              <div key={item.name} className="relative">
                <Link href={item.href} className="nav-item uppercase font-medium text-sm tracking-wider">
                  {item.name}
                </Link>
              </div>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <Button
              asChild
              size="sm"
              className="hidden md:flex bg-school-blue hover:bg-school-blue/90 text-white rounded-full"
            >
              <Link href="/admissions">Apply Now</Link>
            </Button>

            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden text-white p-4">
                  <Menu className="h-10 w-10" size={40} />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="bg-navy-blue text-white border-maroon-red max-h-screen overflow-y-auto"
              >
                <div className="grid gap-6 py-6 h-full">
                  <Link href="/" className="flex items-center space-x-2" onClick={() => setIsOpen(false)}>
                    {/* <div className="relative h-10 w-10 bg-school-blue rounded-full flex items-center justify-center"> */}
                    <Image src="/gia2.png" alt="Greatandy International Academy" width={52} height={52} />
                    {/* </div> */}
                    <div>
                      <div className="text-sm font-bold">GREATANDY</div>
                      <div className="text-xs">INTERNATIONAL ACADEMY</div>
                    </div>
                  </Link>

                  <div className="grid gap-3">
                    {navItems.map((item) => (
                      <div key={item.name} className="space-y-3">
                        <Link
                          href={item.href}
                          className="text-sm font-medium hover:text-gold-yellow uppercase tracking-wider"
                          onClick={() => setIsOpen(false)}
                        >
                          {item.name}
                        </Link>

                        {item.dropdown.length > 0 && (
                          <div className="pl-4 border-l border-gold-yellow/30 space-y-2">
                            {item.dropdown.map((dropItem) => (
                              <Link
                                key={dropItem.name}
                                href={dropItem.href}
                                className="block text-xs text-white/80 hover:text-gold-yellow"
                                onClick={() => setIsOpen(false)}
                              >
                                {dropItem.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>

                  <div className="grid gap-2">
                    <Button
                      asChild
                      size="sm"
                      className="bg-school-blue hover:bg-school-blue/90 text-white"
                      onClick={() => setIsOpen(false)}
                    >
                      <Link href="/admissions">Apply Now</Link>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="border-gold-yellow text-gold-yellow hover:bg-gold-yellow/10"
                      onClick={() => setIsOpen(false)}
                    >
                      <Link href="/contact">Contact Us</Link>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
