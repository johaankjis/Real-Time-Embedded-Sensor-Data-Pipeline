"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { SystemStatusCard } from "@/components/system-status-card"
import { DeploymentTimeline } from "@/components/deployment-timeline"
import { PipelineStatus } from "@/components/pipeline-status"
import { EnvironmentHealth } from "@/components/environment-health"
import { RefreshCw, Play } from "lucide-react"
import { useState } from "react"

export function DeploymentsMonitor() {
  const [isRefreshing, setIsRefreshing] = useState(false)

  const handleRefresh = () => {
    setIsRefreshing(true)
    setTimeout(() => setIsRefreshing(false), 500)
  }

  return (
    <div className="container py-6 px-4 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Deployments & CI/CD</h1>
          <p className="text-muted-foreground mt-1">Monitor system status and deployment pipelines</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" onClick={handleRefresh} disabled={isRefreshing}>
            <RefreshCw className={`h-4 w-4 mr-2 ${isRefreshing ? "animate-spin" : ""}`} />
            Refresh
          </Button>
          <Button size="sm">
            <Play className="h-4 w-4 mr-2" />
            Trigger Deploy
          </Button>
        </div>
      </div>

      {/* System Status Overview */}
      <div className="grid gap-4 md:grid-cols-3">
        <SystemStatusCard
          title="Production"
          status="healthy"
          uptime="99.98%"
          lastDeploy="2 hours ago"
          version="v2.4.1"
        />
        <SystemStatusCard
          title="Staging"
          status="healthy"
          uptime="99.95%"
          lastDeploy="30 min ago"
          version="v2.5.0-rc1"
        />
        <SystemStatusCard
          title="Development"
          status="deploying"
          uptime="99.92%"
          lastDeploy="deploying..."
          version="v2.5.0-rc2"
        />
      </div>

      {/* Environment Health */}
      <EnvironmentHealth />

      {/* Pipeline Status */}
      <div className="grid gap-4 md:grid-cols-2">
        <PipelineStatus
          name="sensor-pipeline-api"
          branch="main"
          status="success"
          duration="4m 32s"
          commit="feat: optimize query performance"
          author="John Doe"
        />
        <PipelineStatus
          name="sensor-dashboard"
          branch="develop"
          status="running"
          duration="2m 18s"
          commit="fix: update sensor card styling"
          author="Jane Smith"
        />
      </div>

      {/* Deployment Timeline */}
      <DeploymentTimeline />

      {/* Quick Stats */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card className="p-6">
          <div className="text-sm text-muted-foreground mb-1">Total Deployments</div>
          <div className="text-2xl font-bold">247</div>
          <div className="text-xs text-muted-foreground mt-1">Last 30 days</div>
        </Card>
        <Card className="p-6">
          <div className="text-sm text-muted-foreground mb-1">Success Rate</div>
          <div className="text-2xl font-bold">98.4%</div>
          <div className="text-xs text-success mt-1">↑ 2.1% from last month</div>
        </Card>
        <Card className="p-6">
          <div className="text-sm text-muted-foreground mb-1">Avg Deploy Time</div>
          <div className="text-2xl font-bold">4m 18s</div>
          <div className="text-xs text-success mt-1">↓ 32s faster</div>
        </Card>
        <Card className="p-6">
          <div className="text-sm text-muted-foreground mb-1">Failed Deploys</div>
          <div className="text-2xl font-bold">4</div>
          <div className="text-xs text-muted-foreground mt-1">Last 30 days</div>
        </Card>
      </div>
    </div>
  )
}
