"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { SensorCard } from "@/components/sensor-card"
import { SensorDetailModal } from "@/components/sensor-detail-modal"
import { Filter, RefreshCw } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuCheckboxItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export type SensorStatus = "online" | "warning" | "offline"
export type SensorType = "temperature" | "pressure" | "humidity" | "vibration" | "flow"

export interface Sensor {
  id: string
  name: string
  type: SensorType
  status: SensorStatus
  value: number
  unit: string
  location: string
  lastUpdate: Date
  trend: "up" | "down" | "stable"
}

// Simulated real-time sensor data
function generateSensorData(): Sensor[] {
  const types: SensorType[] = ["temperature", "pressure", "humidity", "vibration", "flow"]
  const locations = ["Building A", "Building B", "Building C", "Warehouse", "Lab"]
  const units: Record<SensorType, string> = {
    temperature: "°C",
    pressure: "PSI",
    humidity: "%",
    vibration: "Hz",
    flow: "L/min",
  }

  return Array.from({ length: 24 }, (_, i) => {
    const type = types[i % types.length]
    const statusRand = Math.random()
    let status: SensorStatus = "online"
    if (statusRand > 0.9) status = "offline"
    else if (statusRand > 0.75) status = "warning"

    return {
      id: `sensor-${i + 1}`,
      name: `${type.charAt(0).toUpperCase() + type.slice(1)} Sensor ${Math.floor(i / types.length) + 1}`,
      type,
      status,
      value: Math.random() * 100,
      unit: units[type],
      location: locations[i % locations.length],
      lastUpdate: new Date(Date.now() - Math.random() * 60000),
      trend: ["up", "down", "stable"][Math.floor(Math.random() * 3)] as "up" | "down" | "stable",
    }
  })
}

export function SensorMonitoring() {
  const [sensors, setSensors] = useState<Sensor[]>(generateSensorData())
  const [selectedSensor, setSelectedSensor] = useState<Sensor | null>(null)
  const [filterStatus, setFilterStatus] = useState<Set<SensorStatus>>(new Set(["online", "warning", "offline"]))
  const [filterType, setFilterType] = useState<Set<SensorType>>(
    new Set(["temperature", "pressure", "humidity", "vibration", "flow"]),
  )
  const [isRefreshing, setIsRefreshing] = useState(false)

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setSensors((prev) =>
        prev.map((sensor) => ({
          ...sensor,
          value: sensor.value + (Math.random() - 0.5) * 5,
          lastUpdate: new Date(),
          trend: ["up", "down", "stable"][Math.floor(Math.random() * 3)] as "up" | "down" | "stable",
        })),
      )
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  const handleRefresh = () => {
    setIsRefreshing(true)
    setSensors(generateSensorData())
    setTimeout(() => setIsRefreshing(false), 500)
  }

  const filteredSensors = sensors.filter((sensor) => filterStatus.has(sensor.status) && filterType.has(sensor.type))

  const statusCounts = {
    online: sensors.filter((s) => s.status === "online").length,
    warning: sensors.filter((s) => s.status === "warning").length,
    offline: sensors.filter((s) => s.status === "offline").length,
  }

  return (
    <div className="container py-6 px-4 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Sensor Monitoring</h1>
          <p className="text-muted-foreground mt-1">Real-time data from all connected sensors</p>
        </div>
        <Button onClick={handleRefresh} variant="outline" size="sm" disabled={isRefreshing}>
          <RefreshCw className={`h-4 w-4 mr-2 ${isRefreshing ? "animate-spin" : ""}`} />
          Refresh
        </Button>
      </div>

      {/* Status Summary */}
      <div className="flex items-center gap-4">
        <Card className="px-4 py-3 flex items-center gap-3">
          <div className="h-2 w-2 rounded-full bg-success animate-pulse" />
          <span className="text-sm font-medium">{statusCounts.online} Online</span>
        </Card>
        <Card className="px-4 py-3 flex items-center gap-3">
          <div className="h-2 w-2 rounded-full bg-warning" />
          <span className="text-sm font-medium">{statusCounts.warning} Warning</span>
        </Card>
        <Card className="px-4 py-3 flex items-center gap-3">
          <div className="h-2 w-2 rounded-full bg-destructive" />
          <span className="text-sm font-medium">{statusCounts.offline} Offline</span>
        </Card>
        <div className="ml-auto flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm">
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <div className="px-2 py-1.5 text-sm font-semibold">Status</div>
              <DropdownMenuCheckboxItem
                checked={filterStatus.has("online")}
                onCheckedChange={(checked) => {
                  const newSet = new Set(filterStatus)
                  checked ? newSet.add("online") : newSet.delete("online")
                  setFilterStatus(newSet)
                }}
              >
                Online
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem
                checked={filterStatus.has("warning")}
                onCheckedChange={(checked) => {
                  const newSet = new Set(filterStatus)
                  checked ? newSet.add("warning") : newSet.delete("warning")
                  setFilterStatus(newSet)
                }}
              >
                Warning
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem
                checked={filterStatus.has("offline")}
                onCheckedChange={(checked) => {
                  const newSet = new Set(filterStatus)
                  checked ? newSet.add("offline") : newSet.delete("offline")
                  setFilterStatus(newSet)
                }}
              >
                Offline
              </DropdownMenuCheckboxItem>
              <div className="px-2 py-1.5 text-sm font-semibold mt-2">Type</div>
              {(["temperature", "pressure", "humidity", "vibration", "flow"] as SensorType[]).map((type) => (
                <DropdownMenuCheckboxItem
                  key={type}
                  checked={filterType.has(type)}
                  onCheckedChange={(checked) => {
                    const newSet = new Set(filterType)
                    checked ? newSet.add(type) : newSet.delete(type)
                    setFilterType(newSet)
                  }}
                >
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                </DropdownMenuCheckboxItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {/* Sensor Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filteredSensors.map((sensor) => (
          <SensorCard key={sensor.id} sensor={sensor} onClick={() => setSelectedSensor(sensor)} />
        ))}
      </div>

      {filteredSensors.length === 0 && (
        <Card className="p-12 text-center">
          <p className="text-muted-foreground">No sensors match the current filters</p>
        </Card>
      )}

      {/* Sensor Detail Modal */}
      {selectedSensor && <SensorDetailModal sensor={selectedSensor} onClose={() => setSelectedSensor(null)} />}
    </div>
  )
}
