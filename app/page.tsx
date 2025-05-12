import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronRight, GraduationCap, BookOpen, Users, Award, School } from "lucide-react"
import { HeroSlider } from "@/components/hero-slider"
import { ValueCard } from "@/components/value-card"
import { ProgramCard } from "@/components/program-card"

export default function Home() {
  const values = [
    {
      title: "Academic Excellence",
      description:
        "We pursue and promote a culture of high academic standards, encouraging students to strive for their best while developing a lifelong love for learning.",
      icon: BookOpen,
    },
    {
      title: "Discipline",
      description:
        "We instill self-control, orderliness, and respect for rules believing that disciplined individuals become dependable citizens and ethical leaders.",
      icon: GraduationCap,
    },
    {
      title: "Integrity",
      description:
        "Truthfulness, accountability, and fairness are the pillars of our daily interactions. We teach our students to be honest and trustworthy in all areas of life.",
      icon: Award,
    },
    {
      title: "Leadership",
      description:
        "We develop young leaders who serve with humility, lead by example, and make a positive impact on their communities and beyond.",
      icon: Users,
    },
  ]

  const programs = [
    {
      title: "Music Program",
      description: "Discover. Create. Perform.",
      details:
        "Our music program fosters artistic expression through vocal training, musical instruments, and theory. Students gain confidence, discipline, and stage experience through performances, school events, and competitions.",
    },
    {
      title: "Catering & Culinary Arts",
      description: "From Kitchen to Career.",
      details:
        "Students learn the essentials of cooking, food presentation, nutrition, and hospitality. This program opens doors to careers in catering and equips students with valuable life skills in food preparation and hygiene.",
    },
    {
      title: "Fashion Design",
      description: "Design Your Future.",
      details:
        "Our fashion program trains students in sewing, sketching, fabric selection, and modern trends. It encourages entrepreneurship and innovation while developing practical skills in clothing design and personal style.",
    },
    {
      title: "Financial Literacy & Entrepreneurship",
      description: "Think Smart. Build Wealth.",
      details:
        "This program introduces students to saving, budgeting, investing, and business planning. It instills financial responsibility and inspires young entrepreneurs to create, lead, and thrive in today's economy.",
    },
  ]

  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="relative">
        <HeroSlider />

        {/* Large Logo at Bottom */}
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 ">
          <div className=" w-[1300px] mb-[-60px] relative h-[1300px]  flex items-center justify-center ">
            <Image
              src="/whiteblur.png"
              width={1200}
              height={1200}
              alt="Greatandy International Academy Logo"
              className="rounded-full absolute bottom-0"
            />
          </div>
        </div>
      </section>

      {/* Welcome Message */}
      <section className="py-16 bg-white px-[45px] ">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-school-blue/10 px-3 py-1 text-sm text-school-blue">
                Welcome Message
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-navy-blue">
                From the Director
              </h2>
              <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                It is with great pleasure that I welcome you to the official website of Greatandy International Academy,
                a place where excellence, discipline, and purpose converge to shape the future.
              </p>
              <p className="text-muted-foreground">
                At Greatandy, we are passionately committed to "Bringing Up Greater Academicians and Disciplined
                Personnel." Our vision is to develop outstanding, illuminated personalities—young individuals who are
                not only academically exceptional but also morally upright and socially responsible.
              </p>
              <div className="flex items-center pt-4">
                <p className="font-medium text-navy-blue">Chap. Dr. Greatandy Omokhogie Iguoba</p>
                <span className="mx-2 text-maroon-red">•</span>
                <p className="text-muted-foreground">Director</p>
              </div>
              <div className="pt-4">
                <Button
                  asChild
                  variant="outline"
                  className="border-school-blue text-school-blue hover:bg-school-blue/10"
                >
                  <Link href="/about#welcome-message" className="inline-flex items-center">
                    Read Full Message <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="relative h-[400px] w-full max-w-[400px] overflow-hidden rounded-lg shadow-xl">
                <Image src="/placeholder.svg?height=400&width=400" alt="Director" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider"></div>

      {/* Why Choose Us */}
      <section className="py-16 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-school-blue/10 px-3 py-1 text-sm text-school-blue">
                Our Values
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-navy-blue">
                Why Choose Greatandy?
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Rooted in Integrity. Driven by Excellence. Inspired for Impact.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <ValueCard key={index} title={value.title} description={value.description} icon={value.icon} />
            ))}
          </div>
          <div className="text-center">
            <Button asChild variant="outline" className="border-school-blue text-school-blue hover:bg-school-blue/10">
              <Link href="/about#values" className="inline-flex items-center">
                Learn More About Our Values <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <div className="section-divider"></div>

      {/* Programs */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-school-blue/10 px-3 py-1 text-sm text-school-blue">
                Special Programs
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-navy-blue">
                Empowering Students with Skills for Life
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our special programs are crafted to unlock students' creativity, build practical skills, and prepare
                them for real-world success.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2">
            {programs.map((program, index) => (
              <ProgramCard
                key={index}
                title={program.title}
                description={program.description}
                details={program.details}
              />
            ))}
          </div>
          <div className="text-center">
            <Button asChild className="bg-school-blue hover:bg-school-blue/90 text-white">
              <Link href="/programs" className="inline-flex items-center">
                Explore All Programs <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <div className="section-divider"></div>

      {/* Accreditations */}
      <section className="py-16 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-school-blue/10 px-3 py-1 text-sm text-school-blue">
                Accreditations
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-navy-blue">
                Trusted. Recognized. Connected.
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We are proud to be fully recognized and accredited by educational authorities and aligned with reputable
                institutions.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-4">
            <Card className="bg-white animated-card">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="h-12 w-12 rounded-full bg-navy-blue/10 flex items-center justify-center mb-4">
                  <School className="h-6 w-6 text-school-blue" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-navy-blue">Ministry of Education</h3>
                <p className="text-sm text-muted-foreground">Licensed by the Ministry of Education, Edo State</p>
              </CardContent>
            </Card>
            <Card className="bg-white animated-card">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="h-12 w-12 rounded-full bg-navy-blue/10 flex items-center justify-center mb-4">
                  <Award className="h-6 w-6 text-school-blue" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-navy-blue">WAEC</h3>
                <p className="text-sm text-muted-foreground">Certified examination center for WAEC</p>
              </CardContent>
            </Card>
            <Card className="bg-white animated-card">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="h-12 w-12 rounded-full bg-navy-blue/10 flex items-center justify-center mb-4">
                  <Award className="h-6 w-6 text-school-blue" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-navy-blue">NECO</h3>
                <p className="text-sm text-muted-foreground">Certified examination center for NECO</p>
              </CardContent>
            </Card>
            <Card className="bg-white animated-card">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="h-12 w-12 rounded-full bg-navy-blue/10 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-school-blue" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-navy-blue">NAPPS</h3>
                <p className="text-sm text-muted-foreground">
                  Member of National Association of Proprietors of Private Schools
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="text-center">
            <Button asChild variant="outline" className="border-school-blue text-school-blue hover:bg-school-blue/10">
              <Link href="/about#accreditations" className="inline-flex items-center">
                View All Accreditations <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-navy-blue text-white">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-gold-yellow">2018</div>
              <p className="text-sm">Year Founded</p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-gold-yellow">500+</div>
              <p className="text-sm">Students</p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-gold-yellow">50+</div>
              <p className="text-sm">Qualified Teachers</p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-gold-yellow">4</div>
              <p className="text-sm">Major Awards</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-school-blue text-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Join Our Academic Community
              </h2>
              <p className="md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Take the first step towards a bright future for your child. Apply now for admission to Greatandy
                International Academy.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-white text-school-blue hover:bg-white/90">
                  <Link href="/admissions">Apply Now</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white hover:bg-white/10">
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="relative h-[300px] w-full max-w-[500px] overflow-hidden rounded-lg shadow-xl">
                <Image src="/placeholder.svg?height=300&width=500" alt="Students" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-school-blue/10 px-3 py-1 text-sm text-school-blue">
                Testimonials
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-navy-blue">
                What Parents Say
              </h2>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="bg-white animated-card">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="mr-4">
                    <div className="h-12 w-12 rounded-full bg-navy-blue/10 overflow-hidden">
                      <Image
                        src="/placeholder.svg?height=48&width=48"
                        width={48}
                        height={48}
                        alt="Parent"
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-navy-blue">Mrs. Johnson</h4>
                    <p className="text-xs text-muted-foreground">Parent of JSS2 Student</p>
                  </div>
                </div>
                <p className="text-muted-foreground italic">
                  "The transformation in my child since joining Greatandy has been remarkable. The teachers are
                  dedicated and the values instilled are evident in my child's behavior and academic performance."
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white animated-card">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="mr-4">
                    <div className="h-12 w-12 rounded-full bg-navy-blue/10 overflow-hidden">
                      <Image
                        src="/placeholder.svg?height=48&width=48"
                        width={48}
                        height={48}
                        alt="Parent"
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-navy-blue">Mr. Okonkwo</h4>
                    <p className="text-xs text-muted-foreground">Parent of Primary 5 Student</p>
                  </div>
                </div>
                <p className="text-muted-foreground italic">
                  "The holistic approach to education at Greatandy is impressive. My child is not only excelling
                  academically but also developing practical skills and strong moral values."
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white animated-card">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="mr-4">
                    <div className="h-12 w-12 rounded-full bg-navy-blue/10 overflow-hidden">
                      <Image
                        src="/placeholder.svg?height=48&width=48"
                        width={48}
                        height={48}
                        alt="Parent"
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-navy-blue">Dr. Adeyemi</h4>
                    <p className="text-xs text-muted-foreground">Parent of SSS3 Student</p>
                  </div>
                </div>
                <p className="text-muted-foreground italic">
                  "The quality of education and personal attention given to students at Greatandy is exceptional. The
                  school has prepared my child well for university and beyond."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  )
}
