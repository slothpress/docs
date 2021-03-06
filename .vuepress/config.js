module.exports = {
    title: 'SlothPress',
    description: 'WordPress for the lazy developer.',
    home: true,
    themeConfig: {
        smoothScroll: true,
        logo: '/slothpress.svg',
        nav: [
        ],
        sidebar: [
            '/',
            'guide/',
            'guide/INSTALLATION.md'
        ],
        repo: 'slothpress/docs',
        editLinks: true
    },
    head: [
        ['link', { rel: 'icon', href: `/logo.png` }],
        ['link', { rel: 'manifest', href: '/manifest.json' }],
        ['meta', { name: 'theme-color', content: '#0077ff' }],
        ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
        ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
        ['link', { rel: 'apple-touch-icon', href: `/icons/apple-touch-icon-152x152.png` }],
        ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#0077ff' }],
        ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
        ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
    ],
    serviceWorker: true
};
