import { useDataContext } from "../DataContext";
import Block from "./basic-components/Block";

export default function Links() {
  const { languageItems } = useDataContext();

  const listItems = languageItems.links.links.map(item => (
    <li key={item.link}>
      <h3>{item.title}:</h3>
      <a href={item.link}
        title="Linkedin link"
        target="_blank">
        {item.linkName}
      </a>
    </li>
  ));

  return (
    <Block title={languageItems.links.title}>
      <ul>{listItems}</ul>
    </Block>
  )
}
