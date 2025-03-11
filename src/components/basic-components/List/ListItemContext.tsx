import { ReactNode, ComponentPropsWithRef } from 'react';

interface ListItemContextProps extends ComponentPropsWithRef<'div'> {
  children: ReactNode;
}

export default function ListItemContext({ children }: ListItemContextProps) {
  return (
    <div className="col-span-2 border-l-2 md:border-l-0 pl-5 md:pl-0">
      {children}
    </div>
  );
}
