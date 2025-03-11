import { ReactNode, ComponentPropsWithRef } from "react";
// import ListContext from "./ListContext";
import ListItem from './ListItem';

interface ListProps extends ComponentPropsWithRef<'ul'> {
  children: ReactNode;
}

const ListComponent = ({ className, children }: ListProps) => {
  return (
    // <ListContext.Provider value={{}}>
    <ul className={className}>
      {children}
    </ul>
    // </ListContext.Provider>
  );
}

const List = Object.assign(ListComponent, {
  Item: ListItem
});

export default List;