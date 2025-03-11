import { ReactNode, ComponentPropsWithRef } from 'react';
import ListItemInfo from './ListItemInfo';
import ListItemOrganization from './ListItemOrganization';
import ListItemCity from './ListItemCity';
import ListItemYears from './ListItemYears';
import ListItemContext from './ListItemContext';

interface ListItemProps extends ComponentPropsWithRef<'li'> {
  children: ReactNode;
}

function ListItemComponent({ children }: ListItemProps) {
  return (
    <li className="grid grid-cols-1 md:grid-cols-3 md:gap-5">
      {children}
    </li>
  );
}

const ListItem = Object.assign(ListItemComponent, {
  Info: ListItemInfo,
  Organization: ListItemOrganization,
  City: ListItemCity,
  Years: ListItemYears,
  Description: ListItemContext
});

export default ListItem;