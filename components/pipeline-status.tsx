"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, XCircle, Loader2, GitBranch, Clock, User } from "lucide-react"
import { cn } from "@/lib/utils"

interface PipelineStatusProps {
  name: string
  branch: string
  status: "success" | "failed" | "running" | "pending"
  duration: string
  commit: string
  author: string
}

const statusConfig = {
  success: {
    icon: CheckCircle2,
    color: "text-success",
    bgColor: "bg-success/10",
    borderColor: "border-success/20",
    label: "Success",
  },
  failed: {
    icon: XCircle,
    color: "text-destructive",
    bgColor: "bg-destructive/10",
    borderColor: "border-destructive/20",
    label: "Failed",
  },
  running: {
    icon: Loader2,
    color: "text-accent",
    bgColor: "bg-accent/10",
    borderColor: "border-accent/20",
    label: "Running",
  },
  pending: {
    icon: Clock,
    color: "text-muted-foreground",
    bgColor: "bg-muted/10",
    borderColor: "border-muted/20",
    label: "Pending",
  },
}

export function PipelineStatus({ name, branch, status, duration, commit, author }: PipelineStatusProps) {
  const config = statusConfig[status]
  const Icon = config.icon

  return (
    <Card className="p-6">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-lg truncate">{name}</h3>
          <div className="flex items-center gap-2 mt-1">
            <GitBranch className="h-3 w-3 text-muted-foreground" />
            <span className="text-xs text-muted-foreground">{branch}</span>
          </div>
        </div>
        <Badge variant="outline" className={cn("text-xs", config.bgColor, config.color, config.borderColor)}>
          <Icon className={cn("h-3 w-3 mr-1", status === "running" && "animate-spin")} />
          {config.label}
        </Badge>
      </div>

      <div className="space-y-3">
        <div className="text-sm">
          <div className="text-muted-foreground mb-1">Latest Commit</div>
          <div className="font-medium truncate">{commit}</div>
        </div>

        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-1.5 text-muted-foreground">
            <User className="h-3 w-3" />
            <span>{author}</span>
          </div>
          <div className="flex items-center gap-1.5 text-muted-foreground">
            <Clock className="h-3 w-3" />
            <span>{duration}</span>
          </div>
        </div>

        {/* Pipeline Stages */}
        <div className="flex items-center gap-1 pt-2">
          <div className="flex-1 h-1 bg-success rounded-full" title="Build" />
          <div className="flex-1 h-1 bg-success rounded-full" title="Test" />
          <div
            className={cn(
              "flex-1 h-1 rounded-full",
              status === "success" ? "bg-success" : status === "running" ? "bg-accent animate-pulse" : "bg-muted",
            )}
            title="Deploy"
          />
        </div>
      </div>
    </Card>
  )
}
