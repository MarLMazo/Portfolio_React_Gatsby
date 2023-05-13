import { nanoid } from 'nanoid';

// HEADER DATA
export const headerData = {
  logo: {
    logo_title: 'MyLogo',
    img_link: 'main_logo.png',
    img_alt: 'Portfolio website logo',
    location: '#',
  },
  menus: [
    {
      title: 'About',
      location: 'about',
      samePage: true,
    },
    {
      title: 'Projects',
      location: 'projects',
      samePage: true,
    },
    {
      title: 'Contact',
      location: 'contact',
      samePage: true,
    },
  ],
};

// HEAD DATA
export const headData = {
  title: 'Portfolio Website created by Marl Dohn Mazo', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description:
    'Welcome to my Portfolio Website created using ReactJS and GatsbyJS by MarL Dohn Mazo', // e.g: Welcome to my website
  author: 'Marl Dohn Mazo',
  keywords: 'marl dohn mazo portfolio, portfolio reactjs gatsbyjs, marl portfolio',
};

// HERO DATA
export const heroData = {
  intro: '',
  name: 'MarL Mazo',
  subtitle: [
    'A Junior Web Developer',
    'Love Coding',
    'Focus on Learning',
    'Love to play games and watch anime',
  ],
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.JPEG',
  paragraphOne:
    "I am a junior web developer that graduated from Humber College with Web Development Program. I'm passionate about coding and I am interested in re-creating online web technology projects. It's really fun to watch how this kind of stuff helps businesses and people make life easier",
  paragraphTwo:
    'I find coding is fun by building and creating solutions to problems. I love the challenges I face when bugs and errors occur to my project, and I always open to a different/simplified approach to solving a problem.',
  paragraphThree: ' ',
  resume: '/resume.pdf', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'react-gallery.JPEG',
    title: 'React Gallery',
    info: 'An Image Gallery using React JS with Material UI. It has lazy loading and responsive to different mobile sizes.',
    info2:
      'I created this Project to learn more about Material UI. I fetch data on Lorem Picsum and create a simple gallery using their API. It has Lazy loading on images and a pagination for upto 10 pages.',
    technologies: ['ReactJS', 'Material-UI'],
    filter: ['all', 'frontend'],
    url: 'http://react-gallery.mdmazo.com/',
    repo: 'https://github.com/MarLMazo/react-image-gallery', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'soundly_main.JPEG',
    title: 'Soundly',
    info: 'A music web application where users can listen to the list of music. A user can also create an account and log in so that he/she can create a playlist where he/she can listen to.',
    info2:
      'This project is one of my biggest achievements in web development as it was a music web application and I was the one who makes sure that this project works as I was assigned to do the music functionality.',
    technologies: ['PHP', 'JQuery', 'JavaScript', 'CSS', 'HTML'],
    filter: ['all', 'fullstack'],
    url: 'http://soundly.mdmazo.com/',
    repo: 'https://github.com/MarLMazo/soundly', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'wordpress_ecommerce.JPEG',
    title: 'ElecShop',
    info: 'An E-commerce website using WordPress and WooCommerce.',
    info2:
      'Created Child Themes to customize the look of the pages. Added also login page and register page and customizing it using the CSS styling.',
    technologies: ['WordPress', 'WooCommerce', 'JQuery', 'JavaScript', 'CSS', 'HTML'],
    filter: ['all', 'wordpress'],
    url: 'http://wordpress-ecommerce.mdmazo.com/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'weather.JPEG',
    title: 'Weather Application',
    info: 'A simple Weather Application that uses OpenWeather API to gather real time weather data of a certain location',
    info2: 'Website is created using ReactJS and NodeJS ',
    technologies: ['ReactJS', 'NodeJS', 'OpenWeather API'],
    filter: ['all', 'frontend'],
    url: 'http://weather.mdmazo.com/',
    repo: 'https://github.com/MarLMazo/Weather_App', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Gameproject.JPEG',
    title: 'Game Project',
    info: 'A website mini-game where the user should click the monsters randomly creating chaos so that he/she can maintain peace in the village. The Page focus mainly on CSS3 animation to showcase my ability in doing CSS3 animation.',
    info2:
      'The pure CSS animation Project. I worked on this to create a CSS animation game. I only use JavaScript in order to move some elements randomly and keep track of the scores of the monster he/she clicked. This is pure CSS animation.',
    technologies: ['HTML', 'CSS3', 'JavaScript'],
    filter: ['all', 'frontend'],
    url: 'http://cssanimation.mdmazo.com/',
    repo: 'https://github.com/MarLMazo/CssGameAnimation', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'mern_ecommerce.JPEG',
    title: 'Rentrend',
    info: 'An e-commerce website where admin can add items on the website and buyers can buy clothes',
    info2:
      'Created User Login/registration features with implementing encryption on passwords and use of token for each login',
    technologies: ['MongoDB', 'Express', 'ReactJS', 'NodeJS'],
    filter: ['all', 'fullstack'],
    url: 'https://rentrend-marl-squirrel.herokuapp.com/',
    repo: 'https://github.com/MarLMazo/RenTrend_MERN', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'pineriver.JPEG',
    title: 'Pine River Institute',
    info: 'A Organization that focus on adolescent problems on youth together with their family.',
    info2:
      'Migrate old content to the new domain and update the design for admin and user. Customized themes and plugins to assure the website will have a better access for all users and interaction from the client and its users.',
    technologies: ['WordPress', 'PHP', 'JavaScript'],
    filter: ['all', 'cms'],
    url: 'https://pineriverinstitute.com/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'wedding.JPEG',
    title: 'Wedding Website',
    info: 'A wedding information website with RSVP for the client',
    info2: 'Create a interactive and modern design to promote the wedding venue of the client',
    technologies: ['WordPress', 'PHP', 'JavaScript', 'CSS'],
    filter: ['all', 'cms'],
    url: 'http://wedding.mdmazo.com/',
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
