import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function AdmissionsPage() {
  const admissionSteps = [
    {
      number: "01",
      title: "Inquiry and Tour",
      description: "Contact our Admissions Office to schedule a campus tour and learn more about our programs.",
      action: "Schedule a tour",
    },
    {
      number: "02",
      title: "Application",
      description: "Complete and submit the online application form along with the application fee.",
      action: "Apply now",
    },
    {
      number: "03",
      title: "Assessment and Decision",
      description: "Student assessment, review of records, and notification of admissions decision.",
      action: "Learn more",
    },
  ]

  return (
    <div className="container mx-auto py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <section className="py-16 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-bridges-red/10 px-3 py-1 text-sm text-bridges-red">
                  Admissions
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900">
                  Join Our Community of Learners
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our admissions process is designed to be thorough yet welcoming, allowing us to get to know your child
                  and family while providing you with the information you need.
                </p>
              </div>
            </div>

            <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-3">
              {admissionSteps.map((step, index) => (
                <Card key={index} className="overflow-hidden border-0 shadow-lg rounded-xl">
                  <div className="relative h-full flex flex-col">
                    {/* Colored top bar */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-bridges-red"></div>

                    <CardContent className="flex-1 p-6">
                      <div className="mb-4">
                        <span className="text-5xl font-bold text-gray-100">{step.number}</span>
                      </div>
                      <h3 className="text-xl font-bold mb-2 text-gray-900">Step {step.number}</h3>
                      <h4 className="text-lg font-medium mb-3 text-bridges-red">{step.title}</h4>
                      <p className="text-gray-600 mb-6">{step.description}</p>
                      <Button
                        variant="ghost"
                        className="p-0 h-auto text-bridges-red hover:text-bridges-red/80 hover:bg-transparent group"
                      >
                        {step.action}
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </CardContent>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-bridges-red/10 px-3 py-1 text-sm text-bridges-red">
                  Tuition
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900">
                  Tuition and Financial Aid
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Greatandy International Academy is committed to delivering quality education in a disciplined and
              value-driven environment. We appreciate your unwavering support and commitment to your child's academic
              growth.
                </p>
              </div>
            </div>

            {/* <h2 className="text-bridges-red text-2xl font-serif mt-8 mb-4">Tuition and Financial Aid</h2>
            <p className="mb-6">
              Greatandy International Academy is committed to delivering quality education in a disciplined and
              value-driven environment. We appreciate your unwavering support and commitment to your child's academic
              growth.
            </p> */}

            <div className="bg-white p-6 rounded-lg shadow-lg my-8 border border-gray-100">
              <h3 className="text-bridges-red text-xl font-serif mb-4">SCHOOL FEES SCHEDULE (2025)</h3>
              <div className="space-y-3">
                <div className="flex justify-between border-b border-gray-100 pb-2">
                  <span>Playgroup:</span>
                  <span className="font-medium">₦20,000</span>
                </div>
                <div className="flex justify-between border-b border-gray-100 pb-2">
                  <span>Nursery 1 – Nursery 3:</span>
                  <span className="font-medium">₦18,000</span>
                </div>
                <div className="flex justify-between border-b border-gray-100 pb-2">
                  <span>Primary 1 – Primary 6:</span>
                  <span className="font-medium">₦18,000</span>
                </div>
                <div className="flex justify-between border-b border-gray-100 pb-2">
                  <span>JSS 1 – JSS 3:</span>
                  <span className="font-medium">₦18,500</span>
                </div>
                <div className="flex justify-between pb-2">
                  <span>SSS 1 – SSS 3:</span>
                  <span className="font-medium">₦21,000</span>
                </div>
              </div>

              <h3 className="text-bridges-red text-xl font-serif mt-6 mb-4">GRADUATION FEES</h3>
              <div className="space-y-3">
                <div className="flex justify-between border-b border-gray-100 pb-2">
                  <span>Graduating Students (Nursery 3, Primary 6, JSS 3, SSS 3):</span>
                  <span className="font-medium">₦10,000</span>
                </div>
                <div className="flex justify-between pb-2">
                  <span>Non-Graduating Students (for end-of-term activities and events):</span>
                  <span className="font-medium">₦5,000</span>
                </div>
              </div>

              <div className="mt-6 bg-bridges-red/5 p-4 rounded-lg">
                <h4 className="font-bold mb-2">IMPORTANT NOTES:</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>
                    • All fees are to be paid on or before <span className="font-bold">31ST MAY, 2025</span>, to ensure
                    smooth participation in academic activities.
                  </li>
                  <li>
                    • Graduating students must complete their graduation fee payment to participate in graduation
                    rehearsals, receive graduation kits, and appear in the official graduation brochure.
                  </li>
                  <li>• Payment receipts should be submitted to the school bursary for proper documentation.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* <section className="py-16 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-bridges-red/10 px-3 py-1 text-sm text-bridges-red">
                  Events
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900">
                  Open House Events
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We host several Open House events throughout the year to provide prospective families with an
                  opportunity to tour our campus, meet our faculty and staff, and learn more about our programs.
                </p>
              </div>
            </div>

            <div className="mx-auto max-w-4xl mt-12">
              <Card className="overflow-hidden border-0 shadow-lg rounded-xl">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold mb-6 text-gray-900">Upcoming Open House Dates</h3>
                  <div className="space-y-4">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-center p-4 bg-gray-50 rounded-lg">
                      <span className="text-lg font-medium">October 15, 2023</span>
                      <span className="text-bridges-red font-bold">9:00 AM - 11:00 AM</span>
                    </div>
                    <div className="flex flex-col md:flex-row md:justify-between md:items-center p-4 bg-gray-50 rounded-lg">
                      <span className="text-lg font-medium">November 12, 2023</span>
                      <span className="text-bridges-red font-bold">9:00 AM - 11:00 AM</span>
                    </div>
                    <div className="flex flex-col md:flex-row md:justify-between md:items-center p-4 bg-gray-50 rounded-lg">
                      <span className="text-lg font-medium">January 21, 2024</span>
                      <span className="text-bridges-red font-bold">9:00 AM - 11:00 AM</span>
                    </div>
                  </div>
                  <div className="mt-6 bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm font-medium">
                      Please RSVP by contacting our Admissions Office at (631) 358-5035 or
                      admissions@thebridgesacademy.net.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section> */}

        {/* <div className="flex flex-col sm:flex-row justify-center gap-4 mt-12">
          <Button className="bg-bridges-red hover:bg-red-800 text-white px-8 py-6 text-lg rounded-lg">Apply Now</Button>
          <Button
            variant="outline"
            className="border-2 border-bridges-red text-bridges-red hover:bg-bridges-red/10 px-8 py-6 text-lg rounded-lg"
          >
            Request Information
          </Button>
          <Button
            variant="outline"
            className="border-2 border-bridges-red text-bridges-red hover:bg-bridges-red/10 px-8 py-6 text-lg rounded-lg"
          >
            Schedule a Tour
          </Button>
        </div> */}
      </div>
    </div>
  )
}
