import { useDataContext } from "../DataContext";
import Block from "./basic-components/Block";
import List from "./basic-components/List/List";

export default function Experience() {
  const { languageItems } = useDataContext();

  const itemsList = languageItems.workExperience.items.map(item => (
    <List.Item key={item.organization}>
      <List.Item.Info>
        <List.Item.Organization>{item.organization}</List.Item.Organization>
        <List.Item.City>{item.city}</List.Item.City>
        <List.Item.Years>{item.years}</List.Item.Years>
      </List.Item.Info>
      <List.Item.Description>{item.description}</List.Item.Description>
    </List.Item>
  ));

  return (
    <Block title={languageItems.workExperience.title} titleBold={true}>
      <List>
        {itemsList}
      </List>
    </Block>);
}