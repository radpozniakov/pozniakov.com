module.exports = {
  title: 'My Awesome Site',
  description: 'Welcome to my awesome site created with Eleventy!',
  myName: 'Rodion Pozniakov',
  myEmail: 'rad@pozniakov.com',
  myLocation: 'Kyiv, Ukraine',
  aboutMainPage:
    'Page that aggregates all my pages and activities on the internet. You can find pages to music, programming, design or photos',
  myJob: 'UI/UX Designer & Front-end developer',
  aboutMe:
    "I enjoy developing useful tools that enhance people's lives. I don't just make screens, I write code most of the time. I'm a big fan of technologies, especially the web and AI. Since 2013, I’ve developed a diverse range of websites and tools, from calculator",
  promoBlocks: [
    {
      groupTitle: 'WEB (DESIGN & DEVELOPMENT)',
      links: [
        {
          name: 'Web expertise',
          description: 'My journey as a web designer and developer',
          img: '/assets/img/links/web.svg',
          url: '/web-expertise',
        },
        // {
        //   name: 'Articles',
        //   description: 'My thoughts on design and development',
        //   img: '/assets/img/links/articles.svg',
        //   url: 'https://articles.pozniakov.dev',
        // },
        {
          name: 'Linkedin',
          description: 'My linkedin profile',
          img: '/assets/img/links/linkedin.svg',
          url: 'https://www.linkedin.com/in/rodion-pozniakov-244738a4/',
        },
        // {
        //   name: 'Imagine',
        //   description: 'Figma plugin that generated datasets using AI',
        //   img: '/assets/img/links/imagine_logo.svg',
        //   url: 'https://imagine.pozniakov.dev',
        // },
      ],
    },
    {
      groupTitle: 'Photos',
      links: [
        {
          name: 'Unspash',
          img: '/assets/img/links/unsplash_logo.svg',
          description: 'unsplash.com/@radpozniakov',
          url: 'https://unsplash.com/@radpozniakov',
        },
      ],
    },
    {
      groupTitle: 'Sound',
      links: [
        // {
        //   name: 'Podcast "Давай перезапишемо"',
        //   description: 'Incompetently about everything',
        //   img: '/assets/img/placeholder.svg',
        //   url: '/web-expertise',
        // },
        {
          name: 'SoundCloud',
          img: '/assets/img/links/soundcloud_logo.svg',
          description: 'soundcloud.com/radpozniakov',
          url: 'https://soundcloud.com/radpozniakov',
        },
        {
          name: 'Bandcamp',
          description: 'radpozniakov.bandcamp.com',
          img: '/assets/img/links/bandcamp_logo.svg',
          url: 'https://radpozniakov.bandcamp.com',
        },
      ],
    },
    {
      groupTitle: 'Social',
      links: [
        {
          name: 'Telegram',
          description: '@radpozniakov',
          img: '/assets/img/links/t.svg',
          url: 'https://t.me/radpozniakov',
        },
        {
          name: 'Instagram',
          description: '@radpozniakov',
          img: '/assets/img/links/insta-icon.svg',
          url: 'https://instagram.com/radpozniakov',
        },
        {
          name: 'Facebook',
          img: '/assets/img/links/facebook.svg',
          description: 'facebook.com/radpoznyakov',
          url: 'https://www.facebook.com/radpoznyakov',
        },
      ],
    },
  ],
  iWorkedWith:
    'Sketch, Figma, Developing design systems, Storybook, React, Next.js, Vue, Nuxt.js, Three.js, Typescript, Node.js, Express, MongoDB, REST API,  CI/CD, JS Bundlers, Linux',
  webExperience: [
    {
      period: '2019 - Present',
      position: 'UI/UX Designer & Front-end developer at Trinetix',
      acivities: [
        'Developed a design system on React with more than 80 components written from scratch according to accessibility standards.',
        'Provided rapid prototypes for user testing, facilitating an iterative design process.',
        'Assisted designers in bridging communication with developers.',
        'Conducted workshops for the design team to introduce new tools, and web features',
        'Created tools to streamline the design process and enhance the productivity of designers.',
        'Created plugins with AI integration for Figma to enhance the design process.',
        'Participated in creating designs for complex enterprise systems.',
        'Developed projects on Three.js for 3D data visualization.',
      ],
    },
    {
      period: '2019',
      position: 'Software engineer at BN Digital',
      acivities: [
        'Developed projects using React and Vue.js',
        'Set up the development process and flow for the team',
      ],
    },
    {
      period: '2017  - 2019',
      position: 'UI/UX Designer at Trinetix',
      acivities: [
        'Designed complex interfaces for enterprise systems.',
        'Served as a member of the innovation team developing new products.',
        'Developed an internal account management system using Node.js and Vue.',
        'Developed tools and plugins to enhance the productivity of the design team.',
      ],
    },
    {
      period: '2013 - 2017',
      position: 'Web designer & Web developer at freelance',
      acivities: [
        'Designed and developed websites for small businesses.',
        'Created design mockups and templates for the design community.',
        'Developed custom WordPress themes.',
        'Developed a custom CMS for a small business.',
        'Developed tools for the fixed-gear bike community.',
      ],
    },
  ],
  footerText: '© 2024 - Rad Pozniakov',
};
