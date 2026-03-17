'use client';

import { Tooltip } from '@/components/ui/tooltip';
import { Info } from 'lucide-react';

interface ClientTooltipProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ClientTooltip({ open, onOpenChange }: ClientTooltipProps) {
  return (
    <Tooltip
      content="Be the conscious driver of your life, not just an effect of your environment."
      open={open}
      onOpenChange={onOpenChange}
      positioning={{ placement: 'top-right' }}
    >
      <Info size={16} style={{ cursor: 'pointer' }} onClick={() => onOpenChange(!open)} />
    </Tooltip>
  );
}
