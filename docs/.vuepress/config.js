const { description } = require('../../package')

module.exports = {
  base: '/aoct/',
  title: 'AoC Tool',
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    [
      'meta',
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }
    ],
    ['link', { rel: 'icon', href: '/logo.png' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   */
  themeConfig: {
    // GitHub
    repo: 'https://github.com/mariofdezzz/aoct',
    docsDir: 'docs',
    editLinkText: '',
    editLinks: false,
    lastUpdated: false,
    //
    smoothScroll: true,
    // Navbar
    nav: [
      {
        text: 'Guide',
        link: '/'
      },
      {
        text: 'Config',
        link: '/config/'
      },
      {
        text: 'Roadmap',
        link: '/roadmap/'
      }
    ],
    sidebar: {
      '/roadmap/': false,
      '/config/': 'auto',
      // fallback
      '/': [
        {
          title: 'Guide',
          collapsable: false,
          children: ['', 'local-data/'],
          initialOpenGroupIndex: 0
        }
      ]
    }
  }
}
