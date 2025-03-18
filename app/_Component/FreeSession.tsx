import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"


export default function FreeSession() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Empower Your Future with TechNova Nepal</h1>
            <p className="text-xl mb-8">
              Free sessions on career growth, exam stress management, and effective time management
            </p>
            <Button size="lg" className="bg-white text-blue-700 hover:bg-gray-100">
              <Link href="#register">Register Now</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">About Our Free Sessions</h2>
            <p className="text-gray-600">
              TechNova Nepal is committed to supporting students and professionals through their educational and career
              journeys. Our expert-led sessions provide valuable insights and practical strategies to help you succeed.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-t-4 border-blue-500">
              <CardHeader>
                <CardTitle>Career Growth</CardTitle>
                <CardDescription>Navigate your professional journey</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Learn how to set career goals, build your professional network, and develop the skills needed to
                  thrive in today's competitive job market.
                </p>
                <div className="mt-4 flex items-center text-sm text-gray-500">
                  <i className="ri-clock-line mr-2 h-4 w-4" />
                  <span>90 minutes</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  Learn More
                </Button>
              </CardFooter>
            </Card>

            <Card className="border-t-4 border-purple-500">
              <CardHeader>
                <CardTitle>Exam Stress Management</CardTitle>
                <CardDescription>Overcome test anxiety</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Discover effective techniques to manage exam-related stress, improve focus, and maintain mental
                  well-being during high-pressure academic periods.
                </p>
                <div className="mt-4 flex items-center text-sm text-gray-500">
                  <i className="ri-clock-line mr-2 h-4 w-4" />
                  <span>60 minutes</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  Learn More
                </Button>
              </CardFooter>
            </Card>

            <Card className="border-t-4 border-green-500">
              <CardHeader>
                <CardTitle>Time Management</CardTitle>
                <CardDescription>Maximize your productivity</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Master practical time management strategies to balance studies, work, and personal life. Learn
                  prioritization techniques and tools to boost your efficiency.
                </p>
                <div className="mt-4 flex items-center text-sm text-gray-500">
                  <i className="ri-clock-line mr-2 h-4 w-4" />
                  <span>75 minutes</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  Learn More
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Upcoming Sessions */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Upcoming Free Sessions</h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>Career Planning Workshop</CardTitle>
                <CardDescription>For students and recent graduates</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <i className="ri-calendar-line mr-2 h-5 w-5 text-blue-600" />
                    <span>March 15, 2025</span>
                  </div>
                  <div className="flex items-center">
                    <i className="ri-clock-line mr-2 h-5 w-5 text-blue-600" />
                    <span>2:00 PM - 3:30 PM</span>
                  </div>
                  <div className="flex items-center">
                    <i className="ri-map-pin-line mr-2 h-5 w-5 text-blue-600" />
                    <span>TechNova Hub, Kathmandu</span>
                  </div>
                  <div className="flex items-center">
                    <i className="ri-user-line mr-2 h-5 w-5 text-blue-600" />
                    <span>Limited to 30 participants</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">
                  <Link href="#register">Register</Link>
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Exam Stress & Time Management</CardTitle>
                <CardDescription>Combined session for all students</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <i className="ri-calendar-line mr-2 h-5 w-5 text-blue-600" />
                    <span>March 22, 2025</span>
                  </div>
                  <div className="flex items-center">
                    <i className="ri-clock-line mr-2 h-5 w-5 text-blue-600" />
                    <span>4:00 PM - 6:00 PM</span>
                  </div>
                  <div className="flex items-center">
                    <i className="ri-map-pin-line mr-2 h-5 w-5 text-blue-600" />
                    <span>Online via Zoom</span>
                  </div>
                  <div className="flex items-center">
                    <i className="ri-user-line mr-2 h-5 w-5 text-blue-600" />
                    <span>Unlimited participants</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">
                  <Link href="#register">Register</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">What Participants Say</h2>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="bg-white">
              <CardContent className="pt-6">
                <p className="italic text-gray-600 mb-4">
                  "The career growth session helped me clarify my professional goals and create an actionable plan.
                  Highly recommended!"
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold mr-3">
                    SR
                  </div>
                  <div>
                    <p className="font-medium">Suman Rai</p>
                    <p className="text-sm text-gray-500">IT Student</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardContent className="pt-6">
                <p className="italic text-gray-600 mb-4">
                  "I used to struggle with exam anxiety, but after attending the stress management session, I've learned
                  techniques that really work!"
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 font-bold mr-3">
                    AP
                  </div>
                  <div>
                    <p className="font-medium">Anita Poudel</p>
                    <p className="text-sm text-gray-500">Engineering Student</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardContent className="pt-6">
                <p className="italic text-gray-600 mb-4">
                  "Time management skills I learned from the session have helped me manage my workload effectively,
                  leading to better results."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold mr-3">
                    RC
                  </div>
                  <div>
                    <p className="font-medium">Rajesh Chhetri</p>
                    <p className="text-sm text-gray-500">Freelancer</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Registration Form */}
      {/* <section id="register" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Register for a Session</h2>
          <SessionRegistrationForm />
        </div>
      </section> */}

      {/* Footer */}
      <footer className="py-8 bg-gray-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2025 TechNova Nepal. All Rights Reserved.</p>
          <div className="mt-4">
            <Link href="https://facebook.com" className="mr-4 text-white hover:text-blue-400">
              Facebook
            </Link>
            <Link href="https://twitter.com" className="mr-4 text-white hover:text-blue-400">
              Twitter
            </Link>
            <Link href="https://linkedin.com" className="mr-4 text-white hover:text-blue-400">
              LinkedIn
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
