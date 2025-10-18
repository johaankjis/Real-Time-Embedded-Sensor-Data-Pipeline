"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Cpu, Thermometer, Gauge, Droplets } from "lucide-react"

const sensors = [
  {
    id: "SENS-001",
    name: "Temperature Sensor A",
    type: "Temperature",
    status: "online",
    value: "23.5°C",
    icon: Thermometer,
  },
  { id: "SENS-002", name: "Pressure Sensor B", type: "Pressure", status: "online", value: "101.3 kPa", icon: Gauge },
  { id: "SENS-003", name: "Humidity Sensor C", type: "Humidity", status: "online", value: "45%", icon: Droplets },
  { id: "SENS-004", name: "CPU Monitor D", type: "System", status: "online", value: "42%", icon: Cpu },
  {
    id: "SENS-005",
    name: "Temperature Sensor E",
    type: "Temperature",
    status: "warning",
    value: "28.1°C",
    icon: Thermometer,
  },
  { id: "SENS-006", name: "Pressure Sensor F", type: "Pressure", status: "online", value: "98.7 kPa", icon: Gauge },
  { id: "SENS-007", name: "Humidity Sensor G", type: "Humidity", status: "online", value: "52%", icon: Droplets },
  { id: "SENS-008", name: "CPU Monitor H", type: "System", status: "online", value: "38%", icon: Cpu },
]

export function SensorStatusGrid() {
  return (
    <Card className="p-6">
      <div className="space-y-2 mb-4">
        <h3 className="text-lg font-semibold">Active Sensors</h3>
        <p className="text-sm text-muted-foreground">Real-time sensor status across 3 deployments</p>
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        {sensors.map((sensor) => {
          const Icon = sensor.icon
          return (
            <div
              key={sensor.id}
              className="flex items-center gap-3 rounded-lg border border-border bg-card p-3 hover:bg-accent/5 transition-colors"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary/10">
                <Icon className="h-5 w-5 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <p className="text-sm font-medium truncate">{sensor.name}</p>
                  <Badge
                    variant={sensor.status === "online" ? "default" : "secondary"}
                    className={
                      sensor.status === "online"
                        ? "bg-success/10 text-success border-success/20"
                        : "bg-warning/10 text-warning border-warning/20"
                    }
                  >
                    {sensor.status}
                  </Badge>
                </div>
                <div className="flex items-center gap-2 mt-1">
                  <p className="text-xs text-muted-foreground font-mono">{sensor.id}</p>
                  <span className="text-xs text-muted-foreground">•</span>
                  <p className="text-xs font-semibold">{sensor.value}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </Card>
  )
}
