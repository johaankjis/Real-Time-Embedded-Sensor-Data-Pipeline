"use client"

import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PerformanceMetrics } from "@/components/performance-metrics"
import { DataQualityChart } from "@/components/data-quality-chart"
import { SensorUtilizationChart } from "@/components/sensor-utilization-chart"
import { LatencyDistributionChart } from "@/components/latency-distribution-chart"
import { ThroughputTrendChart } from "@/components/throughput-trend-chart"
import { ErrorRateChart } from "@/components/error-rate-chart"
import { Button } from "@/components/ui/button"
import { Download, Calendar } from "lucide-react"

export function AnalyticsDashboard() {
  return (
    <div className="container py-6 px-4 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Analytics & Performance</h1>
          <p className="text-muted-foreground mt-1">Comprehensive metrics and insights for your sensor pipeline</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <Calendar className="h-4 w-4 mr-2" />
            Last 7 Days
          </Button>
          <Button variant="outline" size="sm">
            <Download className="h-4 w-4 mr-2" />
            Export Report
          </Button>
        </div>
      </div>

      {/* Performance Metrics Overview */}
      <PerformanceMetrics />

      {/* Detailed Analytics Tabs */}
      <Tabs defaultValue="performance" className="space-y-4">
        <TabsList>
          <TabsTrigger value="performance">Performance</TabsTrigger>
          <TabsTrigger value="quality">Data Quality</TabsTrigger>
          <TabsTrigger value="utilization">Utilization</TabsTrigger>
          <TabsTrigger value="errors">Errors & Alerts</TabsTrigger>
        </TabsList>

        <TabsContent value="performance" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <LatencyDistributionChart />
            <ThroughputTrendChart />
          </div>
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Performance Summary</h3>
            <div className="grid gap-4 md:grid-cols-3">
              <div>
                <div className="text-sm text-muted-foreground mb-1">Avg Response Time</div>
                <div className="text-2xl font-bold">85ms</div>
                <div className="text-xs text-success mt-1">↓ 40% from baseline</div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground mb-1">P95 Latency</div>
                <div className="text-2xl font-bold">142ms</div>
                <div className="text-xs text-success mt-1">↓ 35% improvement</div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground mb-1">P99 Latency</div>
                <div className="text-2xl font-bold">198ms</div>
                <div className="text-xs text-success mt-1">↓ 28% improvement</div>
              </div>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="quality" className="space-y-4">
          <DataQualityChart />
          <div className="grid gap-4 md:grid-cols-3">
            <Card className="p-6">
              <div className="text-sm text-muted-foreground mb-1">Data Completeness</div>
              <div className="text-2xl font-bold">98.7%</div>
              <div className="text-xs text-success mt-1">↑ 2.3% this week</div>
            </Card>
            <Card className="p-6">
              <div className="text-sm text-muted-foreground mb-1">Data Accuracy</div>
              <div className="text-2xl font-bold">99.2%</div>
              <div className="text-xs text-success mt-1">↑ 1.8% this week</div>
            </Card>
            <Card className="p-6">
              <div className="text-sm text-muted-foreground mb-1">Validation Pass Rate</div>
              <div className="text-2xl font-bold">97.5%</div>
              <div className="text-xs text-success mt-1">↑ 3.1% this week</div>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="utilization" className="space-y-4">
          <SensorUtilizationChart />
          <div className="grid gap-4 md:grid-cols-2">
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Resource Utilization</h3>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-muted-foreground">CPU Usage</span>
                    <span className="font-medium">42%</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <div className="h-full bg-primary" style={{ width: "42%" }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-muted-foreground">Memory Usage</span>
                    <span className="font-medium">68%</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <div className="h-full bg-accent" style={{ width: "68%" }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-muted-foreground">Network I/O</span>
                    <span className="font-medium">55%</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <div className="h-full bg-success" style={{ width: "55%" }} />
                  </div>
                </div>
              </div>
            </Card>
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Sensor Activity</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Active Sensors</span>
                  <span className="text-lg font-bold">24/24</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Avg Data Rate</span>
                  <span className="text-lg font-bold">2.4K/sec</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Peak Data Rate</span>
                  <span className="text-lg font-bold">3.8K/sec</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Total Data Points</span>
                  <span className="text-lg font-bold">12.4M</span>
                </div>
              </div>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="errors" className="space-y-4">
          <ErrorRateChart />
          <div className="grid gap-4 md:grid-cols-2">
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Error Summary</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Total Errors (24h)</span>
                  <span className="text-lg font-bold">127</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Error Rate</span>
                  <span className="text-lg font-bold">0.52%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Avg Resolution Time</span>
                  <span className="text-lg font-bold">4.2 min</span>
                </div>
              </div>
            </Card>
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Recent Alerts</h3>
              <div className="space-y-2">
                <div className="flex items-start gap-2 text-sm">
                  <div className="h-2 w-2 rounded-full bg-warning mt-1.5" />
                  <div className="flex-1">
                    <div className="font-medium">High latency detected</div>
                    <div className="text-xs text-muted-foreground">Sensor-12 • 5 min ago</div>
                  </div>
                </div>
                <div className="flex items-start gap-2 text-sm">
                  <div className="h-2 w-2 rounded-full bg-destructive mt-1.5" />
                  <div className="flex-1">
                    <div className="font-medium">Connection timeout</div>
                    <div className="text-xs text-muted-foreground">Sensor-18 • 12 min ago</div>
                  </div>
                </div>
                <div className="flex items-start gap-2 text-sm">
                  <div className="h-2 w-2 rounded-full bg-warning mt-1.5" />
                  <div className="flex-1">
                    <div className="font-medium">Data validation failed</div>
                    <div className="text-xs text-muted-foreground">Sensor-7 • 18 min ago</div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
