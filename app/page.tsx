import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import ServiceCard from "@/components/service-card"

export default function Home() {
  const services = [
    {
      title: "Executive Search Services",
      image: "/Executive.png",
      items: ["Board Search", "Leadership hiring", "CxO", "Senior Management"],
    },
    {
      title: "Recruitment Services",
      image: "/recruitment.png",
      items: [
        "Permanent Staffing",
        "Advertised Recruitment",
        "Turnkey Solutions",
        "Campus Recruitment",
        "Project based Recruitment",
      ],
    },
    {
      title: "Staffing Services",
      image: "/staffing.png",
      items: ["Temporary staffing", "Professional Staffing", "Industrial Staffing", "General Staffing", "IT Staffing"],
    },
    {
      title: "Outsourcing Services",
      image: "/outsourcingg.jpg",
      items: [
        "HR consulting",
        "Recruitment Process Outsourcing",
        "Payroll Process Outsourcing",
        "Advertisement Response Management Services",
      ],
    },
  ]

  const industries = [
    { name: "Manufacturing, EPC", image: "/img1.jpg" },
    { name: "Engineering & Process Industry Fast Moving Consumer Goods (FMCG)", image: "/img2.jpg" },
    { name: "Information Technology & Internet", image: "/img3.jpg" },
    { name: "Automobile", image: "/img4.jpg" },
    { name: "Pharma / Healthcare & Life Sciences", image: "/img5.jpg" },
    { name: "Banking, Financial Services, Insurance (BFSI)", image: "/img6.jpg" },
    { name: "Retail & Hospitality Services", image: "/img7.jpg" },
    { name: "Entertainment, Media & Communication Transportation", image: "/img8.jpg" },
    { name: "Infrastructure & Utilities", image: "/img9.jpg" },
    { name: "FMCG (Fast Moving Consumer Goods)", image: "/img10.jpg" },
    { name: "Consumer Services", image: "/img11.jpg" },
    { name: "Transportation", image: "/img12.jpg" },
    { name: "Government Sectors", image: "/img13.jpg" },
    { name: "Agriculture", image: "/img14.jpg" },
    { name: "Veterinary & Animal husbandry", image: "/img16.jpg" },
  ]

  return (
    <main className="flex min-h-screen flex-col">
      {/* HERO SECTION */}
      <section className="relative bg-white overflow-hidden">
        <div className="container mx-auto px-6 py-10 md:py-10 flex flex-col md:flex-row items-center relative z-10">
          {/* LEFT TEXT BLOCK */}
          <div className="md:w-1/2 text-red-800 md:pr-10 z-10">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-8 leading-snug">
              Empowering businesses by accelerating <br />
              talent acquisition
            </h1>
            <Link href="/services">
              <Button className="bg-[#5c1f1f] hover:bg-[#441717] text-white text-lg px-6 py-4 rounded-md transition">
                Learn More <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>

          {/* RIGHT IMAGE */}
          <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center z-10">
            <img
              src="/img17.jpg"
              alt="Team collaboration"
              className="w-full h-[400px] md:h-[500px] object-cover"

           />
          </div>
        </div>

        {/* CURVED SVG BACKGROUND */}
        {/* <svg
          className="absolute top-0 right-0 h-full w-full md:w-1/2"
          viewBox="0 0 600 600"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 C400,300 400,300 600,0 L600,600 L0,600 Z"
            fill="#5c1f1f"
          />
        </svg> */}
      </section>

      {/* SERVICES SECTION */}
      <section className="bg-red-800 text-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                image={service.image}
                items={service.items}
                delay={index * 0.2}
              />
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES SECTION */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">Industries We Serve</h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Focused Practice Groups for the following Industry Verticals for all our services.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow duration-300 bg-white"
              >
                <img
                  src={industry.image}
                  alt={industry.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4 text-center">
                  <p className="text-sm font-medium text-gray-800">{industry.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="py-16 bg-red-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <img
                src="/about.png"
                alt="About Living T&M Services"
                className="max-w-full h-auto rounded-lg shadow-lg animate-fadeIn"
              />
            </div>
            <div className="md:w-1/2 md:pl-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">About Us</h2>
              <p className="text-gray-600 mb-6">
                Living T&M Services Private Limited is a leading provider of talent acquisition and management services.
                We help businesses find the right talent to drive their growth and success.
              </p>
              <p className="text-gray-600 mb-6">
                With our extensive industry experience and deep understanding of various sectors, we provide tailored
                solutions that meet the unique needs of our clients.
              </p>
              <Link href="/about">
                <Button className="bg-red-500 hover:bg-red-600 text-white">Learn More</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="py-16 bg-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to accelerate your talent acquisition?</h2>
          <p className="mb-8 max-w-2xl mx-auto">
            Contact us today to learn how Living T&M Services can help your business find the right talent.
          </p>
          <Link href="/contact-us">
            <Button className="bg-white text-red-600 hover:bg-gray-100">Contact Us</Button>
          </Link>
        </div>
      </section>
    </main>
  )
}
