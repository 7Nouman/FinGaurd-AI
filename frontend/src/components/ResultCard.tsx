<<<<<<< HEAD
import React from 'react';
import { Shield, CheckCircle, AlertTriangle } from 'lucide-react';
import { Card, CardContent, CardHeader } from './ui/Card';
import { Badge } from './ui/Badge';

type Result = {
  risk: 'Low' | 'Medium' | 'High';
  reason: string;
};

type Props = {
  result: Result | null;
};

export const ResultCard: React.FC<Props> = ({ result }) => {
  if (!result) return null;

  const badge =
    result.risk === 'High'
      ? { variant: 'high' as const, icon: <Shield size={16} /> }
      : result.risk === 'Medium'
      ? { variant: 'medium' as const, icon: <AlertTriangle size={16} /> }
      : { variant: 'low' as const, icon: <CheckCircle size={16} /> };

  return (
    <Card className="animate-[fadeInUp_300ms_ease]">
      <CardHeader className="flex items-center justify-between">
        <h3 className="text-xl font-semibold">Risk Assessment</h3>
        <Badge variant={badge.variant}>
          <span className="mr-1">{badge.icon}</span>
          {result.risk} Risk
        </Badge>
      </CardHeader>
      <CardContent>
        <div className="bg-secondary/60 border border-border/50 rounded-xl p-4 text-foreground/90">
          {result.reason}
        </div>
      </CardContent>
    </Card>
  );
};

export default ResultCard;
=======
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
>>>>>>> fc8eeb8 (P1)


