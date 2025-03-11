import { ReactNode, ComponentPropsWithRef } from 'react';

interface ListItemYearsProps extends ComponentPropsWithRef<'div'> {
  children: ReactNode;
}

export default function ListItemYears({ className, children }: ListItemYearsProps) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}
