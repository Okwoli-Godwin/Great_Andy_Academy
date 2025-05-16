"use client"

import * as React from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"
import { Quote } from "lucide-react"

interface Testimonial {
  name: string
  role: string
  content: string
  imageSrc: string
}

export function TestimonialSlider() {
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const [count, setCount] = React.useState(0)

  const testimonials: Testimonial[] = [
    {
      name: "Mrs. Iguoba Beckybryte",
      role: "Parent Testimonial",
      content:
        "I'm proud to be a parent at Greatandy International Academy. The school excels in academics, discipline, and guiding students toward their dreams. With dedicated leadership and outstanding results, enrolling my children here is one of my best decisions. Thank you to the Director and team for your commitment to excellence in Okpella.",
      imageSrc: "/iguoba.jpg",
    },
    {
      name: "Mrs. Temitope Hope ",
      role: "Parent Testimonial",
      content:
        "Greatandy International Academy leads in academics and discipline—it's the best school I've seen in Okpella. Their commitment to raising well-rounded children is impressive. My advice to parents: stay involved, check assignments, and partner with the school to raise future leaders.",
      imageSrc: "/temi.jpg",
    },
    {
      name: "Dr. Adeyemi",
      role: "Parent of SSS3 Student",
      content:
        "The quality of education and personal attention given to students at Greatandy is exceptional. The school has prepared my child well for university and beyond.",
      imageSrc: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "Mrs. Nwachukwu",
      role: "Parent of JSS1 Student",
      content:
        "Choosing Greatandy was the best decision for my child's education. The academic standards are high, and the environment nurtures confidence and creativity.",
      imageSrc: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "Mr. Adekunle",
      role: "Parent of Primary 3 Student",
      content:
        "I'm impressed by how the teachers at Greatandy make learning fun and engaging. My child is always excited to go to school and share what they've learned.",
      imageSrc: "/placeholder.svg?height=80&width=80",
    },
  ]

  React.useEffect(() => {
    if (!api) return

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })

    // Auto-play functionality
    const autoplayInterval = setInterval(() => {
      api.scrollNext()
    }, 5000)

    return () => clearInterval(autoplayInterval)
  }, [api])

  return (
    <div className="mx-auto max-w-5xl">
      <Carousel
        setApi={setApi}
        className="w-full"
        opts={{
          align: "center",
          loop: true,
        }}
      >
        <CarouselContent>
          {testimonials.map((testimonial, index) => (
            <CarouselItem key={index} className="md:basis-1/1 lg:basis-4/5 pl-1">
              <div className="p-1">
                <Card className="border-none shadow-lg bg-white rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl">
                  <CardContent className="p-0">
                    <div className="grid md:grid-cols-[1fr_2fr] overflow-hidden">
                      <div className="bg-school-blue p-8 flex flex-col justify-center items-center text-white">
                        <div className="h-20 w-20 rounded-full bg-white/10 overflow-hidden mb-4 ring-4 ring-white/20">
                          <Image
                            src={testimonial.imageSrc || "/placeholder.svg"}
                            width={80}
                            height={80}
                            alt={testimonial.name}
                            className="object-cover"
                          />
                        </div>
                        <h4 className="font-bold text-xl">{testimonial.name}</h4>
                        <p className="text-sm text-blue-100">{testimonial.role}</p>
                      </div>
                      <div className="p-8 flex flex-col justify-center relative">
                        <Quote className="absolute text-blue-100 w-12 h-12 top-4 left-4 opacity-20" />
                        <p className="text-muted-foreground italic text-lg relative z-10 pl-6">
                          "{testimonial.content}"
                        </p>
                        <div className="flex mt-4 justify-end">
                          <div className="flex space-x-1">
                            {[...Array(5)].map((_, i) => (
                              <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24">
                                <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                              </svg>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="absolute -bottom-12 left-0 right-0 flex justify-center gap-2">
          {Array.from({ length: count }).map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === current - 1 ? "bg-school-blue scale-125" : "bg-gray-300"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white" />
        <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white" />
      </Carousel>
    </div>
  )
}
