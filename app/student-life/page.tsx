import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, Music, Code, FlaskRoundIcon as Flask, Coins, Shirt, ChevronRight, Expand } from "lucide-react"

export default function StudentLifePage() {
  const clubs = [
    {
      title: "Debate & Literary Club",
      description:
        "Sharpening minds through public speaking, essay writing, debates, and spelling bees. This club boosts confidence, communication skills, and critical thinking.",
      icon: BookOpen,
      color: "from-blue-500 to-indigo-600",
      lightColor: "bg-blue-50",
      borderColor: "border-blue-200",
      image: "/placeholder.svg?height=200&width=300&text=Debate+Club",
    },
    {
      title: "Music & Drama Club",
      description:
        "Students explore their creativity through singing, instrumentals, stage plays, and cultural performances, perfect for building expression, confidence, and teamwork.",
      icon: Music,
      color: "from-purple-500 to-pink-500",
      lightColor: "bg-purple-50",
      borderColor: "border-purple-200",
      image: "/placeholder.svg?height=200&width=300&text=Music+Club",
    },
    {
      title: "ICT & Innovation Club",
      description:
        "A space for young tech enthusiasts to explore coding, robotics, AI, cybersecurity, and multimedia communication, guided by skilled instructors.",
      icon: Code,
      color: "from-cyan-500 to-blue-500",
      lightColor: "bg-cyan-50",
      borderColor: "border-cyan-200",
      image: "/placeholder.svg?height=200&width=300&text=ICT+Club",
    },
    {
      title: "Science & STEM Club",
      description:
        "Designed to spark curiosity in the sciences, this club engages students in experiments, science fairs, and innovation challenges.",
      icon: Flask,
      color: "from-green-500 to-emerald-600",
      lightColor: "bg-green-50",
      borderColor: "border-green-200",
      image: "/placeholder.svg?height=200&width=300&text=Science+Club",
    },
    {
      title: "Young Entrepreneurs Club",
      description:
        "Promoting financial literacy and entrepreneurial thinking, this club empowers students to create business ideas, manage projects, and learn the value of money.",
      icon: Coins,
      color: "from-amber-500 to-orange-600",
      lightColor: "bg-amber-50",
      borderColor: "border-amber-200",
      image: "/placeholder.svg?height=200&width=300&text=Entrepreneurs+Club",
    },
    {
      title: "Home Economics & Fashion Club",
      description:
        "From sewing to baking, this hands-on club helps students learn essential life skills and express their creativity through fashion and food.",
      icon: Shirt,
      color: "from-rose-500 to-red-600",
      lightColor: "bg-rose-50",
      borderColor: "border-rose-200",
      image: "/placeholder.svg?height=200&width=300&text=Fashion+Club",
    },
  ]

  const galleryImages = [
    {
      src: "/student_doctors.jpeg",
      alt: "",
      caption: "",
    },
    {
      src: "/student_engineers.jpeg",
      alt: "",
      caption: "",
    },
    {
      src: "/sport.jpeg",
      alt: "",
      caption: "",
    },
    {
      src: "/playground.jpeg",
      alt: "",
      caption: "",
    },
    {
      src: "/student_nurse.jpeg",
      alt: "",
      caption: "",
    },
    {
      src: "/catering.jpeg",
      alt: "",
      caption: "",
    },
    {
      src: "/cultural.jpeg",
      alt: "",
      caption: "",
    },
    {
      src: "/exam.jpeg",
      alt: "",
      caption: "",
    },
  ]

  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="relative h-[300px] md:h-[400px]">
        <Image src="/student.jpg" alt="Student Life at Greatandy International Academy" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="container text-center text-white px-4 md:px-6">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Student Life</h1>
            <p className="text-xl max-w-3xl mx-auto">Where Learning Meets Purpose and Possibility</p>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 bg-white md:px-[45px]">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                Student Experience
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Life at Greatandy</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  At Greatandy International Academy, student life is vibrant, balanced, and purpose-driven. Beyond
                  academics, we nurture an environment where students grow intellectually, socially, emotionally, and
                  morally.
                </p>
                <p>
                  Our environment is more than a school, it's a community where friendships are formed, talents are
                  discovered, values are shaped, and leaders are born.
                </p>
              </div>
            </div>
            <div className="relative h-[600px] rounded-lg overflow-hidden">
              <Image src="/student_life.jpeg" alt="Students at Greatandy" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-muted/50 md:px-[45px]">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Our Approach</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                A Culture of Excellence and Discipline
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our motto, "Bringing Up Greater Academicians and Disciplined Personnel," is not just a slogan, it's a
                lifestyle.
              </p>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Academic Enrichment</h3>
                <p className="text-muted-foreground">
                  From interactive lessons to science fairs and quiz competitions, students engage in activities that
                  challenge the mind and encourage curiosity. We celebrate academic achievement while supporting every
                  learner's journey at their pace.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Spiritual & Moral Values</h3>
                <p className="text-muted-foreground">
                  Rooted in strong moral foundations, our students are nurtured to become not only educated, but also
                  upright and compassionate individuals. Morning devotions, value-based assemblies, and guidance
                  sessions form a vital part of student life.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Skill Development & Innovation</h3>
                <p className="text-muted-foreground">
                  Through our special programmes - Catering, Fashion Design, ICT, Agriculture and Financial
                  Literacy—students gain hands-on experience and career-shaping skills that prepare them for life beyond
                  the classroom.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Leadership Opportunities</h3>
                <p className="text-muted-foreground">
                  We believe in raising future leaders. Through student councils, prefect positions, public speaking,
                  and project-based learning, our learners gain confidence, vision, and a sense of purpose.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">A Safe, Supportive Environment</h3>
                <p className="text-muted-foreground">
                  We provide a secure and inclusive atmosphere where students feel valued, heard, and motivated. Our
                  boarding facility offers a home-away-from-home experience with dedicated care from trained staff.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 text-center">
            <p className="text-lg font-medium mb-4">
              At Greatandy International Academy, every child is seen, heard, and celebrated.
            </p>
            <p className="text-lg font-bold text-primary">We don't just teach students, we inspire greatness.</p>
          </div>
        </div>
      </section>

      {/* Clubs & Activities */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50 md:px-[45px] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-30"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10"></div>
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10"></div>

        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                Extracurricular
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Clubs & Activities</h2>
              <div className="w-24 h-1 bg-primary mx-auto my-6"></div>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Igniting Passion. Building Confidence. Unleashing Talent.
              </p>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {clubs.map((club, index) => (
              <div
                key={index}
                className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
              >
                {/* Image Section */}
                <div className="relative h-48 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-r ${club.color} opacity-90`}></div>
                  <Image
                    src={club.image || "/placeholder.svg"}
                    alt={club.title}
                    fill
                    className="object-cover mix-blend-overlay"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="h-20 w-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <club.icon className="h-10 w-10 text-white" />
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className={`p-6 border-t-4 ${club.borderColor}`}>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                    {club.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">{club.description}</p>
                  <div className="flex justify-between items-center">
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className="w-2 h-2 rounded-full bg-primary/30"></div>
                      ))}
                    </div>
                    {/* <Button
                      variant="ghost"
                      size="sm"
                      className="text-primary hover:text-primary/80 p-0 h-auto font-medium"
                    >
                      Learn more <ChevronRight className="ml-1 h-4 w-4" />
                    </Button> */}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* <div className="mt-16 text-center">
            <Button asChild className="bg-primary hover:bg-primary/90 text-white px-8 py-6 rounded-lg text-lg">
              <Link href="/clubs" className="flex items-center">
                Explore All Clubs
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div> */}
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 bg-gradient-to-b from-muted/50 to-muted/80 md:px-[45px] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-30"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10"></div>
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10"></div>

        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                Student Showcase
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Life at Greatandy</h2>
              <div className="w-24 h-1 bg-primary mx-auto my-6"></div>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Glimpses of our vibrant school community in action.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="group relative aspect-square overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
              >
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  fill
                  className="object-cover transition-all duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <h3 className="text-white font-bold text-lg">{image.caption}</h3>
                  <div className="mt-2 flex justify-between items-center">
                    <p className="text-white/80 text-sm">{image.alt}</p>
                    <div className="h-8 w-8 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
                      <Expand className="h-4 w-4 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* <div className="mt-16 text-center">
            <Button
              asChild
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10 px-8 py-6 rounded-lg text-lg"
            >
              <Link href="/gallery" className="flex items-center">
                View Full Gallery
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div> */}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-white">
        <div className="container px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
            Join Our Vibrant Community
          </h2>
          <p className="max-w-[700px] mx-auto md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mb-8">
            Experience the Greatandy difference firsthand. Schedule a visit or apply for admission today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
              <Link href="/admissions">Apply Now</Link>
            </Button>
            <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
              <Link href="/contact">Schedule a Visit</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
