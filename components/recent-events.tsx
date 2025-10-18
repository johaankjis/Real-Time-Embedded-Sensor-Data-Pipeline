"use client"

import { Card } from "@/components/ui/card"
import { CheckCircle2, AlertCircle, Info } from "lucide-react"

const events = [
  {
    id: 1,
    type: "success",
    message: "Deployment completed",
    time: "2m ago",
    details: "Production-3",
  },
  {
    id: 2,
    type: "info",
    message: "Query optimization applied",
    time: "15m ago",
    details: "Index created",
  },
  {
    id: 3,
    type: "warning",
    message: "High temperature detected",
    time: "23m ago",
    details: "SENS-005",
  },
  {
    id: 4,
    type: "success",
    message: "CI/CD pipeline passed",
    time: "1h ago",
    details: "Build #247",
  },
  {
    id: 5,
    type: "info",
    message: "New sensor registered",
    time: "2h ago",
    details: "SENS-008",
  },
]

export function RecentEvents() {
  return (
    <Card className="p-6">
      <div className="space-y-2 mb-4">
        <h3 className="text-lg font-semibold">Recent Events</h3>
        <p className="text-sm text-muted-foreground">Latest system activity</p>
      </div>
      <div className="space-y-3">
        {events.map((event) => {
          const Icon = event.type === "success" ? CheckCircle2 : event.type === "warning" ? AlertCircle : Info
          const iconColor =
            event.type === "success" ? "text-success" : event.type === "warning" ? "text-warning" : "text-accent"

          return (
            <div key={event.id} className="flex gap-3 pb-3 border-b border-border last:border-0 last:pb-0">
              <Icon className={`h-5 w-5 mt-0.5 ${iconColor}`} />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium">{event.message}</p>
                <div className="flex items-center gap-2 mt-1">
                  <p className="text-xs text-muted-foreground">{event.time}</p>
                  <span className="text-xs text-muted-foreground">•</span>
                  <p className="text-xs text-muted-foreground font-mono">{event.details}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </Card>
  )
}
