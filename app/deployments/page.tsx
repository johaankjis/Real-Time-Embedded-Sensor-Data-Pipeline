import { DeploymentsMonitor } from "@/components/deployments-monitor"

export default function DeploymentsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <DeploymentsMonitor />
      </main>
    </div>
  )
}
