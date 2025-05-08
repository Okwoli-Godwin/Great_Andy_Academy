"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

export function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      image: "/placeholder.svg?height=600&width=1200",
      alt: "School building",
      title: "The Greatandy Difference...",
      subtitle: "CHARACTER · CONFIDENCE · KNOWLEDGE",
    },
    {
      image: "/placeholder.svg?height=600&width=1200",
      alt: "Students in classroom",
      title: "Academic Excellence",
      subtitle: "Nurturing Minds, Building Futures",
    },
    {
      image: "/placeholder.svg?height=600&width=1200",
      alt: "School activities",
      title: "Holistic Education",
      subtitle: "Developing Character and Skills for Life",
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [slides.length])

  return (
    <div className="relative h-[500px] md:h-[600px] w-full overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={cn(
            "absolute inset-0 transition-opacity duration-1000",
            index === currentSlide ? "opacity-100" : "opacity-0",
          )}
        >
          <Image
            src={slide.image || "/placeholder.svg"}
            alt={slide.alt}
            fill
            className="object-cover"
            priority={index === 0}
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <div className="text-center text-white px-4">
              <h1 className="text-school-blue text-4xl md:text-5xl lg:text-6xl font-serif italic mb-4 text-shadow">
                {slide.title}
              </h1>
              <div className="text-gold-yellow text-xl md:text-2xl font-medium mt-8 tracking-wider text-shadow">
                {slide.subtitle}
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Indicators */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={cn(
              "w-3 h-3 rounded-full transition-all duration-300",
              index === currentSlide ? "bg-gold-yellow w-6" : "bg-white/50 hover:bg-white",
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Wave overlay */}
      <div className="hero-wave">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>

      {/* Open House Button */}
      <div className="absolute top-4 right-4 animate-bounce-slow">
        <button className="bg-school-blue text-white px-4 py-2 rounded-full font-medium hover:bg-school-blue/90 transition-colors shadow-lg">
          Open House
        </button>
      </div>

      {/* Contact Us Button */}
      <div className="absolute top-1/3 right-4">
        <button className="bg-gold-yellow text-navy-blue px-4 py-2 rounded-full font-medium hover:bg-gold-yellow/90 transition-colors shadow-lg">
          Contact Us!
        </button>
      </div>
    </div>
  )
}
