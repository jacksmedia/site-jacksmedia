// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer').themes.github;
const darkCodeTheme = require('prism-react-renderer').themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Jacks Media',
  staticDirectories: ['public', 'static'],
  tagline: 'Enthusiastic Guides for Digital Creatives',
  url: 'https://j4cks.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'jacksmedia', // Usually your GitHub org/user name.
  projectName: 'j4cksdotcom', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Jacks.Media',
        logo: {
          alt: 'Jacks Media',
          src: 'img/cat-pfp.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Guides',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/jacksmedia/j4cksdotcom',
            label: 'This Site\'s Codebase on GH',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Guides',
            items: [
              {
                label: 'Intro to Guides',
                to: '/docs/intro',
              },
              {
                label: 'Qi~Chi Calendar of YTs',
                to: '/docs/tutorial-extras/chi',
              },
            ],
          },
          {
            title: 'Creator Communities',
            items: [
              {
                label: 'NightCafe (free AI illustrator)',
                href: 'https://discord.gg/nightcafestudio',
              },
              {
                label: 'FF4 Ultima Discord (sprite art & romhacking)',
                href: 'https://discord.gg/PGMASbSnD9',
              },
              {
                label: 'FF5 Den wiki (romhacking resources)',
                href: 'https://www.ff6hacking.com/ff5wiki/index.php/Main_Page#Utility',
              },
            ],
          },
          {
            title: 'Socials',
            items: [
              {
                label: 'my Tumblr',
                href: 'https://www.tumblr.com/xj4x',
              },
              {
                label: 'my BlueSky',
                href: 'https://bsky.app/profile/xj4cks.bsky.social',
              },
              {
                label: 'Jacks.Media GitHub',
                href: 'https://github.com/jacksmedia',
              }
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Jacks dot Media<br/>Fonts by Google, Images by xJ4cks<br/>$SOL: 8BhHgt8JWHide48mVCysvoXk4TdX6v86EbgBSkTnrLsK`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
