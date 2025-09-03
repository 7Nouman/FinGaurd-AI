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


