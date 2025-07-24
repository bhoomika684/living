"use client"

import { useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"

interface IndustryCardProps {
  name: string
  index: number
}

export default function IndustryCard({ name, index }: IndustryCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(
              () => {
                entry.target.classList.add("animate-slideUp")
                entry.target.classList.remove("opacity-0", "translate-y-10")
              },
              (index % 4) * 0.1 * 1000,
            )
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
  }, [index])

  return (
    <Card
      className="overflow-hidden opacity-0 translate-y-10 transition-all duration-500 hover:shadow-lg hover:-translate-y-1"
      ref={cardRef}
    >
      <div className="h-40 bg-red-100 overflow-hidden">
        <img
          src={`/images/industries/industry-${(index % 8) + 1}.png`}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>
      <CardContent className="p-4">
        <h3 className="font-medium text-center">{name}</h3>
      </CardContent>
    </Card>
  )
}
