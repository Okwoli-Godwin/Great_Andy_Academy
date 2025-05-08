import { Card, CardContent } from "@/components/ui/card"
import type { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface ValueCardProps {
  title: string
  description: string
  icon: LucideIcon
  className?: string
}

export function ValueCard({ title, description, icon: Icon, className }: ValueCardProps) {
  return (
    <Card className={cn("bg-white border-t-4 border-t-school-blue animated-card", className)}>
      <CardContent className="p-6">
        <div className="h-12 w-12 rounded-full bg-navy-blue/10 flex items-center justify-center mb-4">
          <Icon className="h-6 w-6 text-school-blue" />
        </div>
        <h3 className="text-lg font-bold mb-2 text-navy-blue">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  )
}
