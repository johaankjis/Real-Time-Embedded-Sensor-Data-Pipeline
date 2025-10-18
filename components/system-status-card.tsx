"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, AlertCircle, Loader2 } from "lucide-react"
import { cn } from "@/lib/utils"

interface SystemStatusCardProps {
  title: string
  status: "healthy" | "warning" | "deploying" | "error"
  uptime: string
  lastDeploy: string
  version: string
}

const statusConfig = {
  healthy: {
    icon: CheckCircle2,
    color: "text-success",
    bgColor: "bg-success/10",
    borderColor: "border-success/20",
    label: "Healthy",
  },
  warning: {
    icon: AlertCircle,
    color: "text-warning",
    bgColor: "bg-warning/10",
    borderColor: "border-warning/20",
    label: "Warning",
  },
  deploying: {
    icon: Loader2,
    color: "text-accent",
    bgColor: "bg-accent/10",
    borderColor: "border-accent/20",
    label: "Deploying",
  },
  error: {
    icon: AlertCircle,
    color: "text-destructive",
    bgColor: "bg-destructive/10",
    borderColor: "border-destructive/20",
    label: "Error",
  },
}

export function SystemStatusCard({ title, status, uptime, lastDeploy, version }: SystemStatusCardProps) {
  const config = statusConfig[status]
  const Icon = config.icon

  return (
    <Card className="p-6">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="font-semibold text-lg">{title}</h3>
          <p className="text-xs text-muted-foreground mt-0.5">Environment</p>
        </div>
        <Badge variant="outline" className={cn("text-xs", config.bgColor, config.color, config.borderColor)}>
          <Icon className={cn("h-3 w-3 mr-1", status === "deploying" && "animate-spin")} />
          {config.label}
        </Badge>
      </div>

      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Uptime</span>
          <span className="font-medium">{uptime}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Last Deploy</span>
          <span className="font-medium">{lastDeploy}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Version</span>
          <span className="font-mono text-xs">{version}</span>
        </div>
      </div>
    </Card>
  )
}
