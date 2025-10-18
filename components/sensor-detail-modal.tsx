"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { X, Download, AlertTriangle } from "lucide-react"
import type { Sensor } from "@/components/sensor-monitoring"
import { cn } from "@/lib/utils"
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

interface SensorDetailModalProps {
  sensor: Sensor
  onClose: () => void
}

// Generate historical data for the chart
function generateHistoricalData(currentValue: number) {
  return Array.from({ length: 20 }, (_, i) => ({
    time: new Date(Date.now() - (19 - i) * 60000).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    value: currentValue + (Math.random() - 0.5) * 20,
  }))
}

export function SensorDetailModal({ sensor, onClose }: SensorDetailModalProps) {
  const [historicalData, setHistoricalData] = useState(generateHistoricalData(sensor.value))

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setHistoricalData((prev) => {
        const newData = [
          ...prev.slice(1),
          {
            time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
            value: sensor.value + (Math.random() - 0.5) * 10,
          },
        ]
        return newData
      })
    }, 3000)

    return () => clearInterval(interval)
  }, [sensor.value])

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm">
      <Card className="w-full max-w-3xl max-h-[90vh] overflow-y-auto m-4">
        <div className="p-6 space-y-6">
          {/* Header */}
          <div className="flex items-start justify-between">
            <div>
              <h2 className="text-2xl font-bold">{sensor.name}</h2>
              <p className="text-muted-foreground mt-1">{sensor.location}</p>
            </div>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X className="h-4 w-4" />
            </Button>
          </div>

          {/* Status and Metrics */}
          <div className="grid gap-4 md:grid-cols-3">
            <Card className="p-4">
              <div className="text-sm text-muted-foreground mb-1">Status</div>
              <Badge
                variant="outline"
                className={cn("text-sm", {
                  "bg-success/10 text-success border-success/20": sensor.status === "online",
                  "bg-warning/10 text-warning border-warning/20": sensor.status === "warning",
                  "bg-destructive/10 text-destructive border-destructive/20": sensor.status === "offline",
                })}
              >
                {sensor.status}
              </Badge>
            </Card>
            <Card className="p-4">
              <div className="text-sm text-muted-foreground mb-1">Current Value</div>
              <div className="text-2xl font-bold">
                {sensor.value.toFixed(2)} {sensor.unit}
              </div>
            </Card>
            <Card className="p-4">
              <div className="text-sm text-muted-foreground mb-1">Last Update</div>
              <div className="text-sm font-medium">{sensor.lastUpdate.toLocaleTimeString()}</div>
            </Card>
          </div>

          {/* Historical Chart */}
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Historical Data (Last 20 minutes)</h3>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={historicalData}>
                <XAxis dataKey="time" stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} />
                <YAxis
                  stroke="hsl(var(--muted-foreground))"
                  fontSize={12}
                  tickLine={false}
                  tickFormatter={(value) => `${value.toFixed(0)}`}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "var(--radius)",
                  }}
                  labelStyle={{ color: "hsl(var(--foreground))" }}
                />
                <Line type="monotone" dataKey="value" stroke="hsl(var(--primary))" strokeWidth={2} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </Card>

          {/* Sensor Details */}
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Sensor Details</h3>
            <div className="grid gap-3 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Sensor ID</span>
                <span className="font-mono">{sensor.id}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Type</span>
                <span className="capitalize">{sensor.type}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Location</span>
                <span>{sensor.location}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Trend</span>
                <span className="capitalize">{sensor.trend}</span>
              </div>
            </div>
          </Card>

          {/* Alerts */}
          {sensor.status === "warning" && (
            <Card className="p-4 bg-warning/5 border-warning/20">
              <div className="flex items-start gap-3">
                <AlertTriangle className="h-5 w-5 text-warning mt-0.5" />
                <div>
                  <h4 className="font-semibold text-warning">Warning Alert</h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    Sensor readings are outside normal operating range. Please investigate.
                  </p>
                </div>
              </div>
            </Card>
          )}

          {/* Actions */}
          <div className="flex gap-2">
            <Button variant="outline" className="flex-1 bg-transparent">
              <Download className="h-4 w-4 mr-2" />
              Export Data
            </Button>
            <Button variant="outline" className="flex-1 bg-transparent">
              Configure Alerts
            </Button>
          </div>
        </div>
      </Card>
    </div>
  )
}
