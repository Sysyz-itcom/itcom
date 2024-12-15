import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "SYSYZ - ITCOM",
  base: "/itcom/",
  head: [["link", { rel: "icon", href: "https://avatars.githubusercontent.com/u/159421917" }]],
  description: "这里是邵阳市第一中学信息技术社团官方网站，欢迎您的访问！",
  themeConfig: {
    // 文章目录
    outlineTitle: "文章目录",
    outline: [2, 6],
    // 底部配置
    footer:{
      copyright: 'Copyright © 2024 邵阳市第一中学信息技术社团'
    },

    returnToTopLabel: "返回顶部", // 返回顶部按钮
    darkModeSwitchLabel: "深色模式", // 双模式

    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '文档', link: 'https://sysyz-itcom.github.io/docs' },

      {
        text: "友情链接",
        items: [
          { text: 'Friends', link: '/docs/guide/friends' },
          { text: 'WindLin Studio', link: 'https://sysyz-itcom.github.io/WindLin' },
        ],
      },
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
