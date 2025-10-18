import { SensorDataTable } from "@/components/sensor-data-table"

export default function DataPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <SensorDataTable />
      </main>
    </div>
  )
}
