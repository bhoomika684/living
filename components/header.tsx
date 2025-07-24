"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Mail, Phone, Facebook, Instagram, Linkedin, Twitter, Menu, X } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="w-full">
      {/* Top Bar */}
      <div className="bg-gray-100 py-2">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-4 mb-2 md:mb-0">
            <div className="flex items-center text-sm text-gray-600">
              <Mail className="h-4 w-4 mr-1" />
              <span>info@livinghr.in</span>
            </div>
            {/* <div className="flex items-center text-sm text-gray-600">
              <Phone className="h-4 w-4 mr-1" />
              <span>+91 22 4029 7000</span>
            </div> */}
          </div>
          <div className="flex items-center space-x-3">
            <Link href="https://www.facebook.com/" className="text-gray-600 hover:text-red-500 transition-colors">
              <Facebook className="h-4 w-4" />
            </Link>
            <Link href="https://www.instagram.com/" className="text-gray-600 hover:text-red-500 transition-colors">
              <Instagram className="h-4 w-4" />
            </Link>
            <Link href="https://in.linkedin.com/" className="text-gray-600 hover:text-red-500 transition-colors">
              <Linkedin className="h-4 w-4" />
            </Link>
            <Link href="https://x.com/" className="text-gray-600 hover:text-red-500 transition-colors">
              <Twitter className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <span className="text-xl font-bold text-red-600">Living T&M Services</span>
          </Link>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-gray-700 focus:outline-none" onClick={toggleMenu}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-gray-700 hover:text-red-500 transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-red-500 transition-colors">
              About Us
            </Link>
            <Link href="/services" className="text-gray-700 hover:text-red-500 transition-colors">
              Services
            </Link>
            {/* <Link href="/industries" className="text-gray-700 hover:text-red-500 transition-colors">
              Industries We Serve
            </Link> */}
            <Link href="/contact-us" className="text-gray-700 hover:text-red-500 transition-colors">
              Contact Us
            </Link>
            <div className="relative">
              <Button className="bg-red-600 hover:bg-red-700 text-white" onClick={toggleMenu}>
                Login
              </Button>
              {isMenuOpen && (
                <div className="absolute right-0 mt-2 w-32 bg-white border border-gray-200 rounded-md shadow-lg z-50">
                  <Link
                    href="https://emp.tnmhr.com"
                    className="block px-4 py-2 text-gray-700 hover:bg-red-50 hover:text-red-600"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Associate
                  </Link>
                  <Link
                    href="https://client.tnmhr.com"
                    className="block px-4 py-2 text-gray-700 hover:bg-red-50 hover:text-red-600"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Client
                  </Link>
                </div>
              )}
            </div>
          </nav>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 py-4 border-t border-gray-200">
            <ul className="flex flex-col space-y-4">
              <li>
                <Link
                  href="/"
                  className="block text-gray-700 hover:text-red-500 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="block text-gray-700 hover:text-red-500 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="block text-gray-700 hover:text-red-500 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/explore-us"
                  className="block text-gray-700 hover:text-red-500 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Explore Us
                </Link>
              </li>
              <li>
                <Link
                  href="/industries"
                  className="block text-gray-700 hover:text-red-500 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Industries We Serve
                </Link>
              </li>
              <li>
                <Link
                  href="/contact-us"
                  className="block text-gray-700 hover:text-red-500 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <div className="relative">
                  <Button className="w-full bg-red-600 hover:bg-red-700 text-white" onClick={toggleMenu}>
                    Login
                  </Button>
                  {isMenuOpen && (
                    <div className="mt-2 bg-white border border-gray-200 rounded-md shadow-lg">
                      <Link
                        href="/login/associate"
                        className="block px-4 py-2 text-gray-700 hover:bg-red-50 hover:text-red-600"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Associate
                      </Link>
                      <Link
                        href="/login/client"
                        className="block px-4 py-2 text-gray-700 hover:bg-red-50 hover:text-red-600"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Client
                      </Link>
                    </div>
                  )}
                </div>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  )
}
