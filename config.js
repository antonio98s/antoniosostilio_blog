module.exports = {
  pathPrefix: '',
  siteUrl: 'https://antoniosostilio.com',
  siteTitle: 'Antonio Sostilio',
  siteDescription: 'Antonio Sostilio Site and Portfolio',
  author: 'Antonio Sostilio',
  postsForArchivePage: 3,
  defaultLanguage: 'en',
  disqusScript: process.env.DISQUS_SCRIPT || 'https://antoniosostilio.disqus.com/embed.js',
  pages: {
    home: '/',
    blog: 'blog',
    contact: 'contact',

  },
  social: {
    github: 'https://github.com/antonio98s',
    linkedin:'https://www.linkedin.com/in/antonio-sostilio',
    rss: '/rss.xml',
  },
  contactFormUrl: process.env.CONTACT_FORM_ENDPOINT || 'https://getform.io/f/780feb21-2b1b-4352-97c5-4d4ea88ff2ff',
  googleAnalyticTrackingId: process.env.GA_TRACKING_ID || '',
};