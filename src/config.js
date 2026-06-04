module.exports = {
  siteTitle: 'Aniruddha Ghosh',
  siteDescription:
    'Aniruddha Ghosh is a Cybersecurity Engineer and AI practitioner specialising in SIEM engineering, ML-driven threat analytics (UEBA), detection engineering, and AI agent development.',
  siteKeywords:
    'Aniruddha Ghosh, Aniruddha, Ghosh, ghoshzsh, cybersecurity engineer, AI agents, UEBA, SIEM, detection engineering, threat hunting, LangGraph, LangChain, MCP, splunk, python, cloud security, devSecOps, bengaluru',
  siteUrl: 'https://iamghosh.in/',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'G-STK2LEVWC2',
  // googleVerification: 'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk',
  name: 'Aniruddha Ghosh',
  location: 'Bengaluru, India',
  email: 'aghosh0605@gmail.com',
  github: 'https://github.com/ghoshzsh',
  twitterHandle: '@ghoshzsh',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/ghoshzsh',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/ghoshzsh/',
    },
    // {
    //   name: 'Codepen',
    //   url: 'https://codepen.io/yashitanamdeo',
    // },
    // {
    //   name: 'Instagram',
    //   url: 'https://www.instagram.com/ghosh.zsh',
    // },
    {
      name: 'Twitter',
      url: 'https://twitter.com/ghoshzsh',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Projects',
      url: '/#projects',
    },
    {
      name: 'Publications',
      url: '/#publications',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
