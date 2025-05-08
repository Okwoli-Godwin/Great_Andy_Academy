import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface ProgramCardProps {
  title: string
  description: string
  details: string
  className?: string
}

export function ProgramCard({ title, description, details, className }: ProgramCardProps) {
  return (
    <Card className={cn("bg-white overflow-hidden animated-card", className)}>
      <CardContent className="p-0">
        <div className="h-40 bg-navy-blue flex items-center justify-center">
          <div className="text-center p-4">
            <h3 className="text-xl font-bold text-gold-yellow">{title}</h3>
            <p className="text-sm italic text-white">{description}</p>
          </div>
        </div>
        <div className="p-6">
          <p className="text-sm text-muted-foreground">{details}</p>
        </div>
      </CardContent>
    </Card>
  )
}
