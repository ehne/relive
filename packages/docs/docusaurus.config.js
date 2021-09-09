
(module.exports = {
  title: 'Relive',
  tagline: 'A live animation system for React.',
  url: 'https://ehne.github.io/',
  baseUrl: '/relive/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'ehne', // Usually your GitHub org/user name.
  projectName: 'Relive', // Usually your repo name.

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/ehne/relive/edit/master/packages/docs/'
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/ehne/relive/edit/master/packages/docs/blog'
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css')
        }
      }
    ]
  ],

  themeConfig:
    {
      colorMode: {
        disableSwitch: true
      },
      navbar: {
        logo: {
          alt: 'Relive Logo',
          src: 'img/logo.svg'
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Docs'
          },
          { to: '/blog', label: 'Blog', position: 'left' },
          {
            href: 'https://github.com/ehne/relive',
            label: 'GitHub',
            position: 'right'
          }
        ]
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro'
              }
            ]
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog'
              },
              {
                label: 'GitHub',
                href: 'https://github.com/ehne/relive'
              }
            ]
          }
        ],
        copyright: `Copyright © ${new Date().getFullYear()} ehne. Built with Docusaurus.`
      },
      prism: {
        theme: require('prism-react-renderer/themes/github')
      }
    }
})
