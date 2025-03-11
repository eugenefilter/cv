
import { ReactNode } from 'react';
import { cn } from "../../utils/cn";

interface DividerProps {
  children: ReactNode;
  className?: string;
}

export default function Divider({ children, className }: DividerProps) {
  return (
    <div className={cn('border-l-2 md:border-r-2 md:border-l-0 border-black-50 py-5 pl-5 md:pl-0 relative divider', className)}>
      {children}
    </div>
  );
}