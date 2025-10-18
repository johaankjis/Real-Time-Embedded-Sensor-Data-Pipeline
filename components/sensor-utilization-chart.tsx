"use client"

import { Card } from "@/components/ui/card"
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip, Legend } from "recharts"

const data = [
  { name: "Temperature", value: 6, color: "hsl(var(--chart-1))" },
  { name: "Pressure", value: 5, color: "hsl(var(--chart-2))" },
  { name: "Humidity", value: 5, color: "hsl(var(--chart-3))" },
  { name: "Vibration", value: 4, color: "hsl(var(--chart-4))" },
  { name: "Flow", value: 4, color: "hsl(var(--chart-5))" },
]

export function SensorUtilizationChart() {
  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold mb-4">Sensor Type Distribution</h3>
      <ResponsiveContainer width="100%" height={350}>
        <PieChart>
          <Pie data={data} cx="50%" cy="50%" labelLine={false} outerRadius={120} fill="#8884d8" dataKey="value">
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip
            contentStyle={{
              backgroundColor: "hsl(var(--card))",
              border: "1px solid hsl(var(--border))",
              borderRadius: "var(--radius)",
            }}
          />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </Card>
  )
}
