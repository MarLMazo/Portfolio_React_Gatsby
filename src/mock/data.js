import { nanoid } from 'nanoid';

//HEADER DATA
export const headerData = {
  logo:{
    logo_title:'',
    img_link: '',
    img_alt: '',
    location: ''
  },
  menus:[
    {
      title:'About',
      location: 'about'
    },
    {
      title: 'Projects',
      location: 'projects'
    },
    {
      title: 'Blog',
      location: 'blog'
    },
    {
      title: 'Contact',
      location: 'contact'
    }
  ]
}

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: '',
  subtitle: '',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: '',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: '',
    title: '',
    info: '',
    info2: '',
    technologies: [''],
    url: '',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: '',
    title: '',
    info: '',
    info2: '',
    technologies: [''],
    url: '',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: '',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: '',
    },
    {
      id: nanoid(),
      name: 'github',
      url: '',
    },
  ],
};
