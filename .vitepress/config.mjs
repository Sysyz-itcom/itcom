import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "SYSYZ-ITCOM",
  base: "/itcom/",
  description: "邵阳市第一中学信息技术社团",
  themeConfig: {
    // 底部配置
    footer:{
      copyright: 'Copyright © 2024 邵阳市第一中学信息技术社团'
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '文档', link: 'https://sysyz-itcom.github.io/docs' },
      { text: '友情链接', link: '/docs/guide/friends' }
    ],

    sidebar: [
      {
        text: '简介',
        items: [
          { text: '关于我们', link: '/docs/guide/about' },
          { text: '我们的学校', link: '/docs/guide/school' }
        ]
      },
      {
        text: '服务',
        items: [
          { text: '社团网页工具箱', link: '/docs/services/tools-box' },
          { text: '社团博客', link: '/docs/services/blogs' },
          { text: '搜索起始页', link: '/docs/services/search-start-page' },
        ]
      },
      {
        text: 'HTML5 组件',
        items: [
          { text: '时间问候组件', link: '/docs/h5-js/time-hello' },
        ]
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/sysyz-itcom-club' }
    ]
  }
})
