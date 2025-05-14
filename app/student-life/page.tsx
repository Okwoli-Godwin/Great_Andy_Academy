import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, Music, Code, FlaskRoundIcon as Flask, Coins, Shirt } from "lucide-react"

export default function StudentLifePage() {
  const clubs = [
    {
      title: "Debate & Literary Club",
      description:
        "Sharpening minds through public speaking, essay writing, debates, and spelling bees. This club boosts confidence, communication skills, and critical thinking.",
      icon: BookOpen,
    },
    {
      title: "Music & Drama Club",
      description:
        "Students explore their creativity through singing, instrumentals, stage plays, and cultural performances, perfect for building expression, confidence, and teamwork.",
      icon: Music,
    },
    {
      title: "ICT & Innovation Club",
      description:
        "A space for young tech enthusiasts to explore coding, robotics, AI, cybersecurity, and multimedia communication, guided by skilled instructors.",
      icon: Code,
    },
    {
      title: "Science & STEM Club",
      description:
        "Designed to spark curiosity in the sciences, this club engages students in experiments, science fairs, and innovation challenges.",
      icon: Flask,
    },
    {
      title: "Young Entrepreneurs Club",
      description:
        "Promoting financial literacy and entrepreneurial thinking, this club empowers students to create business ideas, manage projects, and learn the value of money.",
      icon: Coins,
    },
    {
      title: "Home Economics & Fashion Club",
      description:
        "From sewing to baking, this hands-on club helps students learn essential life skills and express their creativity through fashion and food.",
      icon: Shirt,
    },
  ]

  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="relative h-[300px] md:h-[400px]">
        <Image
          src="/student.jpg"
          alt="Student Life at Greatandy International Academy"
          fill
          className="object-cover"
        />
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
            <div className="relative h-[300px] rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=300&width=500"
                alt="Students at Greatandy"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-muted/50">
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
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                Extracurricular
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Clubs & Activities</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Igniting Passion. Building Confidence. Unleashing Talent.
              </p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {clubs.map((club, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <club.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{club.title}</h3>
                  <p className="text-sm text-muted-foreground">{club.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button asChild>
              <Link href="/clubs">Explore All Clubs</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                Student Showcase
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Life at Greatandy</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Glimpses of our vibrant school community in action.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[...Array(8)].map((_, index) => (
              <div key={index} className="relative aspect-square overflow-hidden rounded-lg">
                <Image
                  src={`/placeholder.svg?height=300&width=300&text=Gallery+${index + 1}`}
                  alt={`Gallery image ${index + 1}`}
                  fill
                  className="object-cover transition-transform hover:scale-105"
                />
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button asChild variant="outline">
              <Link href="/gallery">View Full Gallery</Link>
            </Button>
          </div>
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
            <Button asChild size="lg" variant="outline" className="border-white hover:bg-white/10">
              <Link href="/contact">Schedule a Visit</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
