import { SensorMonitoring } from "@/components/sensor-monitoring"

export default function SensorsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <SensorMonitoring />
      </main>
    </div>
  )
}
