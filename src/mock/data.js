import { nanoid } from 'nanoid';

//HEADER DATA
export const headerData = {
  logo:{
    logo_title:'MyLogo',
    img_link: '',
    img_alt: '',
    location: '#'
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
  title: 'My portfolio Website', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'My Website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'MarLMazo',
  subtitle: 'A Junior Web Developer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: 'I am a junior web developer who is currently finishing my studies at Humber College. I \'m passionate about coding, I really enjoy re-creating online web technology projects. It\'s really fun to watch how this kind of stuff helps business and people make life easier.',
  paragraphTwo: 'Marl finds coding is fun by building and creating solutions to problems. He loves the challenges he faces when solving a solution, and is open to a different approach.',
  paragraphThree: '',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Soundly',
    info: 'A music web application where users can listen to the list of music. A user can also create an account and log in so that he/she can create a playlist where he/she can listen to.',
    info2: 'This project is one of my biggest achievements in web development as it was a music web application and I was the one who makes sure that this project works as I was assigned to do the music functionality.',
    technologies: ['PHP', 'JQuery', 'JavaScript', 'CSS', 'HTML'],
    url: 'http://soundly.mdmazo.com/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'ElecShop',
    info: 'An E-commerce website using WordPress and WooCommerce.',
    info2: 'Created Child Themes to customize the look of the pages. Added also login page and register page and customizing it using the CSS styling.',
    technologies: ['WordPress', 'WooCommerce', 'JQuery', ,'JavaScript','CSS', 'HTML'],
    url: 'http://wordpress-ecommerce.mdmazo.com/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Game Project',
    info: 'A website mini-game where the user should click the monsters randomly creating chaos so that he/she can maintain peace in the village. The Page focus mainly on CSS3 animation to showcase my ability in doing CSS3 animation.',
    info2: 'The pure CSS animation Project. I worked on this to create a CSS animation game. I only use JavaScript in order to move some elements randomly and keep track of the scores of the monster he/she clicked. This is pure CSS animation.',
    technologies: ['HTML', 'CSS3','JavaScript'],
    url: 'http://cssanimation.mdmazo.com/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Game Project',
    info: 'A website mini-game where the user should click the monsters randomly creating chaos so that he/she can maintain peace in the village. The Page focus mainly on CSS3 animation to showcase my ability in doing CSS3 animation.',
    info2: 'The pure CSS animation Project. I worked on this to create a CSS animation game. I only use JavaScript in order to move some elements randomly and keep track of the scores of the monster he/she clicked. This is pure CSS animation.',
    technologies: ['HTML', 'CSS3','JavaScript'],
    url: 'http://cssanimation.mdmazo.com/',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Would you want to know more about me or comment on some of my projects?',
  btn: '',
  email: 'me@mdmazo.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'codepen',
      url: 'https://codepen.io/minimizer00',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/marldohn/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/MarLMazo',
    },
  ],
};
