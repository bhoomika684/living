interface ServiceCardProps {
  title: string
  image: string
  items: string[]
  delay: number
}

export default function ServiceCard({ title, image, items, delay }: ServiceCardProps) {
  return (
    <div
      className="bg-white text-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
      style={{
        animationDelay: `${delay}s`,
        animation: "fadeInUp 0.6s ease-out forwards",
      }}
    >
      <div className="mb-4">
        <img src={image || "/placeholder.svg"} alt={title} className="w-full h-48 object-cover rounded-lg mb-4" />
        <h3 className="text-xl font-bold mb-4">{title}</h3>
      </div>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index} className="flex items-center text-sm">
            <div className="w-2 h-2 bg-red-500 rounded-full mr-3 flex-shrink-0"></div>
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}
