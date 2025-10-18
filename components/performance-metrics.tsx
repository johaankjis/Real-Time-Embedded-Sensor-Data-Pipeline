"use client"

import { Card } from "@/components/ui/card"
import { TrendingDown, TrendingUp, Zap, Database, Clock, Activity } from "lucide-react"

const metrics = [
  {
    title: "Avg Latency",
    value: "85ms",
    change: "-40%",
    trend: "down" as const,
    icon: Clock,
    description: "vs baseline",
  },
  {
    title: "Throughput",
    value: "2.4K/s",
    change: "+30%",
    trend: "up" as const,
    icon: Zap,
    description: "requests/sec",
  },
  {
    title: "Query Speed",
    value: "85ms",
    change: "-40%",
    trend: "down" as const,
    icon: Activity,
    description: "avg response",
  },
  {
    title: "Data Volume",
    value: "12.4M",
    change: "+18%",
    trend: "up" as const,
    icon: Database,
    description: "data points",
  },
]

export function PerformanceMetrics() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {metrics.map((metric) => {
        const Icon = metric.icon
        const TrendIcon = metric.trend === "up" ? TrendingUp : TrendingDown
        const trendColor = metric.trend === "up" ? "text-success" : "text-success"

        return (
          <Card key={metric.title} className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="p-2 rounded-md bg-primary/10">
                <Icon className="h-4 w-4 text-primary" />
              </div>
              <div className={`flex items-center gap-1 text-sm font-medium ${trendColor}`}>
                <TrendIcon className="h-4 w-4" />
                {metric.change}
              </div>
            </div>
            <div>
              <div className="text-2xl font-bold">{metric.value}</div>
              <div className="text-sm text-muted-foreground mt-1">{metric.title}</div>
              <div className="text-xs text-muted-foreground mt-0.5">{metric.description}</div>
            </div>
          </Card>
        )
      })}
    </div>
  )
}
