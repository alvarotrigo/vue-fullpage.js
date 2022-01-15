module.exports = {
  lang: 'en-US',
  title: 'Vue 3 fullpage.js library',
  description: 'Official Vue 3 wrapper for the fullpage.js library.',

  themeConfig: {
    docsDir: 'docs',
    nav: [
      {
        text: 'GitHub',
        link: 'https://github.com/alvarotrigo/vue-fullpage.js',
      },
    ],
    sidebar: [
      {
        text: 'Getting started',
        link: '/',
        children: [
          {
            text: 'Options',
            link: '/options',
          },
          {
            text: 'Example',
            link: '/example',
          },
        ]
      }

    ],
  },
}
