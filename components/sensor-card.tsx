"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Thermometer, Gauge, Droplets, Activity, Waves, TrendingUp, TrendingDown, Minus } from "lucide-react"
import type { Sensor } from "@/components/sensor-monitoring"
import { cn } from "@/lib/utils"

interface SensorCardProps {
  sensor: Sensor
  onClick: () => void
}

const sensorIcons = {
  temperature: Thermometer,
  pressure: Gauge,
  humidity: Droplets,
  vibration: Activity,
  flow: Waves,
}

const statusColors = {
  online: "bg-success/10 text-success border-success/20",
  warning: "bg-warning/10 text-warning border-warning/20",
  offline: "bg-destructive/10 text-destructive border-destructive/20",
}

const trendIcons = {
  up: TrendingUp,
  down: TrendingDown,
  stable: Minus,
}

export function SensorCard({ sensor, onClick }: SensorCardProps) {
  const Icon = sensorIcons[sensor.type]
  const TrendIcon = trendIcons[sensor.trend]
  const timeSinceUpdate = Math.floor((Date.now() - sensor.lastUpdate.getTime()) / 1000)

  return (
    <Card className="p-4 cursor-pointer transition-all hover:shadow-lg hover:border-primary/50" onClick={onClick}>
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-md bg-primary/10">
            <Icon className="h-4 w-4 text-primary" />
          </div>
          <div>
            <h3 className="font-semibold text-sm">{sensor.name}</h3>
            <p className="text-xs text-muted-foreground">{sensor.location}</p>
          </div>
        </div>
        <Badge variant="outline" className={cn("text-xs", statusColors[sensor.status])}>
          {sensor.status}
        </Badge>
      </div>

      <div className="space-y-2">
        <div className="flex items-baseline gap-2">
          <span className="text-2xl font-bold">{sensor.value.toFixed(1)}</span>
          <span className="text-sm text-muted-foreground">{sensor.unit}</span>
          <TrendIcon
            className={cn("h-4 w-4 ml-auto", {
              "text-success": sensor.trend === "up",
              "text-destructive": sensor.trend === "down",
              "text-muted-foreground": sensor.trend === "stable",
            })}
          />
        </div>
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <span>Updated {timeSinceUpdate}s ago</span>
          {sensor.status === "online" && (
            <div className="flex items-center gap-1">
              <div className="h-1.5 w-1.5 rounded-full bg-success animate-pulse" />
              <span>Live</span>
            </div>
          )}
        </div>
      </div>
    </Card>
  )
}
