import { Card } from "@/components/ui/card"
import { type LucideIcon, TrendingDown, TrendingUp, Minus } from "lucide-react"
import { cn } from "@/lib/utils"

interface MetricCardProps {
  title: string
  value: string
  description: string
  icon: LucideIcon
  trend: "up" | "down" | "neutral"
  trendValue: string
}

export function MetricCard({ title, value, description, icon: Icon, trend, trendValue }: MetricCardProps) {
  const TrendIcon = trend === "up" ? TrendingUp : trend === "down" ? TrendingDown : Minus

  return (
    <Card className="p-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary/10">
            <Icon className="h-5 w-5 text-primary" />
          </div>
        </div>
        <TrendIcon
          className={cn(
            "h-4 w-4",
            trend === "up" && "text-success",
            trend === "down" && "text-success",
            trend === "neutral" && "text-muted-foreground",
          )}
        />
      </div>
      <div className="mt-4">
        <div className="text-2xl font-bold">{value}</div>
        <p className="text-sm text-muted-foreground">{description}</p>
        <div className="mt-2 text-xs text-muted-foreground font-mono">{trendValue}</div>
      </div>
    </Card>
  )
}
