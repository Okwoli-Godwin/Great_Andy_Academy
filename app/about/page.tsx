import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Award, BookOpen, GraduationCap, Users, Shield, Heart, Lightbulb, Target, Eye } from "lucide-react"

export default function AboutPage() {
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
      icon: Shield,
    },
    {
      title: "Responsibility",
      description:
        "Our students are taught to take ownership of their actions, learning, and personal growth, preparing them to become dependable and proactive members of society.",
      icon: Award,
    },
    {
      title: "Innovation",
      description:
        "We embrace creativity and encourage students to think critically, solve problems, and adapt to the changing world especially through our ICT and skill-based programs.",
      icon: Lightbulb,
    },
    {
      title: "Respect and Diversity",
      description:
        "We foster a respectful environment where every student, regardless of background, is valued. Our community thrives on kindness, empathy, and inclusivity.",
      icon: Heart,
    },
    {
      title: "Leadership and Service",
      description:
        "We develop young leaders who serve with humility, lead by example, and make a positive impact on their communities and beyond.",
      icon: Users,
    },
  ]

  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="relative h-[300px] md:h-[400px]">
        <Image src="/playground.jpg" alt="About Greatandy International Academy" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="container text-center text-white px-4 md:px-6">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Learn about our mission, vision, values, and the history of Greatandy International Academy.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gradient-to-b from-white md:px-[45px] to-blue-50 relative overflow-hidden" id="mission-vision">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-30"></div>
        <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl -z-10"></div>
        <div className="absolute top-1/4 left-0 w-1/4 h-1/4 bg-primary/5 rounded-full blur-3xl -z-10"></div>

        <div className="container px-4 md:px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-blue mb-4">Our Guiding Principles</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              The foundation of our educational philosophy and commitment to excellence
            </p>
          </div>

          <div className="grid gap-12 lg:grid-cols-2 items-stretch">
            {/* Mission Card */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-primary/10">
              <div className="h-2 bg-primary w-full"></div>
              <div className="p-8 md:p-10 flex flex-col h-full">
                <div className="flex items-center mb-6">
                  <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center mr-5 border-2 border-primary/20">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary mb-2">
                      Our Mission
                    </div>
                    <h2 className="text-2xl font-bold tracking-tighter text-navy-blue">Mission Statement</h2>
                  </div>
                </div>

                <div className="bg-blue-50/50 rounded-xl p-6 mb-6 border-l-4 border-primary relative">
                  <div className="absolute -top-2 -left-2 text-primary/20 text-6xl font-serif">"</div>
                  <p className="text-muted-foreground text-lg relative z-10">
                    At Greatandy International Academy, we are dedicated to providing a holistic education that fosters
                    academic excellence, strong moral values, and lifelong discipline. We strive to empower students
                    with knowledge, character, and leadership skills essential for global relevance and impactful
                    living.
                  </p>
                  <div className="absolute -bottom-2 -right-2 text-primary/20 text-6xl font-serif">"</div>
                </div>

                <div className="mt-auto">
                  <h3 className="font-bold text-navy-blue mb-2">Our Commitment</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <div className="h-2 w-2 rounded-full bg-primary mr-2"></div>
                      <span className="text-sm text-muted-foreground">Holistic Education</span>
                    </li>
                    <li className="flex items-center">
                      <div className="h-2 w-2 rounded-full bg-primary mr-2"></div>
                      <span className="text-sm text-muted-foreground">Character Development</span>
                    </li>
                    <li className="flex items-center">
                      <div className="h-2 w-2 rounded-full bg-primary mr-2"></div>
                      <span className="text-sm text-muted-foreground">Global Relevance</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Vision Card */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-primary/10">
              <div className="h-2 bg-primary w-full"></div>
              <div className="p-8 md:p-10 flex flex-col h-full">
                <div className="flex items-center mb-6">
                  <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center mr-5 border-2 border-primary/20">
                    <Eye className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary mb-2">
                      Our Vision
                    </div>
                    <h2 className="text-2xl font-bold tracking-tighter text-navy-blue">Vision Statement</h2>
                  </div>
                </div>

                <div className="bg-blue-50/50 rounded-xl p-6 mb-6 border-l-4 border-primary relative">
                  <div className="absolute -top-2 -left-2 text-primary/20 text-6xl font-serif">"</div>
                  <p className="text-muted-foreground text-lg relative z-10">
                    To be a leading citadel of learning committed to nurturing outstanding, illuminated personalities
                    who inspire excellence, integrity, and innovation in every sphere of life.
                  </p>
                  <div className="absolute -bottom-2 -right-2 text-primary/20 text-6xl font-serif">"</div>
                </div>

                <div className="bg-primary/5 rounded-xl p-6 border border-primary/10">
                  <h3 className="font-bold text-navy-blue mb-3 text-center">Our Motto</h3>
                  <p className="text-center text-lg font-medium text-primary">
                    "Bringing Up Greater Academicians and Disciplined Personnel"
                  </p>
                </div>

                <div className="mt-6">
                  <h3 className="font-bold text-navy-blue mb-2">Our Aspiration</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <div className="h-2 w-2 rounded-full bg-primary mr-2"></div>
                      <span className="text-sm text-muted-foreground">Academic Excellence</span>
                    </li>
                    <li className="flex items-center">
                      <div className="h-2 w-2 rounded-full bg-primary mr-2"></div>
                      <span className="text-sm text-muted-foreground">Moral Leadership</span>
                    </li>
                    <li className="flex items-center">
                      <div className="h-2 w-2 rounded-full bg-primary mr-2"></div>
                      <span className="text-sm text-muted-foreground">Global Impact</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Welcome Message */}
      <section className="py-16 bg-muted/50" id="welcome-message">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                Welcome Message
              </div>
              <h2 className="text-3xl font-bold tracking-tighter">From the Director</h2>
              <div className="prose max-w-none text-muted-foreground">
                <p>
                  It is with great pleasure that I welcome you to the official website of Greatandy International
                  Academy, a place where excellence, discipline, and purpose converge to shape the future.
                </p>
                <p>
                  At Greatandy, we are passionately committed to "Bringing Up Greater Academicians and Disciplined
                  Personnel." Our vision is to develop outstanding, illuminated personalities—young individuals who are
                  not only academically exceptional but also morally upright and socially responsible.
                </p>
                <p>
                  We believe that every child carries the seed of greatness. Through our well-rounded curriculum,
                  dedicated staff, and value-driven approach to learning, we strive to nurture that greatness into full
                  bloom. Our environment is one that inspires curiosity, builds confidence, and fosters a culture of
                  discipline and lifelong learning.
                </p>
                <p>
                  This website offers you a window into our vibrant academic community. Whether you are a prospective
                  parent, student, staff member, or simply a well-wisher, we invite you to explore our programs,
                  discover our core values, and witness the spirit that makes Greatandy International Academy unique.
                </p>
                <p>
                  Thank you for visiting, and welcome to a community where excellence is our tradition and character is
                  our foundation.
                </p>
                <p>Warm regards,</p>
                <p>
                  <strong>Chap. Dr. Greatandy Omokhogie Iguoba</strong>
                  <br />
                  Director, Greatandy International Academy
                </p>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="relative h-[400px] w-full max-w-[400px] overflow-hidden rounded-lg">
                <Image src="/placeholder.svg?height=400&width=400" alt="Director" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* History */}
      <section className="py-16 bg-white" id="history">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Our Journey</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">History of the School</h2>
            </div>
          </div>
          <div className="prose max-w-4xl mx-auto text-muted-foreground">
            <p>
              Greatandy International Academy was born from a deep passion and unwavering vision to transform the
              narrative of education in Nigeria. At a time when the state of education seemed hopeless to many, our
              founder dared to believe in a brighter, better future—where no child would be left behind, and every
              learner would be empowered to succeed.
            </p>
            <p>
              Motivated by a love for learning and a heart for change, the Director began by encouraging those around
              him, including his own children, to pursue education against all odds. This vision took its first tangible
              form on August 25, 2018, with the launch of a free lesson scheme designed to provide access to quality
              learning for all, regardless of background.
            </p>
            <p>
              By September 2019, Greatandy International Academy officially opened its doors as a registered school,
              driven by the mission to raise a generation of exceptional academicians and disciplined leaders. Within
              just a year, by 2020, the school had begun presenting candidates for major national examinations including
              WAEC, NECO, BECE, and GCE, proving our readiness to compete and excel on a national scale.
            </p>
            <p>
              In 2021, we expanded our reach by introducing Adult Education, providing opportunities for
              time-constrained individuals to reclaim their academic dreams and better their lives. Then in 2022, we
              launched the revolutionary "A Student to a Thousand Acts" initiative, our commitment to nurturing every
              student equally, while embedding values of financial literacy, leadership, and moral uprightness into
              their educational journey.
            </p>
            <p>
              In 2021, Greatandy International Academy expanded its services by launching a boarding school, providing a
              structured and nurturing environment for students from distant locations. By 2022, the school proudly
              welcomed its first set of boarders, marking a new chapter of growth and inclusivity in our journey.
            </p>
            <p>
              Recognizing the growing need for practical skills in today's world, we introduced a Skill Acquisition
              Scheme in 2024, aimed at combating youth unemployment and equipping our students with tools to thrive in
              any economic landscape. That same year, we hosted our first ICT Summit, exposing students and staff to the
              vast potential of Artificial Intelligence, Cybersecurity, and Multimedia Communication—keeping our
              community future-ready in a rapidly changing world.
            </p>
            <p>
              By the grace of God and through relentless dedication, Greatandy International Academy has grown into a
              beacon of excellence. We are proud recipients of several awards and accolades, including: Okukpellagbe
              Competition Winner – 2021; NAOS Academic Excellence Award – 2022; Fastest Growing School Award – 2023;
              Best Secondary School Award – 2024.
            </p>
            <p>
              Our journey is far from over. Every day at Greatandy, we continue to inspire, innovate, and illuminate
              raising generations of scholars and changemakers who will leave a lasting legacy in Nigeria, Africa, and
              the world.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-muted/50" id="values">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Our Values</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">School Values & Culture</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Rooted in Integrity. Driven by Excellence. Inspired for Impact.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-3">
            {values.map((value, index) => (
              <Card key={index} className="bg-white">
                <CardContent className="p-6">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <value.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-12 text-center">
            <h3 className="text-2xl font-bold mb-4">Our School Culture</h3>
            <div className="prose max-w-3xl mx-auto text-muted-foreground">
              <p>
                Our school environment is built on mutual respect, collaboration, and the celebration of individual
                strengths. Students are encouraged to explore their potential, take initiative, and support one another.
              </p>
              <p>
                From our structured morning devotions to our vibrant extracurriculars, our culture blends academic focus
                with personal growth, spiritual depth, and community spirit.
              </p>
              <p>
                We are proud to raise academicians with character. Students who are intellectually sound, morally
                upright, socially responsible, and globally prepared.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Accreditations */}
      <section className="py-16 bg-white" id="accreditations">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Credentials</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Accreditation and Affiliations
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Trusted. Recognized. Connected.
              </p>
            </div>
          </div>
          <div className="mx-auto max-w-4xl">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">Legal Registration & Compliance</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <Award className="h-6 w-6 text-primary mr-3 mt-1" />
                    <div>
                      <h4 className="font-bold">Registered with the Corporate Affairs Commission (CAC)</h4>
                      <p className="text-muted-foreground">
                        Greatandy International Academy is a legally recognized educational institution, registered
                        under the Corporate Affairs Commission of Nigeria, in line with national business and
                        organizational laws.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Award className="h-6 w-6 text-primary mr-3 mt-1" />
                    <div>
                      <h4 className="font-bold">Compliant with the Federal Inland Revenue Service (FIRS)</h4>
                      <p className="text-muted-foreground">
                        As a responsible institution, we are fully registered with the Internal Revenue Service,
                        ensuring that we fulfill our tax obligations and contribute to national development.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Award className="h-6 w-6 text-primary mr-3 mt-1" />
                    <div>
                      <h4 className="font-bold">Licensed by the Ministry of Education, Edo State</h4>
                      <p className="text-muted-foreground">
                        We operate with full approval from the state's educational authorities and adhere strictly to
                        all academic and administrative regulations.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Accredited Examination Centre</h3>
                <p className="text-muted-foreground mb-4">
                  We are certified to present students for major national and external examinations, including:
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <Card className="bg-primary/5">
                    <CardContent className="p-4 text-center">
                      <h4 className="font-bold">WAEC</h4>
                      <p className="text-xs text-muted-foreground">West African Examinations Council</p>
                    </CardContent>
                  </Card>
                  <Card className="bg-primary/5">
                    <CardContent className="p-4 text-center">
                      <h4 className="font-bold">NECO</h4>
                      <p className="text-xs text-muted-foreground">National Examinations Council</p>
                    </CardContent>
                  </Card>
                  <Card className="bg-primary/5">
                    <CardContent className="p-4 text-center">
                      <h4 className="font-bold">BECE</h4>
                      <p className="text-xs text-muted-foreground">Basic Education Certificate Examination</p>
                    </CardContent>
                  </Card>
                  <Card className="bg-primary/5">
                    <CardContent className="p-4 text-center">
                      <h4 className="font-bold">GCE</h4>
                      <p className="text-xs text-muted-foreground">General Certificate Examination</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Affiliations & Partnerships</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <Users className="h-6 w-6 text-primary mr-3 mt-1" />
                    <div>
                      <h4 className="font-bold">National Association of Proprietors of Private Schools (NAPPS)</h4>
                      <p className="text-muted-foreground">
                        We maintain active membership with NAPPS, gaining access to training, educational reforms, and
                        collaborative growth within Nigeria's private education sector.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Lightbulb className="h-6 w-6 text-primary mr-3 mt-1" />
                    <div>
                      <h4 className="font-bold">ICT & AI Training Partners</h4>
                      <p className="text-muted-foreground">
                        In collaboration with certified tech experts, we offer regular ICT Summits and workshops in
                        Artificial Intelligence, Cybersecurity, and Multimedia Communication, ensuring our students and
                        staff remain globally competitive.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Local & Regional Competitions</h3>
                <p className="text-muted-foreground mb-4">
                  We are active participants in regional academic and cultural competitions, such as:
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <li className="bg-primary/5 p-3 rounded-md">Okukpellagbe Quiz & Debate Challenge</li>
                  <li className="bg-primary/5 p-3 rounded-md">
                    National Association of Okpella Student (NAOS) Academic Excellence Contests
                  </li>
                  <li className="bg-primary/5 p-3 rounded-md">STEM Innovation Programs</li>
                  <li className="bg-primary/5 p-3 rounded-md">Dangote Okpella Cement Factory Competition</li>
                  <li className="bg-primary/5 p-3 rounded-md">Ukhomunyio Student Association</li>
                  <li className="bg-primary/5 p-3 rounded-md">Seplat NNPC</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-white">
        <div className="container px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
            Join Our Academic Community
          </h2>
          <p className="max-w-[700px] mx-auto md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mb-8">
            Take the first step towards a bright future for your child. Apply now for admission to Greatandy
            International Academy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
              <Link href="/admissions">Apply Now</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white hover:bg-white/10">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
