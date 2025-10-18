"use client"

import { Card } from "@/components/ui/card"
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const data = [
  { time: "00:00", throughput: 1800 },
  { time: "04:00", throughput: 2100 },
  { time: "08:00", throughput: 2400 },
  { time: "12:00", throughput: 2600 },
  { time: "16:00", throughput: 2300 },
  { time: "20:00", throughput: 2500 },
  { time: "24:00", throughput: 2400 },
]

export function ThroughputChart() {
  return (
    <Card className="p-6">
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Multi-threaded Throughput</h3>
        <p className="text-sm text-muted-foreground">Records processed per second</p>
      </div>
      <div className="mt-4">
        <ChartContainer
          config={{
            throughput: {
              label: "Throughput",
              color: "hsl(var(--chart-2))",
            },
          }}
          className="h-[200px]"
        >
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis dataKey="time" stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} />
            <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} axisLine={false} />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Bar dataKey="throughput" fill="hsl(var(--chart-2))" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ChartContainer>
      </div>
      <div className="mt-4 flex items-center gap-2 text-sm">
        <div className="h-3 w-3 rounded-full bg-chart-2" />
        <span className="text-muted-foreground">Average: 2,400 records/sec</span>
      </div>
    </Card>
  )
}
