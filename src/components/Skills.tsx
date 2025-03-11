import { useDataContext } from "../DataContext";
import { TimeCalculator } from "../utils/cn";
import Block from "./basic-components/Block";
import Progerss from "./basic-components/Progres";

const calc = new TimeCalculator();

export default function Skills() {
  const { languageItems } = useDataContext();

  // Найдем максимальное значение totalMonth
  const maxTotalMonth = languageItems.skills.items.reduce((max, item) => {
    const { totalMonth } = calc.calc(item.since);
    return totalMonth > max ? totalMonth : max;
  }, 0);

  const listItems = languageItems.skills.items.sort((a, b) => a.since - b.since).map(item => {
    const { totalMonth } = calc.calc(item.since);

    return (
      <li className="w-full md:w-2/5" key={item.title}>
        <div className="uppercase">{item.title}</div>
        <Progerss value={totalMonth} max={maxTotalMonth}></Progerss>
      </li>
    );
  });

  return (
    <Block title={languageItems.skills.title} titleBold={true}>
      <ul className="flex flex-col md:flex-row flex-wrap gap-1 justify-between w-full">
        {listItems}
      </ul>
    </Block>);
}