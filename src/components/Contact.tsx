import LocationSvg from "./basic-components/svg/LocationSvg";
import EmailSvg from "./basic-components/svg/EmailSvg";
import PhoneSvg from "./basic-components/svg/PhoneSvg";
import WhatsappSvg from "./basic-components/svg/WhatsappSvg";
import TelegramSvg from "./basic-components/svg/TelegramSvg";
import { useDataContext } from "../DataContext";

export default function Contact(props: { className?: string; }) {
  const { languageItems } = useDataContext();

  return (
    <div className={props.className}>
      <ul className="flex flex-col items-start md:items-end">
        <li className="inline-flex items-center">
          <LocationSvg />
          <span className="ml-2">{languageItems.contacts.location}</span>
        </li>
        <li className="inline-flex items-center">
          <EmailSvg />
          <a href={`mailto:${languageItems.contacts.email}`} className="ml-2" target="_blank">
            {languageItems.contacts.email}
          </a>
        </li>
        <li className="inline-flex items-center">
          <PhoneSvg />
          <a href={`tel:${languageItems.contacts.phone.replace(/[()\- ]/g, '')}`} className="ml-2" target="_blank">
            {languageItems.contacts.phone}
          </a>
        </li>
        <li className="inline-flex items-center">
          <WhatsappSvg />
          <a href={`https://wa.me/${languageItems.contacts.whatsapp.replace(/[()\- ]/g, '')}`} className="ml-2" target="_blank">
            {languageItems.contacts.whatsapp}
          </a>
        </li>
        <li className="inline-flex items-center">
          <TelegramSvg />
          <a href={`https://t.me/${languageItems.contacts.telegram.replace(/[()\- ]/g, '')}`} className="ml-2" target="_blank">
            {languageItems.contacts.telegram}
          </a>
        </li>
      </ul>
    </div>
  );
}
