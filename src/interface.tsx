interface Title {
  title: string;
}

export interface Item extends Title {
  text: string;
}

export interface Link extends Title {
  link: string;
  linkName: string;
}

export interface Links extends Title {
  links: Link[];
}

export interface Skill {
  title: string,
  since: number
}

export interface Skills extends Title {
  title: string,
  items: Skill[]
}

export interface Array extends Title {
  items: [];
}

export interface Contacts {
  location: string;
  email: string;
  phone: string;
  whatsapp: string;
  telegram: string;
}

export interface List {
  organization: string;
  city: string;
  years: string;
  description: string;
}

export interface ListItems extends Title {
  items: List[];
}

export interface LanguageItems {
  about: Item;
  links: Links;
  languages: Array;
  additional: Item;
  workExperience: ListItems;
  education: ListItems;
  skills: Skills;
  hobbies: Array;
  contacts: Contacts;
}

export interface ExperienceScale {
  year: number,
  month: number,
  totalMonth: number
}

export interface DataStructure {
  en: LanguageItems;
  ru: LanguageItems;
}