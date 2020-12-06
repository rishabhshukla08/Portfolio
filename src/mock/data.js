import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Rishabh | Developer', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: 'Welcome to my website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello, my name is ',
  name: 'Rishabh Shukla',
  subtitle: "I'm an aspiring Web Developer.",
  cta: 'Know more',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.png',
  paragraphOne: 'Hello my name is Rishabh Shukla',
  paragraphTwo:
    'I am pursuing my final year B.Tech in Computer Science and Engineering from IMS ENGINEERING COLLEGE, Ghaziabad',
  paragraphThree:
    'I have deep curiosity for learning new technologies and solving real-world problems, currently I am looking for opportunities either Full-time or Intern.',
  resume: 'https://drive.google.com/file/d/1uMtM6mMqwdCxzbntI46INcUfBITXlul7/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'MusicPlayer.png',
    title: 'MUSIC PLAYER',
    info:
      'A Music Player app using JavaScript which has functionalities like artist name, track name, total song duration, play-pause button, next and previous song button.',
    info2: '',
    url: 'https://rishabhshukla08.github.io/MusicPlayer/',
    repo: 'https://github.com/rishabhshukla08/MusicPlayer', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'VideoPlayer.png',
    title: 'VIDEO PLAYER',
    info:
      'Created my own custom video player using JavaScript in which users can control the functionality using custom UI.It has all the functionalities of a typical video player like speed-up, audio adjustment, and many more.',
    info2: '',
    url: 'https://rishabhshukla08.github.io/VideoPlayer/',
    repo: 'https://github.com/rishabhshukla08/VideoPlayer', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'PongGame.png',
    title: 'PONG GAME',
    info:
      'It is a clone of the classic PONG game using HTML, CSS, and JavaScript.It is a two-person game with smooth animation.',
    info2: '',
    url: 'https://rishabhshukla08.github.io/PongGame/',
    repo: 'https://github.com/rishabhshukla08/PongGame', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'QuoteGenerator.png',
    title: 'QUOTE GENERATOR',
    info:
      'This app makes an asynchronous fetch request to a REST API to get Quotes and displayed them in the Browser. Quotes can even be shared on Twitter using the Share Icon.This app is build using JavaScript',
    info2: '',
    url: 'https://rishabhshukla08.github.io/QuoteGenerator/',
    repo: 'https://github.com/rishabhshukla08/QuoteGenerator', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Calculator.png',
    title: 'CALCULATOR',
    info:
      'It is a basic calculator which I made using HTML, CSS and JavaScript.It can perform basic math calculations like addition, subtraction, multiplication, division etc.',
    info2: '',
    url: 'https://rishabhshukla08.github.io/Calculator/',
    repo: 'https://github.com/rishabhshukla08/Calculator', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'PaintClone.png',
    title: 'MS-PAINT CLONE',
    info: 'I have used Canvas HTML element for creating a basic version of MS-Paint. ',
    info2: '',
    url: 'https://rishabhshukla08.github.io/PaintClone/',
    repo: 'https://github.com/rishabhshukla08/PaintClone', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Do you have any queries or any suggestion?',
  btn: '',
  email: 'rishabh.story@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/Rishabh3141',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/rishabh-shukla-469608119/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/rishabhshukla08',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
