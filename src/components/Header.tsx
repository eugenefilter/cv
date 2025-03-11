import Avatar from "./Avatar";
import Contact from "./Contact";
import LanguageSwitcher from "./LanguageSwitch";
import Title from "./Title";

export default function Header() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
      <div className="bg-black-900">
        <LanguageSwitcher />
        <Avatar />
      </div>
      <Title className="p-4 md:p-8" />
      <Contact className="p-4 md:p-8" />
    </div>
  );
}