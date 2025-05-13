import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function AcademicsPage() {
  const specialPrograms = [
    {
      title: "Music Program",
      tagline: "Discover. Create. Perform.",
      description:
        "Our music program fosters artistic expression through vocal training, musical instruments, and theory. Students gain confidence, discipline, and stage experience through performances, school events, and competitions.",
      backgroundImage: "/music.webp",
    },
    {
      title: "Catering & Culinary Arts",
      tagline: "From Kitchen to Career.",
      description:
        "Students learn the essentials of cooking, food presentation, nutrition, and hospitality. This program opens doors to careers in catering and equips students with valuable life skills in food preparation and hygiene.",
      backgroundImage: "/meat.jpg",
    },
    {
      title: "Fashion Design",
      tagline: "Design Your Future.",
      description:
        "Our fashion program trains students in sewing, sketching, fabric selection, and modern trends. It encourages entrepreneurship and innovation while developing practical skills in clothing design and personal style.",
      backgroundImage: "/fashion.jpg",
    },
    {
      title: "Financial Literacy & Entrepreneurship",
      tagline: "Think Smart. Build Wealth.",
      description:
        "This program introduces students to saving, budgeting, investing, and business planning. It instills financial responsibility and inspires young entrepreneurs to create, lead, and thrive in today's economy.",
      backgroundImage: "/finance.jpg",
    },
    {
      title: "Shoe Making",
      tagline: "Step Into Craftsmanship.",
      description:
        "Our shoe making program teaches students the art of footwear design and production. Students learn material selection, pattern cutting, stitching, and finishing techniques to create quality, handcrafted shoes.",
      backgroundImage: "/shoe.jpg",
    },
    {
      title: "Phone Repair & Technology",
      tagline: "Fix. Innovate. Connect.",
      description:
        "Students learn to diagnose and repair smartphones, tablets, and other electronic devices. This program provides practical skills in troubleshooting, component replacement, and customer service for the growing tech repair industry.",
      backgroundImage: "/phone.jpg",
    },
    {
      title: "Mechanical Engineering",
      tagline: "Design. Build. Improve.",
      description:
        "Our mechanical engineering program introduces students to the principles of mechanics, thermodynamics, and material science. Students engage in hands-on projects designing and building mechanical systems and devices.",
      backgroundImage: "/mechanical.jpg",
    },
    {
      title: "Electrical Engineering",
      tagline: "Power the Future.",
      description:
        "Students learn the fundamentals of electrical circuits, power systems, and electronics. This program combines theory with practical applications, preparing students for careers in electrical installation, maintenance, and design.",
      backgroundImage: "/electrical.jpg",
    },
    {
      title: "Media Arts",
      tagline: "Create. Share. Influence.",
      description:
        "Our media arts program covers content creation, digital design, and social media management. Students develop skills in photography, video production, graphic design, and online content strategy for the digital age.",
      backgroundImage: "/media.jpg",
    },
    {
      title: "Carpentry",
      tagline: "Craft with Precision.",
      description:
        "Students learn woodworking techniques, furniture design, and construction principles. This program develops skills in measurement, cutting, joining, and finishing to create functional and beautiful wooden structures and items.",
      backgroundImage: "/carpentry.jpg",
    },
    {
      title: "Hair Styling & Barbing",
      tagline: "Style with Confidence.",
      description:
        "Our hair program teaches cutting, styling, coloring, and treatment techniques for all hair types. Students learn salon operations, customer service, and the latest trends in hair fashion and care.",
      backgroundImage: "/styling.jpg",
    },
    {
      title: "Animal Husbandry",
      tagline: "Nurture. Grow. Sustain.",
      description:
        "Students learn livestock management, breeding, nutrition, and health care. This program provides practical experience in raising animals sustainably while developing business skills for agricultural entrepreneurship.",
      backgroundImage: "/animal.jpg",
    },
  ]

  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="relative h-[300px] md:h-[400px]">
        <Image src="/acad.jpg" alt="Academics at Greatandy International Academy" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="container text-center text-white px-4 md:px-6">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Academics</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Discover our comprehensive curriculum and subject offerings designed to nurture excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Curriculum Overview */}
      <section className="py-16 bg-white md:px-[45px]">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Our Curriculum</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Comprehensive Education</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our curriculum is designed to challenge students academically while fostering character development,
                confidence, and a love of learning.
              </p>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <span className="text-xl font-bold text-primary">P</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Primary School</h3>
                <p className="text-muted-foreground mb-4">
                  Our primary school curriculum focuses on building strong foundations in literacy, numeracy, and
                  essential life skills. We emphasize hands-on learning and critical thinking.
                </p>
                <p className="text-sm text-muted-foreground">
                  <strong>Grades:</strong> Basic 1-6
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <span className="text-xl font-bold text-primary">J</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Junior Secondary School</h3>
                <p className="text-muted-foreground mb-4">
                  Our junior secondary curriculum builds on primary foundations while introducing more specialized
                  subjects. Students develop research skills and deeper subject knowledge.
                </p>
                <p className="text-sm text-muted-foreground">
                  <strong>Grades:</strong> JSS 1-3
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <span className="text-xl font-bold text-primary">S</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Senior Secondary School</h3>
                <p className="text-muted-foreground mb-4">
                  Our senior secondary curriculum prepares students for higher education and career success. Students
                  choose specialized tracks while maintaining core subject proficiency.
                </p>
                <p className="text-sm text-muted-foreground">
                  <strong>Grades:</strong> SSS 1-3
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Subjects Offered */}
      <section className="py-16 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                Academic Programs
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Subjects Offered</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our comprehensive curriculum provides students with a well-rounded education across various disciplines.
              </p>
            </div>
          </div>

          <Tabs defaultValue="primary" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="primary">Primary School</TabsTrigger>
              <TabsTrigger value="junior">Junior Secondary</TabsTrigger>
              <TabsTrigger value="senior">Senior Secondary</TabsTrigger>
            </TabsList>
            <TabsContent value="primary" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">PRIMARY SCHOOL SUBJECTS (Basic 1–6)</h3>

                  <div className="grid gap-8 md:grid-cols-2">
                    <div>
                      <h4 className="font-bold mb-2">Core Subjects:</h4>
                      <ul className="space-y-1 text-muted-foreground">
                        <li>English Language</li>
                        <li>Mathematics</li>
                        <li>Basic Science and Technology</li>
                        <li>Civic Education</li>
                        <li>Cultural and Creative Arts</li>
                        <li>Christian Religious Studies / Islamic Religious Studies</li>
                        <li>Physical and Health Education</li>
                        <li>Nigerian Languages (Edo, Yoruba, Igbo, Hausa)</li>
                        <li>Social Studies</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-bold mb-2">Pre-Vocational and Enrichment Subjects:</h4>
                      <ul className="space-y-1 text-muted-foreground">
                        <li>Agricultural Science</li>
                        <li>Home Economics</li>
                        <li>Computer Studies / ICT</li>
                        <li>Moral Instruction</li>
                        <li>French</li>
                        <li>Music</li>
                        <li>Verbal and Quantitative Reasoning</li>
                        <li>Handwriting</li>
                        <li>Phonics and Spelling</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="junior" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">JUNIOR SECONDARY SCHOOL SUBJECTS (JSS 1–3)</h3>

                  <div className="grid gap-8 md:grid-cols-2">
                    <div>
                      <h4 className="font-bold mb-2">Core Subjects:</h4>
                      <ul className="space-y-1 text-muted-foreground">
                        <li>English Language</li>
                        <li>Mathematics</li>
                        <li>Basic Science</li>
                        <li>Social Studies</li>
                        <li>Civic Education</li>
                        <li>Christian Religious Studies / Islamic Religious Studies</li>
                        <li>Cultural and Creative Arts</li>
                        <li>Basic Technology</li>
                        <li>Physical and Health Education</li>
                        <li>Agricultural Science</li>
                        <li>Business Studies</li>
                        <li>Computer Studies / ICT</li>
                        <li>Nigerian Languages</li>
                        <li>French</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-bold mb-2">Electives (Optional):</h4>
                      <ul className="space-y-1 text-muted-foreground">
                        <li>Home Economics</li>
                        <li>Music</li>
                        <li>Arabic</li>
                        <li>Entrepreneurship Education</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="senior" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">SENIOR SECONDARY SCHOOL SUBJECTS (SSS 1–3)</h3>

                  <div className="grid gap-8 md:grid-cols-2">
                    <div>
                      <h4 className="font-bold mb-2">Science Subjects:</h4>
                      <ul className="space-y-1 text-muted-foreground">
                        <li>Mathematics</li>
                        <li>English Language</li>
                        <li>Physics</li>
                        <li>Chemistry</li>
                        <li>Biology</li>
                        <li>Agricultural Science</li>
                        <li>Further Mathematics</li>
                        <li>Computer Studies / ICT</li>
                        <li>Technical Drawing</li>
                        <li>Geography</li>
                        <li>Health Science</li>
                        <li>Physical Education</li>
                      </ul>

                      <h4 className="font-bold mt-6 mb-2">Commercial Subjects:</h4>
                      <ul className="space-y-1 text-muted-foreground">
                        <li>Mathematics</li>
                        <li>English Language</li>
                        <li>Economics</li>
                        <li>Accounting</li>
                        <li>Commerce</li>
                        <li>Marketing</li>
                        <li>Office Practice</li>
                        <li>Insurance</li>
                        <li>Business Studies</li>
                        <li>Financial Accounting</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-bold mb-2">Arts and Humanities Subjects:</h4>
                      <ul className="space-y-1 text-muted-foreground">
                        <li>Government</li>
                        <li>Literature in English</li>
                        <li>Christian Religious Studies / Islamic Religious Studies</li>
                        <li>History</li>
                        <li>Civic Education</li>
                        <li>Visual Arts</li>
                        <li>Music</li>
                        <li>French</li>
                        <li>Nigerian Languages</li>
                        <li>Arabic</li>
                        <li>Social Studies</li>
                      </ul>

                      <h4 className="font-bold mt-6 mb-2">Vocational / Technical Subjects:</h4>
                      <ul className="space-y-1 text-muted-foreground">
                        <li>Home Management</li>
                        <li>Clothing and Textiles</li>
                        <li>Food and Nutrition</li>
                        <li>Animal Husbandry</li>
                        <li>Fisheries</li>
                        <li>Carpentry and Joinery</li>
                        <li>Electrical Installation</li>
                        <li>Welding and Fabrication</li>
                        <li>Data Processing</li>
                        <li>Building Construction</li>
                        <li>Auto Mechanics</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Special Programs */}
      <section className="py-16 bg-white md:px-[45px]">
        <div className="container px-4 md:px-[45px]">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                Beyond Academics
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Special Programs</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Empowering Students with Skills for Life
              </p>
            </div>
          </div>

          <div className="text-center mb-8 bg-primary/5 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-primary mb-2">COMPUTER/ICT SKILLS INTEGRATION</h3>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              To ensure our students are well-equipped for the digital age, COMPUTER/ICT skills are compulsory and will
              be integrated with all vocational and technical programs. This integration prepares students for the
              technology-driven workplace of today and tomorrow.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {specialPrograms.map((program, index) => (
              <Card key={index} className="overflow-hidden group hover:shadow-lg transition-all duration-300">
                <CardContent className="p-0">
                  <div className="h-48 relative">
                    <Image
                      src={program.backgroundImage || "/placeholder.svg"}
                      alt={program.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20 flex items-end">
                      <div className="p-6 text-white">
                        <h3 className="text-xl font-bold">{program.title}</h3>
                        <p className="text-sm italic text-white/80">{program.tagline}</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-6 bg-white">
                    <p className="text-muted-foreground">{program.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* <div className="mt-12 text-center">
            <Button asChild>
              <Link href="/programs">Explore All Programs</Link>
            </Button>
          </div> */}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-white">
        <div className="container px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
            Ready to Join Our Academic Community?
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
