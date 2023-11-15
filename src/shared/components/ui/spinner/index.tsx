import * as React from 'react';

import { cn } from '@/shared/lib/utils.ts';

import './styles.css';

export interface SpinnerProps extends React.SVGAttributes<SVGSVGElement> {}

const Spinner = React.forwardRef<SVGSVGElement, SpinnerProps>(({ className, ...props }, ref) => {
  return (
    <svg className={cn('spinner relative w-5', className)} viewBox="0 0 50 50" ref={ref} {...props}>
      <circle className="path" stroke="currentColor" cx="25" cy="25" r="20" fill="none" strokeWidth="5" />
    </svg>
  );
});
Spinner.displayName = 'Spinner';

export { Spinner };
