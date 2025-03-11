import { useDataContext } from "../DataContext";
import Block from "./basic-components/Block";


export default function AdditionalDetails() {
  const { languageItems } = useDataContext();
  return (
    <Block title={languageItems.additional.title}>
      <>{languageItems.additional.text}</>
    </Block>
  )
}
