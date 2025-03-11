import { useDataContext } from "../DataContext";
import Block from "./basic-components/Block";

export default function Hobbies() {
  const { languageItems } = useDataContext();

  const itemsList = languageItems.hobbies.items.map(item => (
    <li className="uppercase after:content-['*'] after:pl-5 m-5 mr-0" key={item}>{item}</li>
  ));

  return (
    <Block title={languageItems.hobbies.title} titleBold={true}>
      <ul className="flex flex-row flex-wrap justify-center">
        {itemsList}
      </ul>
    </Block>
  );
}