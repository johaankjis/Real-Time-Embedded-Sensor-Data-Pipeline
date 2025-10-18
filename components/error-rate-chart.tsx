"use client"

import { Card } from "@/components/ui/card"
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const data = [
  { time: "00:00", errors: 8 },
  { time: "04:00", errors: 3 },
  { time: "08:00", errors: 12 },
  { time: "12:00", errors: 18 },
  { time: "16:00", errors: 15 },
  { time: "20:00", errors: 9 },
  { time: "24:00", errors: 6 },
]

export function ErrorRateChart() {
  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold mb-4">Error Rate (24h)</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
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
          <Line type="monotone" dataKey="errors" stroke="hsl(var(--destructive))" strokeWidth={2} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </Card>
  )
}
