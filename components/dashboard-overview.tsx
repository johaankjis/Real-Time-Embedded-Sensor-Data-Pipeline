"use client"
import { Activity, Database, Zap, Clock } from "lucide-react"
import { MetricCard } from "@/components/metric-card"
import { LatencyChart } from "@/components/latency-chart"
import { ThroughputChart } from "@/components/throughput-chart"
import { SensorStatusGrid } from "@/components/sensor-status-grid"
import { RecentEvents } from "@/components/recent-events"

export function DashboardOverview() {
  return (
    <div className="container py-6 px-4 space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard Overview</h1>
        <p className="text-muted-foreground mt-1">Real-time monitoring of embedded sensor data pipeline</p>
      </div>

      {/* KPI Metrics */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="Latency Reduction"
          value="45%"
          description="vs baseline"
          icon={Clock}
          trend="down"
          trendValue="12ms avg"
        />
        <MetricCard
          title="Throughput"
          value="30%"
          description="improvement"
          icon={Zap}
          trend="up"
          trendValue="2.4K/sec"
        />
        <MetricCard
          title="Active Sensors"
          value="24"
          description="online"
          icon={Database}
          trend="neutral"
          trendValue="3 deployments"
        />
        <MetricCard
          title="Query Speed"
          value="40%"
          description="faster"
          icon={Activity}
          trend="down"
          trendValue="85ms avg"
        />
      </div>

      {/* Charts */}
      <div className="grid gap-4 md:grid-cols-2">
        <LatencyChart />
        <ThroughputChart />
      </div>

      {/* Sensor Status & Events */}
      <div className="grid gap-4 md:grid-cols-3">
        <div className="md:col-span-2">
          <SensorStatusGrid />
        </div>
        <div>
          <RecentEvents />
        </div>
      </div>
    </div>
  )
}
