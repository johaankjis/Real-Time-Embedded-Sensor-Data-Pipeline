"use client"

import { Card } from "@/components/ui/card"
import { Server, Database, Zap, Globe } from "lucide-react"

const services = [
  { name: "API Gateway", status: "operational", latency: "12ms", icon: Globe },
  { name: "Database", status: "operational", latency: "8ms", icon: Database },
  { name: "Cache Layer", status: "operational", latency: "2ms", icon: Zap },
  { name: "Worker Nodes", status: "operational", latency: "15ms", icon: Server },
]

export function EnvironmentHealth() {
  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold mb-4">Service Health</h3>
      <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
        {services.map((service) => {
          const Icon = service.icon
          return (
            <div key={service.name} className="flex items-center gap-3 p-3 rounded-md bg-card border border-border">
              <div className="p-2 rounded-md bg-primary/10">
                <Icon className="h-4 w-4 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-sm font-medium truncate">{service.name}</div>
                <div className="flex items-center gap-2 mt-0.5">
                  <div className="h-1.5 w-1.5 rounded-full bg-success animate-pulse" />
                  <span className="text-xs text-muted-foreground">{service.latency}</span>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </Card>
  )
}
