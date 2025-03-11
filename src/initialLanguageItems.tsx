import { LanguageItems } from './interface';

const initialLanguageItems: LanguageItems = {
  about: { title: 'About me', text: '' },
  links: { title: 'Website & Social links', links: [] },
  languages: { title: 'languages', items: [] },
  additional: { title: 'Additional Details', text: '' },
  workExperience: { title: 'work experience', items: [] },
  education: { title: 'education', items: [] },
  skills: { title: 'skills', items: [] },
  hobbies: { title: 'hobbies', items: [] },
  contacts: { location: '', email: '', phone: '', whatsapp: '', telegram: '' },
}

export default initialLanguageItems;