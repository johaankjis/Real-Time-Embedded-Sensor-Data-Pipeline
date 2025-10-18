"use client"

import { Card } from "@/components/ui/card"
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const data = [
  { time: "00:00", latency: 28, baseline: 45 },
  { time: "04:00", latency: 26, baseline: 45 },
  { time: "08:00", latency: 24, baseline: 45 },
  { time: "12:00", latency: 22, baseline: 45 },
  { time: "16:00", latency: 25, baseline: 45 },
  { time: "20:00", latency: 23, baseline: 45 },
  { time: "24:00", latency: 21, baseline: 45 },
]

export function LatencyChart() {
  return (
    <Card className="p-6">
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Sensor-to-Database Latency</h3>
        <p className="text-sm text-muted-foreground">Real-time latency monitoring (ms)</p>
      </div>
      <div className="mt-4">
        <ChartContainer
          config={{
            latency: {
              label: "Current",
              color: "hsl(var(--chart-1))",
            },
            baseline: {
              label: "Baseline",
              color: "hsl(var(--muted-foreground))",
            },
          }}
          className="h-[200px]"
        >
          <AreaChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis dataKey="time" stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} />
            <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} axisLine={false} />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Area
              type="monotone"
              dataKey="baseline"
              stroke="hsl(var(--muted-foreground))"
              fill="hsl(var(--muted-foreground))"
              fillOpacity={0.1}
              strokeWidth={1}
              strokeDasharray="5 5"
            />
            <Area
              type="monotone"
              dataKey="latency"
              stroke="hsl(var(--chart-1))"
              fill="hsl(var(--chart-1))"
              fillOpacity={0.2}
              strokeWidth={2}
            />
          </AreaChart>
        </ChartContainer>
      </div>
      <div className="mt-4 flex items-center gap-4 text-sm">
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-chart-1" />
          <span className="text-muted-foreground">Current: 21ms</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-muted-foreground/50" />
          <span className="text-muted-foreground">Baseline: 45ms</span>
        </div>
      </div>
    </Card>
  )
}
