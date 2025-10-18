"use client"

import { useState, useMemo } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuCheckboxItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Search, Download, Filter, ArrowUpDown, ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface SensorReading {
  id: string
  timestamp: Date
  sensorId: string
  sensorName: string
  type: string
  value: number
  unit: string
  status: "normal" | "warning" | "critical"
  location: string
}

// Generate sample data
function generateSensorReadings(): SensorReading[] {
  const types = ["temperature", "pressure", "humidity", "vibration", "flow"]
  const locations = ["Building A", "Building B", "Building C", "Warehouse", "Lab"]
  const units: Record<string, string> = {
    temperature: "°C",
    pressure: "PSI",
    humidity: "%",
    vibration: "Hz",
    flow: "L/min",
  }

  return Array.from({ length: 150 }, (_, i) => {
    const type = types[i % types.length]
    const value = Math.random() * 100
    let status: "normal" | "warning" | "critical" = "normal"
    if (value > 85) status = "critical"
    else if (value > 70) status = "warning"

    return {
      id: `reading-${i + 1}`,
      timestamp: new Date(Date.now() - Math.random() * 86400000 * 7),
      sensorId: `sensor-${Math.floor(i / 6) + 1}`,
      sensorName: `${type.charAt(0).toUpperCase() + type.slice(1)} Sensor ${Math.floor(i / types.length) + 1}`,
      type,
      value,
      unit: units[type],
      status,
      location: locations[i % locations.length],
    }
  })
}

type SortField = "timestamp" | "sensorName" | "value" | "status"
type SortDirection = "asc" | "desc"

