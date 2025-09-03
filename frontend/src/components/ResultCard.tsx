import { Badge } from './ui/badge'
import { Card, CardContent } from './ui/card'
import { AlertTriangle, CheckCircle, Shield } from 'lucide-react'
import * as React from 'react'

export type RiskLevel = 'Low' | 'Medium' | 'High'

export interface ScanResult {
  risk: RiskLevel
  reason: string
}

interface ResultCardProps {
  result: ScanResult
}

export function ResultCard({ result }: ResultCardProps) {
  const Icon =
    result.risk === 'Low' ? CheckCircle : result.risk === 'Medium' ? AlertTriangle : Shield

  const variant =
    result.risk === 'Low' ? 'risk-low' : result.risk === 'Medium' ? 'risk-medium' : 'risk-high'

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-300">
      <Card className="shadow-[var(--shadow-card)]">
        <CardContent className="space-y-4">
          <div className="flex items-center gap-2 pt-6">
            <Badge variant={variant as any} className="bg-[length:200%_200%]">
              <span className="inline-flex items-center gap-1">
                <Icon className="h-4 w-4" />
                {result.risk} Risk
              </span>
            </Badge>
          </div>

          <div className="rounded-lg border border-border/50 bg-muted/40 p-4 text-sm text-muted-foreground">
            {result.reason}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

