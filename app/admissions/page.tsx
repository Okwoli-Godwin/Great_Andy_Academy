import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function AdmissionsPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-bridges-red text-4xl md:text-5xl font-serif mb-8">Admissions</h1>

        <div className="prose max-w-none">
          <p className="text-lg leading-relaxed mb-6">
            Thank you for your interest in The Bridges Academy. We invite you to explore our website and schedule a
            visit to learn more about our exceptional educational experience.
          </p>

          <div className="my-8 rounded-lg overflow-hidden">
            <Image
              src="/placeholder.svg?height=400&width=800"
              width={800}
              height={400}
              alt="Students at The Bridges Academy"
              className="w-full"
            />
          </div>

          <h2 className="text-bridges-red text-2xl font-serif mt-8 mb-4">Admissions Process</h2>
          <p className="mb-6">
            Our admissions process is designed to be thorough yet welcoming, allowing us to get to know your child and
            family while providing you with the information you need to make an informed decision about your child's
            education.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-bridges-red">Step 1</CardTitle>
                <CardDescription>Inquiry and Tour</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Contact our Admissions Office to schedule a campus tour and learn more about our programs.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-bridges-red">Step 2</CardTitle>
                <CardDescription>Application</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Complete and submit the online application form along with the application fee.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-bridges-red">Step 3</CardTitle>
                <CardDescription>Assessment and Decision</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Student assessment, review of records, and notification of admissions decision.</p>
              </CardContent>
            </Card>
          </div>

          <h2 className="text-bridges-red text-2xl font-serif mt-8 mb-4">Tuition and Financial Aid</h2>
          <p className="mb-6">
            The Bridges Academy is committed to making our educational experience accessible to qualified students from
            diverse backgrounds. We offer financial aid to families who demonstrate need.
          </p>

          <div className="bg-gray-100 p-6 rounded-lg my-8">
            <h3 className="text-bridges-red text-xl font-serif mb-4">2023-2024 Tuition Rates</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span>Pre-Kindergarten (Half Day):</span>
                <span className="font-medium">$X,XXX</span>
              </div>
              <div className="flex justify-between">
                <span>Pre-Kindergarten (Full Day):</span>
                <span className="font-medium">$X,XXX</span>
              </div>
              <div className="flex justify-between">
                <span>Kindergarten - Grade 5:</span>
                <span className="font-medium">$X,XXX</span>
              </div>
              <div className="flex justify-between">
                <span>Grades 6-8:</span>
                <span className="font-medium">$X,XXX</span>
              </div>
            </div>
            <p className="mt-4 text-sm text-gray-600">
              Tuition includes textbooks, technology fees, and most field trips. Additional fees may apply for certain
              programs and activities.
            </p>
          </div>

          <h2 className="text-bridges-red text-2xl font-serif mt-8 mb-4">Open House Events</h2>
          <p className="mb-6">
            We host several Open House events throughout the year to provide prospective families with an opportunity to
            tour our campus, meet our faculty and staff, and learn more about our programs.
          </p>

          <div className="bg-bridges-red/10 p-6 rounded-lg my-8">
            <h3 className="text-bridges-red text-xl font-serif mb-4">Upcoming Open House Dates</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span>October 15, 2023:</span>
                <span>9:00 AM - 11:00 AM</span>
              </div>
              <div className="flex justify-between">
                <span>November 12, 2023:</span>
                <span>9:00 AM - 11:00 AM</span>
              </div>
              <div className="flex justify-between">
                <span>January 21, 2024:</span>
                <span>9:00 AM - 11:00 AM</span>
              </div>
            </div>
            <p className="mt-4 text-sm">
              Please RSVP by contacting our Admissions Office at (631) 358-5035 or admissions@thebridgesacademy.net.
            </p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col sm:flex-row gap-4">
          <Button className="bg-bridges-red hover:bg-red-800 text-white">Apply Now</Button>
          <Button variant="outline" className="border-bridges-red text-bridges-red hover:bg-bridges-red/10">
            Request Information
          </Button>
          <Button variant="outline" className="border-bridges-red text-bridges-red hover:bg-bridges-red/10">
            Schedule a Tour
          </Button>
        </div>
      </div>
    </div>
  )
}
