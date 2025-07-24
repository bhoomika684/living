"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Upload, CheckCircle } from "lucide-react"

export default function ExplorePage() {
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [isUploading, setIsUploading] = useState(false)
  const [fileName, setFileName] = useState("")

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setIsUploading(true)
      setFileName(e.target.files[0].name)

      // Simulate upload delay
      setTimeout(() => {
        setIsUploading(false)
      }, 1500)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    setFormSubmitted(true)
  }

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-red-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fadeIn">Explore Us</h1>
          <p className="text-xl max-w-3xl mx-auto animate-fadeIn">
            Submit your information and requirements to explore how Living T&M Services can help your business.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8 border border-gray-100">
            {formSubmitted ? (
              <div className="text-center py-12">
                <div className="flex justify-center mb-6">
                  <div className="bg-green-100 p-4 rounded-full">
                    <CheckCircle className="h-16 w-16 text-green-500" />
                  </div>
                </div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Thank You!</h2>
                <p className="text-gray-600 mb-6">
                  Your information has been submitted successfully. Our team will review your details and get back to
                  you shortly.
                </p>
                <Button className="bg-red-500 hover:bg-red-600 text-white" onClick={() => setFormSubmitted(false)}>
                  Submit Another Request
                </Button>
              </div>
            ) : (
              <>
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Submit Your Information</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="Enter your first name" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Enter your last name" required />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input id="email" type="email" placeholder="Enter your email address" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" placeholder="Enter your phone number" required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company">Company Name</Label>
                    <Input id="company" placeholder="Enter your company name" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="requirements">Requirements</Label>
                    <Textarea
                      id="requirements"
                      placeholder="Please describe your requirements in detail"
                      rows={5}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="file">Upload Form or Document</Label>
                    <div className="border-2 border-dashed border-gray-300 rounded-md p-6 text-center">
                      <input type="file" id="file" className="hidden" onChange={handleFileChange} />
                      <label htmlFor="file" className="cursor-pointer flex flex-col items-center justify-center">
                        {isUploading ? (
                          <div className="animate-pulse">
                            <p className="text-gray-500">Uploading...</p>
                          </div>
                        ) : fileName ? (
                          <div className="flex items-center text-green-500">
                            <CheckCircle className="h-5 w-5 mr-2" />
                            <span>{fileName}</span>
                          </div>
                        ) : (
                          <>
                            <Upload className="h-10 w-10 text-gray-400 mb-2" />
                            <p className="text-sm text-gray-500">Click to upload or drag and drop</p>
                            <p className="text-xs text-gray-400 mt-1">PDF, DOC, DOCX, XLS, XLSX (Max 10MB)</p>
                          </>
                        )}
                      </label>
                    </div>
                  </div>

                  <Button type="submit" className="w-full bg-red-500 hover:bg-red-600 text-white py-3">
                    Submit
                  </Button>
                </form>
              </>
            )}
          </div>
        </div>
      </section>
    </main>
  )
}
