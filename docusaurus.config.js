// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Jacks Media',
  staticDirectories: ['public', 'static'],
  tagline: 'Enthusiasm, Not Financial Advice',
  url: 'https://jacks.media',
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
          src: 'img/Rock98.png',
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
                to: '/docs/tutorial-extras/qi',
              },
            ],
          },
          {
            title: 'Frens in web3',
            items: [
              {
                label: 'Multiconomy',
                href: 'https://www.multiconomy.com/',
              },
              {
                label: 'Lannuvar DAO in Realm of Karitha',
                href: 'https://lannuvar.super.site',
              },
            ],
          },
          {
            title: 'Socials',
            items: [
              {
                label: 'xJ4cks on Threads',
                href: 'https://threads.net/xJ4cks',
              },
              {
                label: 'xJ4cks on Insta',
                href: 'https://www.instagram.com/xj4cks',
              },
              {
                label: 'Jacks.Media GitHub',
                href: 'https://github.com/jacksmedia',
              }
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Jacks dot Media. $EGLD: erd159mypt4myss3mqrs89ft0hjeacffks2690gq9u3mlh73m9sh0w5s09eqhh`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
