module.exports = {
  siteTitle: "Paul Thomas",
  siteDescription: `Paul Thomas Portfolio Webite`,
  keyWords: ['gatsbyjs', 'react', 'curriculum'],
  authorName: 'Paul Thomas',
  twitterUsername: 'bigpaulthomas',
  githubUsername: 'lordpaulthomas',
  authorAvatar: '/images/avatar.jpeg',
  authorDescription: `I am a professional musician who has turned a love of music and learning into an obsession with Computer Science. I am hungry, motivated, and passionate about software engineering. <strong>HTML, CSS, Javascript, NodeJS, React</strong>`,
  skills: [
    {
      name: 'HTML',
      level: 95,
    },
    {
      name: 'CSS',
      level: 88,
    },
    {
      name: 'Javascript',
      level: 95,
    },
    {
      name: 'NodeJs',
      level: 85,
    },
    {
      name: 'React',
      level: 87,
    },
    {
      name: 'Git',
      level: 84,
    },
    {
      name: 'SQL',
      level: 83
    },
    {
      name: 'Mongodb',
      level: 84
    }
    /* more skills here */
  ],
  jobs: [
    /* more jobs here */
    {
      company: 'Trilogy Education / 2U',
      begin: {
        month: 'apr',
        year: '2020',
      },
      duration: null,
      occupation: 'Technical Mentor',
      description:
        'Tutoring online has sharpened my verbalization skills, my debugging skills, and my ability to solve problems with others',
    },
    {
      company: 'UC Berkeley Extension',
      begin: {
        month: 'sept',
        year: '2019',
      },
      duration: '3 mos',
      occupation: 'Full-Stack Web Development',
      description:
        'Learned Web Development with Javascript, JQuery, React, Handlebars, Mongodb, SQL, and Node',
    },
    {
      company: 'Laney College',
      begin: {
        month: 'feb',
        year: '2018',
      },
      duration: '2 yr',
      occupation: 'A.S. Degree in Computer Programming',
      description:
        'Studied Object Oriented Programming, Full-Stack Development and Data Structures with C++ and Java',
    },
    {
      company: `Good Charlotte`,
      begin: {
        month: 'apr',
        year: '1996',
      },
      duration: null,
      occupation: 'Founding Member / Bass Guitarist',
      description:
        'Founded the band and contributed to the success of over 11 million albums sold around the world',
    },
  ],
  portifolio: [
    {
      image: 'https://media.giphy.com/media/WS17aEYThNqmTf3ZKV/giphy.gif',
      description: 'NY Times Scraper',
      url: 'https://ny-times-science-scraper.herokuapp.com/'
    },
    {
      image: 'https://media.giphy.com/media/dxZaGetO7mcM5wDz8o/giphy.gif',
      description: 'The "Shazam" of Lyrics',
      url:
      'https://thatsong.herokuapp.com/',
    },
    {
      image: 'https://media.giphy.com/media/fA8YA68E2qGtwhG1fK/giphy.gif',
      description: "Harry Potter Memory Game",
      url: 'https://lordpaulthomas.github.io/potter-clicky-game/',
    },
    {
      image: 'https://media.giphy.com/media/d8tEoHPUauuLcFpXf9/giphy.gif',
      description: 'Google Books Search',
      url: 'https://my-google-books-library.herokuapp.com/'
    }, 
    {
      image: "https://media.giphy.com/media/VbJvcKegzki57AskZH/giphy.gif",
      description:"Scrape CoinDesk",
      url: "https://crypto-desk.herokuapp.com/"
    },
    {
      image: "https://media.giphy.com/media/lqLdXEQZYhJ91qOPjd/giphy.gif",
      description: "RPG Battle Game",
      url: "https://gladiator-fights.herokuapp.com/",
    },
    {
      image: "https://media.giphy.com/media/7LfFXBn4we96o/giphy.gif",
      description: "Harry Potter Quiz",
      url: "https://lordpaulthomas.github.io/Trivia-Game-2/"
    },
    {
      image: "http://giphygifs.s3.amazonaws.com/media/117Q7xzQUHm69W/giphy.gif",
      description: "Search Giphy's API",
      url: "https://lordpaulthomas.github.io/GifTastic/"

    },
    {
      image: "https://media.giphy.com/media/LmrwrZJziYEQTZYDUq/giphy.gif",
      description: "Bamazon CLI MarketPlace",
      url: "https://github.com/lordpaulthomas/BAMAZON"

    }
    /* more portifolio items here */
  ],
  social: {
    twitter: 'https://twitter.com/bigpaulthomas',
    linkedin: 'https://www.linkedin.com/in/paul-thomas-b0409871/',
    github: 'https://github.com/lordpaulthomas',
    email: 'traitorpt@gmail.com',
  },
  siteUrl: 'http://www.paulthomas.rocks/',
  pathPrefix: '/gatsby-starter-cv', // Note: it must *not* have a trailing slash.
  siteCover: '/images/cover.jpeg',
  googleAnalyticsId: 'UA-000000000-1',
  background_color: '#ffffff',
  theme_color: '#25303B',
  fontColor: '#000000cc',
  enableDarkmode: true, // If true, enables dark mode switch
  display: 'minimal-ui',
  icon: 'src/assets/gatsby-icon.png',
  headerLinks: [
    {
      label: 'Home',
      url: '/',
    },
    {
      label: 'Portfolio',
      url: '/portfolio',
    },
  ],
}
