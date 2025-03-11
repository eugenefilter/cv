import { ReactNode, ComponentPropsWithRef } from 'react';

interface ListItemCityProps extends ComponentPropsWithRef<'div'> {
  children: ReactNode;
}

export default function ListItemCity({ className, children }: ListItemCityProps) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}
