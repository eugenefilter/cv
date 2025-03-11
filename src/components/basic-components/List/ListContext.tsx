import { createContext, useContext } from "react";

interface ListContextProps { }

const ListContext = createContext<ListContextProps | null>(null);

export const useListContext = () => {
  const context = useContext(ListContext);
  if (!context) {
    throw new Error("useListContext must be used within a ListProvider");
  }
  return context;
};

export default ListContext;