module.exports = {
  pathPrefix: '',
  siteUrl: 'https://antoniosostilio.com',
  siteTitle: 'Antonio Sostilio',
  siteDescription: 'Antonio Sostilio Site and Portfolio',
  author: 'Antonio Sostilio',
  postsForArchivePage: 3,
  defaultLanguage: 'en',
  disqusScript: process.env.DISQUS_SCRIPT || '',
  pages: {
    home: '/',
    blog: 'blog',
    contact: 'contact',

  },
  social: {
    github: 'https://github.com/rolwin100',
    linkedin:'https://www.linkedin.com/in/antonio-sostilio',
    rss: '/rss.xml',
  },
  contactFormUrl: process.env.CONTACT_FORM_ENDPOINT || '',
  googleAnalyticTrackingId: process.env.GA_TRACKING_ID || '',
};