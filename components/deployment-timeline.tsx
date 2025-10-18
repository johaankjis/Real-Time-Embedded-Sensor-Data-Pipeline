"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, XCircle, GitCommit, Clock } from "lucide-react"
import { cn } from "@/lib/utils"

const deployments = [
  {
    id: 1,
    environment: "Production",
    version: "v2.4.1",
    status: "success",
    time: "2 hours ago",
    duration: "4m 32s",
    commit: "feat: optimize query performance",
    author: "John Doe",
  },
  {
    id: 2,
    environment: "Staging",
    version: "v2.5.0-rc1",
    status: "success",
    time: "30 min ago",
    duration: "3m 45s",
    commit: "feat: add new sensor types",
    author: "Jane Smith",
  },
  {
    id: 3,
    environment: "Production",
    version: "v2.4.0",
    status: "success",
    time: "1 day ago",
    duration: "5m 12s",
    commit: "fix: resolve latency issues",
    author: "Mike Johnson",
  },
  {
    id: 4,
    environment: "Staging",
    version: "v2.4.0-rc2",
    status: "failed",
    time: "2 days ago",
    duration: "2m 08s",
    commit: "test: update integration tests",
    author: "Sarah Williams",
  },
  {
    id: 5,
    environment: "Production",
    version: "v2.3.9",
    status: "success",
    time: "3 days ago",
    duration: "4m 55s",
    commit: "chore: update dependencies",
    author: "John Doe",
  },
]

export function DeploymentTimeline() {
  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold mb-4">Recent Deployments</h3>
      <div className="space-y-4">
        {deployments.map((deployment, index) => (
          <div key={deployment.id} className="flex items-start gap-4">
            {/* Timeline indicator */}
            <div className="flex flex-col items-center">
              <div
                className={cn(
                  "flex h-8 w-8 items-center justify-center rounded-full border-2",
                  deployment.status === "success"
                    ? "bg-success/10 border-success/20"
                    : "bg-destructive/10 border-destructive/20",
                )}
              >
                {deployment.status === "success" ? (
                  <CheckCircle2 className="h-4 w-4 text-success" />
                ) : (
                  <XCircle className="h-4 w-4 text-destructive" />
                )}
              </div>
              {index < deployments.length - 1 && <div className="w-0.5 h-full bg-border mt-1" />}
            </div>

            {/* Deployment info */}
            <div className="flex-1 pb-4">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-semibold">{deployment.environment}</span>
                    <Badge variant="outline" className="text-xs font-mono">
                      {deployment.version}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-2 mt-1 text-sm text-muted-foreground">
                    <GitCommit className="h-3 w-3" />
                    <span className="truncate">{deployment.commit}</span>
                  </div>
                </div>
                <div className="text-xs text-muted-foreground text-right">
                  <div>{deployment.time}</div>
                  <div className="flex items-center gap-1 mt-1">
                    <Clock className="h-3 w-3" />
                    {deployment.duration}
                  </div>
                </div>
              </div>
              <div className="text-xs text-muted-foreground">Deployed by {deployment.author}</div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  )
}
