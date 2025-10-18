"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Bell, Database, Shield, Zap } from "lucide-react"

export function SettingsPage() {
  return (
    <div className="container py-6 px-4 space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
        <p className="text-muted-foreground mt-1">Manage your dashboard preferences and configurations</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Notifications */}
        <Card className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-md bg-primary/10">
              <Bell className="h-5 w-5 text-primary" />
            </div>
            <h3 className="text-lg font-semibold">Notifications</h3>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="email-alerts">Email Alerts</Label>
                <p className="text-xs text-muted-foreground">Receive email notifications for critical events</p>
              </div>
              <Switch id="email-alerts" defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="slack-alerts">Slack Integration</Label>
                <p className="text-xs text-muted-foreground">Send alerts to Slack channels</p>
              </div>
              <Switch id="slack-alerts" />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="sms-alerts">SMS Alerts</Label>
                <p className="text-xs text-muted-foreground">Critical alerts via SMS</p>
              </div>
              <Switch id="sms-alerts" />
            </div>
          </div>
        </Card>

        {/* Data Retention */}
        <Card className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-md bg-primary/10">
              <Database className="h-5 w-5 text-primary" />
            </div>
            <h3 className="text-lg font-semibold">Data Retention</h3>
          </div>
          <div className="space-y-4">
            <div>
              <Label htmlFor="retention-period">Retention Period (days)</Label>
              <Input id="retention-period" type="number" defaultValue="90" className="mt-2" />
              <p className="text-xs text-muted-foreground mt-1">How long to keep sensor data</p>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="auto-archive">Auto Archive</Label>
                <p className="text-xs text-muted-foreground">Automatically archive old data</p>
              </div>
              <Switch id="auto-archive" defaultChecked />
            </div>
          </div>
        </Card>

        {/* Performance */}
        <Card className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-md bg-primary/10">
              <Zap className="h-5 w-5 text-primary" />
            </div>
            <h3 className="text-lg font-semibold">Performance</h3>
          </div>
          <div className="space-y-4">
            <div>
              <Label htmlFor="refresh-rate">Refresh Rate (seconds)</Label>
              <Input id="refresh-rate" type="number" defaultValue="3" className="mt-2" />
              <p className="text-xs text-muted-foreground mt-1">How often to update real-time data</p>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="cache-enabled">Enable Caching</Label>
                <p className="text-xs text-muted-foreground">Cache data for faster loading</p>
              </div>
              <Switch id="cache-enabled" defaultChecked />
            </div>
          </div>
        </Card>

        {/* Security */}
        <Card className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-md bg-primary/10">
              <Shield className="h-5 w-5 text-primary" />
            </div>
            <h3 className="text-lg font-semibold">Security</h3>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="two-factor">Two-Factor Auth</Label>
                <p className="text-xs text-muted-foreground">Require 2FA for login</p>
              </div>
              <Switch id="two-factor" defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="api-access">API Access</Label>
                <p className="text-xs text-muted-foreground">Enable API access for integrations</p>
              </div>
              <Switch id="api-access" defaultChecked />
            </div>
            <Button variant="outline" className="w-full bg-transparent">
              Regenerate API Key
            </Button>
          </div>
        </Card>
      </div>

      <div className="flex justify-end gap-2">
        <Button variant="outline">Reset to Defaults</Button>
        <Button>Save Changes</Button>
      </div>
    </div>
  )
}
