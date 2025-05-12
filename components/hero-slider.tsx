"use client"

import { useState, useEffect, useRef } from "react"
import { cn } from "@/lib/utils"

export function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([])

  const slides = [
    {
      video: "/videos/school1.mp4", // Update with your actual video path
      alt: "School building",
      title: "The Greatandy Difference...",
      subtitle: "CHARACTER · CONFIDENCE · KNOWLEDGE",
    },
    {
      video: "/videos/school2.mp4", // Update with your actual video path
      alt: "Students in classroom",
      title: "Academic Excellence",
      subtitle: "Nurturing Minds, Building Futures",
    },
    {
      video: "/videos/school3.mp4", // Update with your actual video path
      alt: "School activities",
      title: "Holistic Education",
      subtitle: "Developing Character and Skills for Life",
    },
  ]

  // Handle slide transitions
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [slides.length])

  // Handle video playback when slide changes
  useEffect(() => {
    // Pause all videos
    videoRefs.current.forEach((video) => {
      if (video) {
        video.pause()
      }
    })

    // Play the current video
    const currentVideo = videoRefs.current[currentSlide]
    if (currentVideo) {
      currentVideo.currentTime = 0
      currentVideo.play().catch((error) => {
        console.error("Video playback failed:", error)
      })
    }
  }, [currentSlide])

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
          <video
            ref={(el) => {
              videoRefs.current[index] = el
            }}
            src={slide.video}
            muted
            playsInline
            loop
            className="object-cover h-full w-full"
            aria-label={slide.alt}
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <div className="text-center text-white px-4">
              <h1 className="text-school-blue text-4xl md:text-5xl lg:text-6xl font-serif italic mb-4 text-shadow">
                {slide.title}
              </h1>
              <div className="text-gold-yellow text-xl md:text-2xl font-medium mt-8 tracking-wider text-shadow z-20">
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

      {/* Single Wave Overlay */}
      <div className="hero-wave">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path
            fill="#FFFFFF"
            className="single-wave"
            d="M0,160L48,144C96,128,192,96,288,90.7C384,85,480,107,576,138.7C672,171,768,213,864,240C960,267,1056,277,1152,250.7C1248,224,1344,160,1392,128L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
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
