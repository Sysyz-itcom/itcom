const base = "/itcom"
export default defineConfig({
    base,
    lang: 'en-US',
    title: 'VitePress',
    description: 'Vite & Vue powered static site generator.',

    themeConfig: {
        nav: [
            { text: '关于我们', link: '/guide/about' },
            { text: '我们的学校', link: '/guide/school' },

            // {
            //   text: 'Dropdown Menu',
            //   items: [
            //     { text: 'Item A', link: '/item-1' },
            //     { text: 'Item B', link: '/item-2' },
            //     { text: 'Item C', link: '/item-3' },
            //   ],
            // },

            // ...
        ],

        sidebar: [
            {
                text: '简介',
                collapsed: false,
                items: [
                    { text: '关于我们', link: '/guide/about' },
                    { text: '我们的学校', link: '/guide/school' },
                ],
            },
            {
                text: '服务',
                collapsed: false,
                items: [
                    { text: '社团工具箱', link: '/services/tools-box' },
                    { text: '起始页', link: '/services/search-start-page' },
                    { text: '社团博客', link: '/services/blogs' },
                ],
            },
            {
                text: 'HTML5 组件',
                collapsed: false,
                items: [
                    { text: '时间问候文本', link: '/h5-js/time' },
                ],
            },
        ],
    },
});
