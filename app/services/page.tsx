import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"

export default function ServicesPage() {
  const services = [
    {
      title: "Executive Search Services",
      description:
        "Our executive search services help organizations identify and attract top-tier leadership talent. We understand the critical importance of finding executives who not only possess the right skills and experience but also align with your company's culture and vision.",
      features: [
        "Board Search",
        "Leadership hiring",
        "CxO Recruitment",
        "Senior Management Placement",
        "Succession Planning",
      ],
    },
    {
      title: "Recruitment Services",
      description:
        "Our comprehensive recruitment services are designed to connect businesses with qualified professionals across various industries and functions. We employ a rigorous selection process to ensure that candidates meet both the technical requirements and cultural fit.",
      features: [
        "Permanent Staffing",
        "Advertised Recruitment",
        "Turnkey Solutions",
        "Campus Recruitment",
        "Project based Recruitment",
      ],
    },
    {
      title: "Staffing Services",
      description:
        "Our staffing services provide flexible workforce solutions to help businesses manage fluctuating demands and special projects. We offer temporary, contract, and temp-to-perm staffing options across various industries and skill levels.",
      features: [
        "Temporary staffing",
        "Professional Staffing",
        "Industrial Staffing",
        "General Staffing",
        "IT Staffing",
      ],
    },
    {
      title: "Outsourcing Services",
      description:
        "Our outsourcing services allow businesses to focus on their core competencies while we handle specialized functions. We provide end-to-end management of outsourced processes, ensuring efficiency, quality, and cost-effectiveness.",
      features: [
        "HR consulting",
        "Recruitment Process Outsourcing",
        "Payroll Process Outsourcing",
        "Advertisement Response Management",
        "Training & Development",
      ],
    },
  ]

  return (
    <main className="min-h-screen bg-white py-10">
      <div className="container mx-auto px-5">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Our Services</h2>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-2">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl shadow-md p-6 hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold text-red-600 mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <h4 className="text-md font-medium text-gray-800 mb-3">Key Features</h4>
              <ul className="space-y-2 mb-5">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link href="/contact-us">
                <Button className="bg-red-500 hover:bg-red-600 text-white w-full">Learn More</Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
