import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="bg-navy-blue text-white">
      <div className="container px-4 md:px-6 py-12">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              {/* <div className="relative h-12 w-12 bg-school-blue rounded-lg overflow-hidden flex items-center justify-center"> */}
                <Image
                  src="/great.jpg"
                  alt="Greatandy International Academy"
                  width={80}
                  height={80}
                />
              {/* </div> */}
              <div>
                <div className="text-lg font-bold">GREATANDY</div>
                <div className="text-xs">INTERNATIONAL ACADEMY</div>
              </div>
            </Link>
            <p className="text-sm">Bringing Up Greater Academicians and Disciplined Personnel.</p>
            <div className="flex space-x-4">
              <Link href="https://www.facebook.com/GreatandyInternationalAcademyGIA/" className="hover:text-gold-yellow transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="hover:text-gold-yellow transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="hover:text-gold-yellow transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-gold-yellow">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:text-gold-yellow transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/academics" className="hover:text-gold-yellow transition-colors">
                  Academics
                </Link>
              </li>
              <li>
                <Link href="/admissions" className="hover:text-gold-yellow transition-colors">
                  Admissions
                </Link>
              </li>
              <li>
                <Link href="/student-life" className="hover:text-gold-yellow transition-colors">
                  Student Life
                </Link>
              </li>
              <li>
                <Link href="/programs" className="hover:text-gold-yellow transition-colors">
                  Programs
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-gold-yellow transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-gold-yellow">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex">
                <MapPin className="h-5 w-5 mr-2 flex-shrink-0 text-school-blue" />
                <span>
                  Greatandy Avenue, Okpella, 3 KM After Ewo Market, Before Old Factory & Okpella Resort, Edo State,
                  Nigeria
                </span>
              </li>
              <li className="flex">
                <Phone className="h-5 w-5 mr-2 flex-shrink-0 text-school-blue" />
                <span>+2347068004110 | +2348056157345</span>
              </li>
              <li className="flex">
                <Mail className="h-5 w-5 mr-2 flex-shrink-0 text-school-blue" />
                <span>greatandyinternationalacademy@gmail.com</span>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-gold-yellow">Newsletter</h3>
            <p className="text-sm">Subscribe to our newsletter for updates.</p>
            <div className="flex space-x-2">
              <Input
                type="email"
                placeholder="Your email"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
              />
              <Button className="bg-school-blue hover:bg-school-blue/90 text-white">Subscribe</Button>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-white/20 text-center text-sm">
          <p>© {new Date().getFullYear()} Greatandy International Academy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
