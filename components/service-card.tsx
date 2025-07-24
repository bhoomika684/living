"use client"

import { useEffect, useRef } from "react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"

interface ServiceCardProps {
  title: string
  image: string
  items: string[]
  delay?: number
}

export default function ServiceCard({ title, image, items, delay = 0 }: ServiceCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("animate-slideUp")
              entry.target.classList.remove("opacity-0", "translate-y-10")
            }, delay * 1000)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 },
    )

    if (cardRef.current) {
      observer.observe(cardRef.current)
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current)
      }
    }
  }, [delay])

  return (
    <Card className="bg-white text-gray-800 h-full opacity-0 translate-y-10 transition-all duration-500" ref={cardRef}>
      <CardHeader className="p-0">
        <div className="h-48 overflow-hidden">
          <img src={image || "/placeholder.svg"} alt={title} className="w-full h-full object-cover" />
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <h3 className="text-xl font-bold mb-4">{title}</h3>
        <ul className="space-y-2">
          {items.map((item, index) => (
            <li key={index} className="flex items-start">
              <CheckCircle className="h-5 w-5 text-red-500 mr-2 flex-shrink-0 mt-0.5" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}
