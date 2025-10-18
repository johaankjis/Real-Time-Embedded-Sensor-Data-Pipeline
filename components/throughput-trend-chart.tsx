"use client"

import { Card } from "@/components/ui/card"
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const data = [
  { time: "00:00", throughput: 1800 },
  { time: "04:00", throughput: 1200 },
  { time: "08:00", throughput: 2400 },
  { time: "12:00", throughput: 3200 },
  { time: "16:00", throughput: 2800 },
  { time: "20:00", throughput: 2200 },
  { time: "24:00", throughput: 1600 },
]

export function ThroughputTrendChart() {
  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold mb-4">Throughput Trend (24h)</h3>
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="throughputGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="hsl(var(--accent))" stopOpacity={0.3} />
              <stop offset="95%" stopColor="hsl(var(--accent))" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="time" stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} />
          <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} />
          <Tooltip
            contentStyle={{
              backgroundColor: "hsl(var(--card))",
              border: "1px solid hsl(var(--border))",
              borderRadius: "var(--radius)",
            }}
            labelStyle={{ color: "hsl(var(--foreground))" }}
          />
          <Area
            type="monotone"
            dataKey="throughput"
            stroke="hsl(var(--accent))"
            fillOpacity={1}
            fill="url(#throughputGradient)"
            strokeWidth={2}
          />
        </AreaChart>
      </ResponsiveContainer>
    </Card>
  )
}
