module.exports = {
    title: 'Vue Beginners Workshop',
    description: 'A neat introduction into web development with vue',
    // base: '/May-the-vue-be-with-you/',
    themeConfig: {
      nav: [
        { text: 'Home', link: '/' },
        { text: 'Workshop', link: '/guide/vue' },
        { text: 'ladymashiro', link: 'https://ladymashiro.ch' }
      ],
      //sidebar: 'auto'
      sidebar: {
        '/guide/': [
          'vue',
          'glossar'
        ]
      },
      markdown: {
        lineNumbers: true
      }
    }
  }
  