export function SensorDataTable() {
  const [data] = useState<SensorReading[]>(generateSensorReadings())
  const [searchQuery, setSearchQuery] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const [sortField, setSortField] = useState<SortField>("timestamp")
  const [sortDirection, setSortDirection] = useState<SortDirection>("desc")
  const [filterTypes, setFilterTypes] = useState<Set<string>>(
    new Set(["temperature", "pressure", "humidity", "vibration", "flow"]),
  )
  const [filterStatus, setFilterStatus] = useState<Set<string>>(new Set(["normal", "warning", "critical"]))

  const itemsPerPage = 20

  // Filter and sort data
  const filteredAndSortedData = useMemo(() => {
    const filtered = data.filter(
      (reading) =>
        filterTypes.has(reading.type) &&
        filterStatus.has(reading.status) &&
        (reading.sensorName.toLowerCase().includes(searchQuery.toLowerCase()) ||
          reading.sensorId.toLowerCase().includes(searchQuery.toLowerCase()) ||
          reading.location.toLowerCase().includes(searchQuery.toLowerCase())),
    )

    filtered.sort((a, b) => {
      let aValue: any = a[sortField]
      let bValue: any = b[sortField]

      if (sortField === "timestamp") {
        aValue = a.timestamp.getTime()
        bValue = b.timestamp.getTime()
      }

      if (aValue < bValue) return sortDirection === "asc" ? -1 : 1
      if (aValue > bValue) return sortDirection === "asc" ? 1 : -1
      return 0
    })

    return filtered
  }, [data, searchQuery, sortField, sortDirection, filterTypes, filterStatus])

  const totalPages = Math.ceil(filteredAndSortedData.length / itemsPerPage)
  const paginatedData = filteredAndSortedData.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc")
    } else {
      setSortField(field)
      setSortDirection("asc")
    }
  }

  const statusColors = {
    normal: "bg-success/10 text-success border-success/20",
    warning: "bg-warning/10 text-warning border-warning/20",
    critical: "bg-destructive/10 text-destructive border-destructive/20",
  }

  return (
    <div className="container py-6 px-4 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Sensor Data</h1>
          <p className="text-muted-foreground mt-1">Browse and analyze historical sensor readings</p>
        </div>
        <Button variant="outline" size="sm">
          <Download className="h-4 w-4 mr-2" />
          Export CSV
        </Button>
      </div>

      {/* Filters and Search */}
      <Card className="p-4">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search by sensor name, ID, or location..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9"
            />
          </div>
          <div className="flex gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm">
                  <Filter className="h-4 w-4 mr-2" />
                  Type
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {["temperature", "pressure", "humidity", "vibration", "flow"].map((type) => (
                  <DropdownMenuCheckboxItem
                    key={type}
                    checked={filterTypes.has(type)}
                    onCheckedChange={(checked) => {
                      const newSet = new Set(filterTypes)
                      checked ? newSet.add(type) : newSet.delete(type)
                      setFilterTypes(newSet)
                      setCurrentPage(1)
                    }}
                  >
                    {type.charAt(0).toUpperCase() + type.slice(1)}
                  </DropdownMenuCheckboxItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm">
                  <Filter className="h-4 w-4 mr-2" />
                  Status
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {["normal", "warning", "critical"].map((status) => (
                  <DropdownMenuCheckboxItem
                    key={status}
                    checked={filterStatus.has(status)}
                    onCheckedChange={(checked) => {
                      const newSet = new Set(filterStatus)
                      checked ? newSet.add(status) : newSet.delete(status)
                      setFilterStatus(newSet)
                      setCurrentPage(1)
                    }}
                  >
                    {status.charAt(0).toUpperCase() + status.slice(1)}
                  </DropdownMenuCheckboxItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </Card>

      {/* Data Table */}
      <Card>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>
                <Button variant="ghost" size="sm" className="h-8 px-2" onClick={() => handleSort("timestamp")}>
                  Timestamp
                  <ArrowUpDown className="ml-2 h-3 w-3" />
                </Button>
              </TableHead>
              <TableHead>
                <Button variant="ghost" size="sm" className="h-8 px-2" onClick={() => handleSort("sensorName")}>
                  Sensor
                  <ArrowUpDown className="ml-2 h-3 w-3" />
                </Button>
              </TableHead>
              <TableHead>Type</TableHead>
              <TableHead>
                <Button variant="ghost" size="sm" className="h-8 px-2" onClick={() => handleSort("value")}>
                  Value
                  <ArrowUpDown className="ml-2 h-3 w-3" />
                </Button>
              </TableHead>
              <TableHead>
                <Button variant="ghost" size="sm" className="h-8 px-2" onClick={() => handleSort("status")}>
                  Status
                  <ArrowUpDown className="ml-2 h-3 w-3" />
                </Button>
              </TableHead>
              <TableHead>Location</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {paginatedData.map((reading) => (
              <TableRow key={reading.id}>
                <TableCell className="font-mono text-xs">
                  {reading.timestamp.toLocaleString([], {
                    month: "short",
                    day: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </TableCell>
                <TableCell>
                  <div>
                    <div className="font-medium text-sm">{reading.sensorName}</div>
                    <div className="text-xs text-muted-foreground font-mono">{reading.sensorId}</div>
                  </div>
                </TableCell>
                <TableCell>
                  <span className="text-sm capitalize">{reading.type}</span>
                </TableCell>
                <TableCell>
                  <span className="font-semibold">
                    {reading.value.toFixed(2)} {reading.unit}
                  </span>
                </TableCell>
                <TableCell>
                  <Badge variant="outline" className={cn("text-xs", statusColors[reading.status])}>
                    {reading.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-sm text-muted-foreground">{reading.location}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        {/* Pagination */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-border">
          <div className="text-sm text-muted-foreground">
            Showing {(currentPage - 1) * itemsPerPage + 1} to{" "}
            {Math.min(currentPage * itemsPerPage, filteredAndSortedData.length)} of {filteredAndSortedData.length}{" "}
            results
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
            >
              <ChevronLeft className="h-4 w-4" />
              Previous
            </Button>
            <div className="flex items-center gap-1">
              {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                let pageNum: number
                if (totalPages <= 5) {
                  pageNum = i + 1
                } else if (currentPage <= 3) {
                  pageNum = i + 1
                } else if (currentPage >= totalPages - 2) {
                  pageNum = totalPages - 4 + i
                } else {
                  pageNum = currentPage - 2 + i
                }

                return (
                  <Button
                    key={pageNum}
                    variant={currentPage === pageNum ? "default" : "outline"}
                    size="sm"
                    className="w-8 h-8 p-0"
                    onClick={() => setCurrentPage(pageNum)}
                  >
                    {pageNum}
                  </Button>
                )
              })}
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
            >
              Next
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </Card>

      {/* Summary Stats */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card className="p-4">
          <div className="text-sm text-muted-foreground mb-1">Total Readings</div>
          <div className="text-2xl font-bold">{filteredAndSortedData.length}</div>
        </Card>
        <Card className="p-4">
          <div className="text-sm text-muted-foreground mb-1">Normal</div>
          <div className="text-2xl font-bold text-success">
            {filteredAndSortedData.filter((r) => r.status === "normal").length}
          </div>
        </Card>
        <Card className="p-4">
          <div className="text-sm text-muted-foreground mb-1">Warning</div>
          <div className="text-2xl font-bold text-warning">
            {filteredAndSortedData.filter((r) => r.status === "warning").length}
          </div>
        </Card>
        <Card className="p-4">
          <div className="text-sm text-muted-foreground mb-1">Critical</div>
          <div className="text-2xl font-bold text-destructive">
            {filteredAndSortedData.filter((r) => r.status === "critical").length}
          </div>
        </Card>
      </div>
    </div>
  )
}
