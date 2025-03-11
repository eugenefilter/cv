import { ReactNode, ComponentPropsWithRef } from 'react';
import { cn } from '../../../utils/cn';

interface ListItemOrganizationProps extends ComponentPropsWithRef<'div'> {
  children: ReactNode;
}

export default function ListItemOrganization({ className, children }: ListItemOrganizationProps) {
  return (
    <div className={cn('font-bold', className)}>
      {children}
    </div>
  );
}
