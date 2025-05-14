"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock, ChevronDown, Send } from "lucide-react"
import { useState } from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function ContactPage() {
  const [activeQuestion, setActiveQuestion] = useState<number | null>(null)

  const toggleQuestion = (index: number) => {
    setActiveQuestion(activeQuestion === index ? null : index)
  }

  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-white py-20">
        <div className="container px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Contact Us</h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            We're here to answer your questions and help you learn more about Greatandy International Academy.
          </p>
          <div className="w-24 h-1 bg-white/30 mx-auto mt-8"></div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white md:px-[45px] relative">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
        <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-20 h-20 bg-white rounded-full shadow-lg flex items-center justify-center">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
            <MapPin className="h-8 w-8 text-primary" />
          </div>
        </div>

        <div className="container px-4 md:px-6 pt-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Get in Touch</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We'd love to hear from you. Reach out using any of the methods below.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {/* Location Card */}
            <div className="group relative bg-white rounded-xl overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-gray-100">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-blue-600 transform origin-left transition-all duration-300 group-hover:h-2"></div>
              <div className="p-8 flex flex-col items-center text-center">
                <div className="relative mb-6">
                  <div className="absolute -inset-3 bg-blue-50 rounded-full blur-sm transform transition-all duration-300 group-hover:scale-110"></div>
                  <div className="h-16 w-16 rounded-full bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center relative border-2 border-blue-200 transform transition-all duration-300 group-hover:scale-110 group-hover:border-blue-300">
                    <MapPin className="h-8 w-8 text-blue-500" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                  Our Location
                </h3>
                <div className="w-12 h-0.5 bg-blue-200 mb-4 transition-all duration-300 group-hover:w-16 group-hover:bg-blue-400"></div>
                <p className="text-muted-foreground">
                  Greatandy Avenue, Okpella, 3 KM After Ewo Market, Before Old Factory & Okpella Resort, Edo State,
                  Nigeria.
                </p>
              </div>
            </div>

            {/* Phone Card */}
            <div className="group relative bg-white rounded-xl overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-gray-100">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 to-emerald-600 transform origin-left transition-all duration-300 group-hover:h-2"></div>
              <div className="p-8 flex flex-col items-center text-center">
                <div className="relative mb-6">
                  <div className="absolute -inset-3 bg-green-50 rounded-full blur-sm transform transition-all duration-300 group-hover:scale-110"></div>
                  <div className="h-16 w-16 rounded-full bg-gradient-to-br from-green-100 to-green-50 flex items-center justify-center relative border-2 border-green-200 transform transition-all duration-300 group-hover:scale-110 group-hover:border-green-300">
                    <Phone className="h-8 w-8 text-green-500" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-green-600 transition-colors duration-300">
                  Phone
                </h3>
                <div className="w-12 h-0.5 bg-green-200 mb-4 transition-all duration-300 group-hover:w-16 group-hover:bg-green-400"></div>
                <p className="text-muted-foreground">
                  +2347068004110
                  <br />
                  +2348056157345
                </p>
              </div>
            </div>

            {/* Email Card */}
            <div className="group relative bg-white rounded-xl overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-gray-100">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-400 to-indigo-600 transform origin-left transition-all duration-300 group-hover:h-2"></div>
              <div className="p-8 flex flex-col items-center text-center">
                <div className="relative mb-6">
                  <div className="absolute -inset-3 bg-purple-50 rounded-full blur-sm transform transition-all duration-300 group-hover:scale-110"></div>
                  <div className="h-16 w-16 rounded-full bg-gradient-to-br from-purple-100 to-purple-50 flex items-center justify-center relative border-2 border-purple-200 transform transition-all duration-300 group-hover:scale-110 group-hover:border-purple-300">
                    <Mail className="h-8 w-8 text-purple-500" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-purple-600 transition-colors duration-300">
                  Email
                </h3>
                <div className="w-12 h-0.5 bg-purple-200 mb-4 transition-all duration-300 group-hover:w-16 group-hover:bg-purple-400"></div>
                <div className="bg-purple-50 px-3 py-2 rounded-lg border border-purple-100 w-full overflow-hidden text-ellipsis">
                  <p className="text-purple-700 text-sm font-medium truncate group-hover:whitespace-normal transition-all duration-300">
                    greatandyinternationalacademy@gmail.com
                  </p>
                </div>
                <button className="mt-3 text-xs text-purple-600 hover:text-purple-800 transition-colors duration-200 flex items-center gap-1">
                  <Mail className="h-3 w-3" /> Copy Email
                </button>
              </div>
            </div>

            {/* Office Hours Card */}
            <div className="group relative bg-white rounded-xl overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-gray-100">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-400 to-orange-600 transform origin-left transition-all duration-300 group-hover:h-2"></div>
              <div className="p-8 flex flex-col items-center text-center">
                <div className="relative mb-6">
                  <div className="absolute -inset-3 bg-amber-50 rounded-full blur-sm transform transition-all duration-300 group-hover:scale-110"></div>
                  <div className="h-16 w-16 rounded-full bg-gradient-to-br from-amber-100 to-amber-50 flex items-center justify-center relative border-2 border-amber-200 transform transition-all duration-300 group-hover:scale-110 group-hover:border-amber-300">
                    <Clock className="h-8 w-8 text-amber-500" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-amber-600 transition-colors duration-300">
                  Office Hours
                </h3>
                <div className="w-12 h-0.5 bg-amber-200 mb-4 transition-all duration-300 group-hover:w-16 group-hover:bg-amber-400"></div>
                <p className="text-muted-foreground">
                  Monday - Friday: 8:00 AM - 4:00 PM
                  <br />
                  Saturday - Sunday: Closed
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white md:px-[45px] relative">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
        <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-20 h-20 bg-white rounded-full shadow-lg flex items-center justify-center">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
            <Mail className="h-8 w-8 text-primary" />
          </div>
        </div>

        <div className="container px-4 md:px-6 pt-10">
          <div className="grid gap-12 md:grid-cols-2">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10"></div>
              <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10"></div>

              <h2 className="text-3xl font-bold tracking-tighter mb-6 text-gray-900">Send Us a Message</h2>
              <p className="text-muted-foreground mb-8">
                Have questions about admissions, programs, or anything else? Fill out the form below and we'll get back
                to you as soon as possible.
              </p>

              <form className="space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="first-name" className="text-sm font-medium text-gray-700">
                      First Name
                    </Label>
                    <div className="relative">
                      <Input
                        id="first-name"
                        placeholder="John"
                        required
                        className="pl-4 pr-4 py-3 border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all duration-200"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="last-name" className="text-sm font-medium text-gray-700">
                      Last Name
                    </Label>
                    <div className="relative">
                      <Input
                        id="last-name"
                        placeholder="Doe"
                        required
                        className="pl-4 pr-4 py-3 border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all duration-200"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                    Email
                  </Label>
                  <div className="relative">
                    <Input
                      id="email"
                      type="email"
                      placeholder="johndoe@example.com"
                      required
                      className="pl-4 pr-4 py-3 border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all duration-200"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-sm font-medium text-gray-700">
                    Phone
                  </Label>
                  <div className="relative">
                    <Input
                      id="phone"
                      placeholder="+234 000 0000 000"
                      className="pl-4 pr-4 py-3 border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all duration-200"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-sm font-medium text-gray-700">
                    Subject
                  </Label>
                  <div className="relative">
                    <Input
                      id="subject"
                      placeholder="How can we help you?"
                      required
                      className="pl-4 pr-4 py-3 border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all duration-200"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-sm font-medium text-gray-700">
                    Message
                  </Label>
                  <div className="relative">
                    <Textarea
                      id="message"
                      placeholder="Please provide details about your inquiry..."
                      className="min-h-[150px] pl-4 pr-4 py-3 border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all duration-200"
                      required
                    />
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-white py-6 rounded-lg text-lg font-medium transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2"
                >
                  <Send className="h-5 w-5" />
                  Send Message
                </Button>
              </form>
            </div>

            <div className="flex flex-col">
              <h2 className="text-3xl font-bold tracking-tighter mb-6 text-gray-900">Find Us</h2>
              <p className="text-muted-foreground mb-8">
                Visit our campus to experience the Greatandy International Academy difference firsthand.
              </p>

              <div className="flex-1 rounded-xl overflow-hidden shadow-lg border border-gray-200 transition-all duration-300 hover:shadow-xl">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d989.4310938094346!2d6.346114769550054!3d7.272172529863242!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1046776fa94a29a9%3A0xe8ba0fc848c19505!2sGreatandy%20International%20Academy%20(G.I.A.)%2C%20Ukhomunyio-Okpella!5e0!3m2!1sen!2sjp!4v1747203860407!5m2!1sen!2sjp"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="min-h-[450px]"
                  title="Greatandy International Academy Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50 relative">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
        <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-20 h-20 bg-white rounded-full shadow-lg flex items-center justify-center">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
            <ChevronDown className="h-8 w-8 text-primary" />
          </div>
        </div>

        <div className="container px-4 md:px-6 pt-10">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Questions?</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900">
                Frequently Asked Questions
              </h2>
              <div className="w-24 h-1 bg-primary/30 mx-auto my-6"></div>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Find answers to common questions about Greatandy International Academy.
              </p>
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-6">
              <AccordionItem
                value="item-1"
                className="border border-gray-200 rounded-xl overflow-hidden shadow-md bg-white"
              >
                <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-gray-50 group">
                  <div className="flex items-center">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-4 group-hover:bg-primary/20 transition-colors duration-200">
                      <ChevronDown className="h-5 w-5 text-primary accordion-icon" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 text-left">
                      What levels of education does Greatandy International Academy offer?
                    </h3>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 py-4 pt-0 text-muted-foreground border-t border-gray-100">
                  <div className="pl-14">
                    We offer a complete educational pathway including Nursery, Primary, Junior Secondary, and Senior
                    Secondary levels. We run Adult Education, and also skill acquisition programmes.
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-2"
                className="border border-gray-200 rounded-xl overflow-hidden shadow-md bg-white"
              >
                <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-gray-50 group">
                  <div className="flex items-center">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-4 group-hover:bg-primary/20 transition-colors duration-200">
                      <ChevronDown className="h-5 w-5 text-primary accordion-icon" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 text-left">
                      Is the school government-approved and accredited?
                    </h3>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 py-4 pt-0 text-muted-foreground border-t border-gray-100">
                  <div className="pl-14">
                    Yes, Greatandy International Academy is fully registered and accredited by the relevant educational
                    authorities in Nigeria.
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-3"
                className="border border-gray-200 rounded-xl overflow-hidden shadow-md bg-white"
              >
                <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-gray-50 group">
                  <div className="flex items-center">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-4 group-hover:bg-primary/20 transition-colors duration-200">
                      <ChevronDown className="h-5 w-5 text-primary accordion-icon" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 text-left">When was the school established?</h3>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 py-4 pt-0 text-muted-foreground border-t border-gray-100">
                  <div className="pl-14">
                    The school officially commenced operations in September 2019 after starting as a free lesson
                    initiative in August 2018.
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-4"
                className="border border-gray-200 rounded-xl overflow-hidden shadow-md bg-white"
              >
                <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-gray-50 group">
                  <div className="flex items-center">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-4 group-hover:bg-primary/20 transition-colors duration-200">
                      <ChevronDown className="h-5 w-5 text-primary accordion-icon" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 text-left">
                      What examinations do your students sit for?
                    </h3>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 py-4 pt-0 text-muted-foreground border-t border-gray-100">
                  <div className="pl-14">
                    Our students participate in WAEC, NECO, BECE, and GCE exams. We also prepare students for university
                    entrance and scholarship opportunities.
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-5"
                className="border border-gray-200 rounded-xl overflow-hidden shadow-md bg-white"
              >
                <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-gray-50 group">
                  <div className="flex items-center">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-4 group-hover:bg-primary/20 transition-colors duration-200">
                      <ChevronDown className="h-5 w-5 text-primary accordion-icon" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 text-left">Do you offer boarding facilities?</h3>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 py-4 pt-0 text-muted-foreground border-t border-gray-100">
                  <div className="pl-14">
                    Yes, we provide safe and comfortable boarding facilities for students from outside Okpella and
                    nearby areas.
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          <div className="mt-12 text-center">
            <Button
              asChild
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10 px-8 py-6 rounded-lg text-lg font-medium transition-all duration-300"
            >
              <Link href="/faq">View All FAQs</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
