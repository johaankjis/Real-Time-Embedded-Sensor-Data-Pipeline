"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Activity, BarChart3, Database, GitBranch, Settings, Table } from "lucide-react"
import { cn } from "@/lib/utils"

const navItems = [
  { name: "Overview", href: "/", icon: Activity },
  { name: "Sensors", href: "/sensors", icon: Database },
  { name: "Analytics", href: "/analytics", icon: BarChart3 },
  { name: "Deployments", href: "/deployments", icon: GitBranch },
  { name: "Data", href: "/data", icon: Table },
  { name: "Settings", href: "/settings", icon: Settings },
]

export function DashboardNav() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/60">
      <div className="container flex h-16 items-center px-4">
        <div className="flex items-center gap-2 mr-8">
          <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary">
            <Activity className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="text-lg font-semibold">Sensor Pipeline</span>
        </div>
        <nav className="flex items-center gap-1 flex-1">
          {navItems.map((item) => {
            const Icon = item.icon
            const isActive = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-2 px-3 py-2 text-sm font-medium rounded-md transition-colors",
                  isActive
                    ? "bg-secondary text-foreground"
                    : "text-muted-foreground hover:bg-secondary/50 hover:text-foreground",
                )}
              >
                <Icon className="h-4 w-4" />
                {item.name}
              </Link>
            )
          })}
        </nav>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-success/10 border border-success/20">
            <div className="h-2 w-2 rounded-full bg-success animate-pulse" />
            <span className="text-xs font-medium text-success">All Systems Operational</span>
          </div>
        </div>
      </div>
    </header>
  )
}
