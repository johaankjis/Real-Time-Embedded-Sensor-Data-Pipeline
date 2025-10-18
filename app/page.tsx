import { DashboardNav } from "@/components/dashboard-nav"
import { DashboardOverview } from "@/components/dashboard-overview"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <DashboardNav />
      <main className="flex-1">
        <DashboardOverview />
      </main>
    </div>
  )
}
