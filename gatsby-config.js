module.exports = {
  siteMetadata: {
    title: 'Sam Beebe',
    description:
      '',
    url: 'https://gatsby-starter-amsterdam.netlify.com',
    author: 'John Doe',
    intro: ' ',
    menuLinks: [
      {
        name: 'sam bekjhebe',
        slug: '/',
      },
      {
        name: 'Example Page',
        slug: '/example/',
      },
    ],
    footerLinks: [
      {
        name: 'Gatsby Theme Amsterdam',
        url: 'https://github.com/ryanwiemer/gatsby-theme-amsterdam',
      },
    ],
  },
  plugins: [
    {
      resolve: 'gatsby-theme-amsterdam',
      options: {
postsPerPage: 12,

},
    },
  ],
}
