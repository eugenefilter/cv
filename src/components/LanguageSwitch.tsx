import { useDataContext } from "../DataContext";
import { cn } from "../utils/cn";
import { DataStructure } from "../interface"; 

export default function LanguageSwitcher() {
  const { setLanguage, languages, language } = useDataContext();

  const items = languages.length > 1 &&
    languages.map(function (lng) {
      const cl = cn(
        'cursor-pointer',
        { 'text-orange-500': lng === language },
        { 'text-white': lng !== language },
        'border-b-2',
        'border-black-900',
        'hover:border-dashed hover:border-orange-500'
      );

      return (
        <li
          key={lng}
          className={cl}
          onClick={() => setLanguage(lng as keyof DataStructure)}
        >
          {lng}
        </li>
      );
    });

  return (
    <ul className="flex flex-row gap-2 ml-2" >{items}</ul>
  );
}