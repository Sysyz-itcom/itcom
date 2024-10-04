import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "SYSYZ-ITCOM",
  base: "/itcom/",
  head: [["link", { rel: "icon", href: "https://sysyz-itcom.github.io/img/itcom-logo.jpg" }]],
  description: "这里是邵阳市第一中学信息技术社团官方网站，欢迎您的访问！",
  themeConfig: {
    // 文章目录
    outlineTitle: "文章目录",
    outline: [2, 6],
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
          { text: '希沃课程表', link: '/docs/services/classisland' },
        ]
      },
      {
        text: 'HTML5 组件',
        items: [
          { text: '时间问候组件', link: '/docs/h5-js/time-hello' },
        ]
      },
      {
        text: '社团政策',
        items: [
          { text: '社员协议', link: '/docs/agreement/people' },
          { text: '软件使用协议', link: '/docs/agreement/app-services' },
        ]
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/sysyz-itcom-club' }
    ]
  }
})
