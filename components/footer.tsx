import Link from "next/link"
import { Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-100 pt-10 pb-5">
      <div className="w-full max-w-screen-xl mx-auto px-2">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">Living T&M Services</h3>
            <div className="space-y-4 text-gray-600">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-red-500 mr-3 mt-1 flex-shrink-0" />
                <p>
                  Living T&M Services Private Limited, Unit No. 401, 4th Floor, Tanvi's Tanishka
                  Industrial Estate Cooperative Society Ltd., CST No. 1588/3, Tanvi Complex, S. V.
                  Road, Near HPCL Petrol Pump, Dahisar East, Mumbai - 400068
                </p>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-red-500 mr-3 flex-shrink-0" />
                <p>+91 22 4029 7000</p>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-red-500 mr-3 flex-shrink-0" />
                <p>info@livinghr.in</p>
              </div>
            </div>
          </div>
          

          {/* Useful Links */}
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">Useful Links</h3>
            <ul className="space-y-2 text-gray-600">
              <li>
                <Link href="/" className="hover:text-red-500 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-red-500 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact-us" className="hover:text-red-500 transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/downloads" className="hover:text-red-500 transition-colors">
                  Downloads
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-12 pt-6 text-center text-gray-600 text-sm">
          © {new Date().getFullYear()} Living T&M Services Private Limited. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
