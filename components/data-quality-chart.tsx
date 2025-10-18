"use client"

import { Card } from "@/components/ui/card"
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis, Legend } from "recharts"

const data = [
  { date: "Mon", completeness: 97.2, accuracy: 98.5, validation: 96.8 },
  { date: "Tue", completeness: 97.8, accuracy: 98.9, validation: 97.2 },
  { date: "Wed", completeness: 98.1, accuracy: 99.1, validation: 97.5 },
  { date: "Thu", completeness: 98.4, accuracy: 99.0, validation: 97.8 },
  { date: "Fri", completeness: 98.6, accuracy: 99.2, validation: 97.9 },
  { date: "Sat", completeness: 98.5, accuracy: 99.1, validation: 97.6 },
  { date: "Sun", completeness: 98.7, accuracy: 99.2, validation: 97.5 },
]

export function DataQualityChart() {
  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold mb-4">Data Quality Metrics (7 Days)</h3>
      <ResponsiveContainer width="100%" height={350}>
        <LineChart data={data}>
          <XAxis dataKey="date" stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} />
          <YAxis
            stroke="hsl(var(--muted-foreground))"
            fontSize={12}
            tickLine={false}
            domain={[95, 100]}
            tickFormatter={(value) => `${value}%`}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "hsl(var(--card))",
              border: "1px solid hsl(var(--border))",
              borderRadius: "var(--radius)",
            }}
            labelStyle={{ color: "hsl(var(--foreground))" }}
            formatter={(value: number) => `${value.toFixed(1)}%`}
          />
          <Legend />
          <Line
            type="monotone"
            dataKey="completeness"
            stroke="hsl(var(--primary))"
            strokeWidth={2}
            dot={false}
            name="Completeness"
          />
          <Line
            type="monotone"
            dataKey="accuracy"
            stroke="hsl(var(--accent))"
            strokeWidth={2}
            dot={false}
            name="Accuracy"
          />
          <Line
            type="monotone"
            dataKey="validation"
            stroke="hsl(var(--success))"
            strokeWidth={2}
            dot={false}
            name="Validation"
          />
        </LineChart>
      </ResponsiveContainer>
    </Card>
  )
}
