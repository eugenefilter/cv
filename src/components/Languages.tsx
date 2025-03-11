import { useDataContext } from "../DataContext";
import Block from "./basic-components/Block";

export default function Languages() {
  const { languageItems } = useDataContext();

  const listItems = languageItems.languages.items.map(item => (
    <li className="uppercase" key={item}>{item}</li>
  ));

  return (
    <Block title={languageItems.languages.title}>
      <ul className="flex flex-row flex-wrap gap-10 list-disc ml-8">{listItems}</ul>
    </Block>
  )
}
