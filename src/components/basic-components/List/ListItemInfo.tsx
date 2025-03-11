import { ReactNode, ComponentPropsWithRef } from 'react';
import Divider from '../Divider';

interface ListItemInfoProps extends ComponentPropsWithRef<'div'> {
  children: ReactNode;
}

export default function ListItemInfo({ children }: ListItemInfoProps) {
  return (
    <Divider className="col-span-1">
      {children}
    </Divider>
  );
}
