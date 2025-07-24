import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      {/* <section className="bg-red-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fadeIn">About Us</h1>
          <p className="text-xl max-w-3xl mx-auto animate-fadeIn">
            Learn more about Living T&M Services Private Limited and our mission to empower businesses.
          </p>
        </div>
      </section> */}

      {/* Company Overview */}
      <section className="py-10 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <img
                src="/about.png"
                alt="About Living T&M Services"
                className="max-w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2 md:pl-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">Our Company</h2>
              <p className="text-gray-600 mb-6">
                Living T&M Services Private Limited is a leading provider of talent acquisition and management services.
                Founded with a vision to bridge the gap between talented professionals and growing businesses, we have
                established ourselves as a trusted partner for organizations across various industries.
              </p>
              <p className="text-gray-600 mb-6">
                With our extensive industry experience and deep understanding of various sectors, we provide tailored
                solutions that meet the unique needs of our clients. Our team of experts works closely with businesses
                to understand their requirements and deliver exceptional results.
              </p>
              <p className="text-gray-600">
                At Living T&M Services, we believe in building long-term relationships with our clients and candidates,
                ensuring mutual growth and success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-red-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Our Mission & Vision</h2>
            <div className="w-20 h-1 bg-red-500 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4 text-red-600">Our Mission</h3>
              <p className="text-gray-600">
                To empower businesses by providing exceptional talent acquisition and management services that
                accelerate growth and success. We strive to connect the right talent with the right opportunities,
                creating value for both our clients and candidates.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4 text-red-600">Our Vision</h3>
              <p className="text-gray-600">
                To be the most trusted and preferred talent partner for businesses across industries, known for our
                integrity, expertise, and commitment to excellence. We aim to revolutionize the way organizations
                approach talent acquisition and management.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-10 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Our Core Values</h2>
            <div className="w-20 h-1 bg-red-500 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="bg-red-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 text-red-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">Integrity</h3>
              <p className="text-gray-600">
                We uphold the highest standards of honesty, transparency, and ethical conduct in all our interactions.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="bg-red-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 text-red-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">Excellence</h3>
              <p className="text-gray-600">
                We strive for excellence in everything we do, constantly raising the bar and exceeding expectations.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="bg-red-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 text-red-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">Collaboration</h3>
              <p className="text-gray-600">
                We believe in the power of teamwork and partnership, working closely with our clients and candidates.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="bg-red-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 text-red-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">Innovation</h3>
              <p className="text-gray-600">
                We embrace innovation and continuously evolve our approaches to deliver better results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      {/* <section className="py-16 bg-red-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Our Leadership Team</h2>
            <div className="w-20 h-1 bg-red-500 mx-auto"></div>
            <p className="text-gray-600 max-w-3xl mx-auto mt-4">
              Meet the experienced professionals who lead our organization with vision and expertise.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img src="/images/team/team-1.png" alt="Team Member" className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1 text-gray-800">Rajesh Kumar</h3>
                <p className="text-red-500 mb-4">Chief Executive Officer</p>
                <p className="text-gray-600">
                  With over 20 years of experience in the industry, Rajesh leads our company with vision and strategic
                  direction.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img src="/images/team/team-2.png" alt="Team Member" className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1 text-gray-800">Priya Sharma</h3>
                <p className="text-red-500 mb-4">Chief Operations Officer</p>
                <p className="text-gray-600">
                  Priya oversees our day-to-day operations, ensuring excellence in service delivery and client
                  satisfaction.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img src="/images/team/team-3.png" alt="Team Member" className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1 text-gray-800">Amit Patel</h3>
                <p className="text-red-500 mb-4">Head of Talent Acquisition</p>
                <p className="text-gray-600">
                  Amit leads our talent acquisition strategies, bringing innovative approaches to finding the right
                  talent.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* CTA */}
      <section className="py-16 bg-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to work with us?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today to learn how Living T&M Services can help your business find the right talent.
          </p>
          <Link href="/contact-us">
            <Button className="bg-white text-red-600 hover:bg-gray-100 px-8 py-6 text-lg">Contact Us</Button>
          </Link>
        </div>
      </section>
    </main>
  )
}
