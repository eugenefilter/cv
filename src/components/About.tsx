import { useDataContext } from "../DataContext";
import Block from "./basic-components/Block";

export default function About() {
  const { languageItems } = useDataContext();

  return (
    <Block title={languageItems.about.title}>
      <>
        {languageItems.about.text}
      </>
    </Block>
  )
}
