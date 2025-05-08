
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface StatCardProps {
  title: string;
  value: string | number;
  description?: string;
  icon?: React.ReactNode;
  change?: number;
  className?: string;
}

const formatValue = (value: string | number): string => {
  if (typeof value === 'number') {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(value);
  }
  return value.toString();
};

const StatCard = ({ 
  title, 
  value, 
  description, 
  icon, 
  change,
  className 
}: StatCardProps) => {
  return (
    <Card className={cn("overflow-hidden", className)}>
      <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {icon && <div className="w-4 h-4 text-muted-foreground">{icon}</div>}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{formatValue(value)}</div>
        {description && (
          <p className="text-xs text-muted-foreground mt-1">
            {description}
          </p>
        )}
        {change !== undefined && (
          <div className={cn(
            "text-xs font-medium mt-2",
            change > 0 ? "text-success" : "text-destructive"
          )}>
            {change > 0 ? "+" : ""}{change}% desde o mês anterior
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default StatCard;
