import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

interface ProgramCardProps {
  title: string
  description: string
  details: string
  backgroundImage?: string
}

export function ProgramCard({ title, description, details, backgroundImage }: ProgramCardProps) {
  return (
    <Card className="animated-card overflow-hidden">
      <div className="relative">
        {backgroundImage && (
          <div className="relative h-48 w-full">
            <Image
              src={backgroundImage || "/placeholder.svg"}
              alt={`${title} background`}
              fill
              className="object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40"></div>
          </div>
        )}
        <CardContent className={`p-6 ${backgroundImage ? "pt-4" : "pt-6"}`}>
          <h3 className="text-xl font-bold mb-1 text-navy-blue">{title}</h3>
          <p className="text-sm font-medium text-school-blue mb-3">{description}</p>
          <p className="text-sm text-muted-foreground">{details}</p>
        </CardContent>
      </div>
    </Card>
  )
}
