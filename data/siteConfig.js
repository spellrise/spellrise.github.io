module.exports = {
  siteTitle: 'Spellrise',
  siteDescription: 'All about an upcoming game called Spellrise.',
  siteUrl: 'https://spellrise.github.io/',
  authorName: 'Maxence Poutord',
  twitterUsername: 'Spellrise',
  // authorAvatar: 'avatar.jpeg', // file in content/images
  defaultLang: 'en', // show flag if lang is not default. Leave empty to enable flags in post lists
  // authorDescription: `
  // For the last decade, Maxence Poutord has worked with a variety of web technologies. He is currently focused on front-end development.
  // On his day to day job, he is working as a senior front-end engineer at VSware. He is also an occasional tech speaker and a mentor.
  // As a digital nomad, he is living where the WiFi and sun are 😎 <br>
  // Do you want to know more? <a href="https://www.maxpou.fr/about" rel="noopener" target="_blank">Visit my website!</a>
  // `,
  // siteUrl: 'https://maxpou.github.io/',
  // disqusSiteUrl: 'https://www.maxpou.fr/',
  // Prefixes all links. For cases when deployed to maxpou.fr/gatsby-starter-morning-dew/
  pathPrefix: '/gatsby-starter-morning-dew', // Note: it must *not* have a trailing slash.
  siteCover: 'concept.jpg', // file in content/images
  googleAnalyticsId: 'UA-67868977-2',
  background_color: '#ffffff',
  theme_color: '#222222',
  display: 'standalone',
  icon: 'content/images/spellrise-logo.jpg',
  postsPerPage: 6,
  // disqusShortname: 'maxpou',
  headerTitle: 'Spellrise',
  headerLinksIcon: 'spellrise-logo.jpg', //  (leave empty to disable: '')
  headerLinks: [
    {
      label: 'Blog',
      url: '/',
    },
    {
      label: 'About',
      url: '/about',
    },
    {
      label: 'World of Spellrise',
      url: '/world-of-spellrise',
    },
  ],
  // Footer information (ex: Github, Netlify...)
  websiteHost: {
    name: 'GitHub',
    url: 'https://github.com',
  },
  footerLinks: [
    {
      sectionName: 'Explore',
      links: [
        {
          label: 'Blog',
          url: '/',
        },
        {
          label: 'About',
          url: '/about',
        },
        {
          label: 'World of Spellrise',
          url: '/world-of-spellrise',
        },
      ],
    },
    {
      sectionName: 'Follow the author',
      links: [
        {
          label: 'GitHub',
          url: 'https://github.com/maxpou/gatsby-starter-morning-dew',
        },
        {
          label: 'Website',
          url: 'https://www.maxpou.fr',
        },
        {
          label: 'Twitter',
          url: 'https://twitter.com/_maxpou',
        },
      ],
    },
  ],
}
