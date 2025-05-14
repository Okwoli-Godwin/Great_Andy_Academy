import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, Calculator, FlaskRoundIcon as Flask, Globe, Music, Palette, Code } from "lucide-react"

export default function AcademicsPage() {
  const specialPrograms = [
    {
      title: "Music Program",
      tagline: "Discover. Create. Perform.",
      description:
        "Our music program fosters artistic expression through vocal training, musical instruments, and theory. Students gain confidence, discipline, and stage experience through performances, school events, and competitions.",
      backgroundImage: "/music.jpg",
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
      backgroundImage: "/fashion_student.jpg",
    },
    {
      title: "Financial Literacy & Entrepreneurship",
      tagline: "Think Smart. Build Wealth.",
      description:
        "This program introduces students to saving, budgeting, investing, and business planning. It instills financial responsibility and inspires young entrepreneurs to create, lead, and thrive in today's economy.",
      backgroundImage: "/financial.jpg",
    },
    {
      title: "Shoe Making",
      tagline: "Step Into Craftsmanship.",
      description:
        "Our shoe making program teaches students the art of footwear design and production. Students learn material selection, pattern cutting, stitching, and finishing techniques to create quality, handcrafted shoes.",
      backgroundImage: "/shoe_making.jpg",
    },
    {
      title: "Phone Repair & Technology",
      tagline: "Fix. Innovate. Connect.",
      description:
        "Students learn to diagnose and repair smartphones, tablets, and other electronic devices. This program provides practical skills in troubleshooting, component replacement, and customer service for the growing tech repair industry.",
      backgroundImage: "/phone_repair.jpg",
    },
    {
      title: "Mechanical Engineering",
      tagline: "Design. Build. Improve.",
      description:
        "Our mechanical engineering program introduces students to the principles of mechanics, thermodynamics, and material science. Students engage in hands-on projects designing and building mechanical systems and devices.",
      backgroundImage: "/mechanical_engineering.jpg",
    },
    {
      title: "Electrical Engineering",
      tagline: "Power the Future.",
      description:
        "Students learn the fundamentals of electrical circuits, power systems, and electronics. This program combines theory with practical applications, preparing students for careers in electrical installation, maintenance, and design.",
      backgroundImage: "/electrical_engineering.jpg",
    },
    {
      title: "Media Arts",
      tagline: "Create. Share. Influence.",
      description:
        "Our media arts program covers content creation, digital design, and social media management. Students develop skills in photography, video production, graphic design, and online content strategy for the digital age.",
      backgroundImage: "/media_art.jpg",
    },
    {
      title: "Carpentry",
      tagline: "Craft with Precision.",
      description:
        "Students learn woodworking techniques, furniture design, and construction principles. This program develops skills in measurement, cutting, joining, and finishing to create functional and beautiful wooden structures and items.",
      backgroundImage: "/carpenter.jpg",
    },
    {
      title: "Hair Styling & Barbing",
      tagline: "Style with Confidence.",
      description:
        "Our hair program teaches cutting, styling, coloring, and treatment techniques for all hair types. Students learn salon operations, customer service, and the latest trends in hair fashion and care.",
      backgroundImage: "/barbing.jpg",
    },
    {
      title: "Animal Husbandry",
      tagline: "Nurture. Grow. Sustain.",
      description:
        "Students learn livestock management, breeding, nutrition, and health care. This program provides practical experience in raising animals sustainably while developing business skills for agricultural entrepreneurship.",
      backgroundImage: "/animal_husbandary.jpg",
    },
  ]

  // Subject categories with icons
  const subjectCategories = {
    primary: [
      {
        name: "Core Subjects",
        icon: BookOpen,
        color: "from-blue-500 to-blue-700",
        subjects: [
          "English Language",
          "Mathematics",
          "Basic Science and Technology",
          "Civic Education",
          "Cultural and Creative Arts",
          "Christian Religious Studies / Islamic Religious Studies",
          "Physical and Health Education",
          "Nigerian Languages (Edo, Yoruba, Igbo, Hausa)",
          "Social Studies",
        ],
      },
      {
        name: "Pre-Vocational and Enrichment",
        icon: Palette,
        color: "from-purple-500 to-purple-700",
        subjects: [
          "Agricultural Science",
          "Home Economics",
          "Computer Studies / ICT",
          "Moral Instruction",
          "French",
          "Music",
          "Verbal and Quantitative Reasoning",
          "Handwriting",
          "Phonics and Spelling",
        ],
      },
    ],
    junior: [
      {
        name: "Core Subjects",
        icon: BookOpen,
        color: "from-green-500 to-green-700",
        subjects: [
          "English Language",
          "Mathematics",
          "Basic Science",
          "Social Studies",
          "Civic Education",
          "Christian Religious Studies / Islamic Religious Studies",
          "Cultural and Creative Arts",
          "Basic Technology",
          "Physical and Health Education",
          "Agricultural Science",
          "Business Studies",
          "Computer Studies / ICT",
          "Nigerian Languages",
          "French",
        ],
      },
      {
        name: "Electives (Optional)",
        icon: Music,
        color: "from-amber-500 to-amber-700",
        subjects: ["Home Economics", "Music", "Arabic", "Entrepreneurship Education"],
      },
    ],
    senior: [
      {
        name: "Science Subjects",
        icon: Flask,
        color: "from-blue-500 to-blue-700",
        subjects: [
          "Mathematics",
          "English Language",
          "Physics",
          "Chemistry",
          "Biology",
          "Agricultural Science",
          "Further Mathematics",
          "Computer Studies / ICT",
          "Technical Drawing",
          "Geography",
          "Health Science",
          "Physical Education",
        ],
      },
      {
        name: "Commercial Subjects",
        icon: Calculator,
        color: "from-emerald-500 to-emerald-700",
        subjects: [
          "Mathematics",
          "English Language",
          "Economics",
          "Accounting",
          "Commerce",
          "Marketing",
          "Office Practice",
          "Insurance",
          "Business Studies",
          "Financial Accounting",
        ],
      },
      {
        name: "Arts and Humanities",
        icon: Globe,
        color: "from-purple-500 to-purple-700",
        subjects: [
          "Government",
          "Literature in English",
          "Christian Religious Studies / Islamic Religious Studies",
          "History",
          "Civic Education",
          "Visual Arts",
          "Music",
          "French",
          "Nigerian Languages",
          "Arabic",
          "Social Studies",
        ],
      },
      {
        name: "Vocational / Technical",
        icon: Code,
        color: "from-orange-500 to-orange-700",
        subjects: [
          "Home Management",
          "Clothing and Textiles",
          "Food and Nutrition",
          "Animal Husbandry",
          "Fisheries",
          "Carpentry and Joinery",
          "Electrical Installation",
          "Welding and Fabrication",
          "Data Processing",
          "Building Construction",
          "Auto Mechanics",
        ],
      },
    ],
  }

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
      <section className="py-16 bg-gradient-to-b from-muted/50 to-muted">
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

          <div className="relative">
            <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
              <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full border-8 border-primary"></div>
              <div className="absolute top-1/2 right-1/4 w-24 h-24 rounded-full border-8 border-primary"></div>
              <div className="absolute bottom-1/4 left-1/3 w-16 h-16 rounded-full border-8 border-primary"></div>
            </div>

            <Tabs defaultValue="primary" className="max-w-5xl mx-auto">
              <div className="bg-white p-4 rounded-lg shadow-md mb-6">
                <TabsList className="grid w-full grid-cols-3 p-1 bg-muted/30">
                  <TabsTrigger
                    value="primary"
                    className="data-[state=active]:bg-primary data-[state=active]:text-white rounded-md transition-all"
                  >
                    Primary School
                  </TabsTrigger>
                  <TabsTrigger
                    value="junior"
                    className="data-[state=active]:bg-primary data-[state=active]:text-white rounded-md transition-all"
                  >
                    Junior Secondary
                  </TabsTrigger>
                  <TabsTrigger
                    value="senior"
                    className="data-[state=active]:bg-primary data-[state=active]:text-white rounded-md transition-all"
                  >
                    Senior Secondary
                  </TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="primary" className="mt-6 space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  {subjectCategories.primary.map((category, index) => {
                    const Icon = category.icon
                    return (
                      <Card
                        key={index}
                        className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                      >
                        <div className={`h-16 bg-gradient-to-r ${category.color} relative overflow-hidden`}>
                          {/* Decorative pattern */}
                          <div className="absolute inset-0 opacity-10">
                            <div className="absolute top-0 left-0 w-full h-full grid grid-cols-8 gap-1">
                              {Array.from({ length: 32 }).map((_, i) => (
                                <div key={i} className="w-full h-8 bg-white/20 rounded-full transform rotate-45"></div>
                              ))}
                            </div>
                          </div>
                        </div>
                        <CardContent className="p-6 pt-10 relative">
                          {/* Icon */}
                          <div className="absolute -top-8 left-6">
                            <div className="h-16 w-16 rounded-full bg-white shadow-lg flex items-center justify-center p-1">
                              <div
                                className={`h-full w-full rounded-full bg-gradient-to-br ${category.color} flex items-center justify-center`}
                              >
                                <Icon className="h-8 w-8 text-white" />
                              </div>
                            </div>
                          </div>

                          <div className="ml-14">
                            <h3 className="text-xl font-bold mb-4">{category.name}</h3>
                            <div className="grid grid-cols-1 gap-2">
                              {category.subjects.map((subject, idx) => (
                                <div
                                  key={idx}
                                  className="flex items-center p-2 rounded-md hover:bg-muted/50 transition-colors"
                                >
                                  <div className="h-2 w-2 rounded-full bg-primary mr-3"></div>
                                  <span className="text-muted-foreground">{subject}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    )
                  })}
                </div>
              </TabsContent>

              <TabsContent value="junior" className="mt-6 space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  {subjectCategories.junior.map((category, index) => {
                    const Icon = category.icon
                    return (
                      <Card
                        key={index}
                        className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                      >
                        <div className={`h-16 bg-gradient-to-r ${category.color} relative overflow-hidden`}>
                          {/* Decorative pattern */}
                          <div className="absolute inset-0 opacity-10">
                            <div className="absolute top-0 left-0 w-full h-full grid grid-cols-8 gap-1">
                              {Array.from({ length: 32 }).map((_, i) => (
                                <div key={i} className="w-full h-8 bg-white/20 rounded-full transform rotate-45"></div>
                              ))}
                            </div>
                          </div>
                        </div>
                        <CardContent className="p-6 pt-10 relative">
                          {/* Icon */}
                          <div className="absolute -top-8 left-6">
                            <div className="h-16 w-16 rounded-full bg-white shadow-lg flex items-center justify-center p-1">
                              <div
                                className={`h-full w-full rounded-full bg-gradient-to-br ${category.color} flex items-center justify-center`}
                              >
                                <Icon className="h-8 w-8 text-white" />
                              </div>
                            </div>
                          </div>

                          <div className="ml-14">
                            <h3 className="text-xl font-bold mb-4">{category.name}</h3>
                            <div className="grid grid-cols-1 gap-2">
                              {category.subjects.map((subject, idx) => (
                                <div
                                  key={idx}
                                  className="flex items-center p-2 rounded-md hover:bg-muted/50 transition-colors"
                                >
                                  <div className="h-2 w-2 rounded-full bg-primary mr-3"></div>
                                  <span className="text-muted-foreground">{subject}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    )
                  })}
                </div>
              </TabsContent>

              <TabsContent value="senior" className="mt-6 space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  {subjectCategories.senior.map((category, index) => {
                    const Icon = category.icon
                    return (
                      <Card
                        key={index}
                        className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                      >
                        <div className={`h-16 bg-gradient-to-r ${category.color} relative overflow-hidden`}>
                          {/* Decorative pattern */}
                          <div className="absolute inset-0 opacity-10">
                            <div className="absolute top-0 left-0 w-full h-full grid grid-cols-8 gap-1">
                              {Array.from({ length: 32 }).map((_, i) => (
                                <div key={i} className="w-full h-8 bg-white/20 rounded-full transform rotate-45"></div>
                              ))}
                            </div>
                          </div>
                        </div>
                        <CardContent className="p-6 pt-10 relative">
                          {/* Icon */}
                          <div className="absolute -top-8 left-6">
                            <div className="h-16 w-16 rounded-full bg-white shadow-lg flex items-center justify-center p-1">
                              <div
                                className={`h-full w-full rounded-full bg-gradient-to-br ${category.color} flex items-center justify-center`}
                              >
                                <Icon className="h-8 w-8 text-white" />
                              </div>
                            </div>
                          </div>

                          <div className="ml-14">
                            <h3 className="text-xl font-bold mb-4">{category.name}</h3>
                            <div className="grid grid-cols-1 gap-2">
                              {category.subjects.map((subject, idx) => (
                                <div
                                  key={idx}
                                  className="flex items-center p-2 rounded-md hover:bg-muted/50 transition-colors"
                                >
                                  <div className="h-2 w-2 rounded-full bg-primary mr-3"></div>
                                  <span className="text-muted-foreground">{subject}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    )
                  })}
                </div>
              </TabsContent>
            </Tabs>
          </div>
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
            <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
