// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '大数据智能团队',
  tagline: 'Learning from coding',
  favicon: 'img/bigdata-logo.svg',

  // Set the production url of your site here
  url: 'https://bigdata-io.github.io/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/008/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'bigdata-io', // Usually your GitHub org/user name.
  projectName: '008', // Usually your repo name.

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/bigdata-io/008/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/bigdata-io/docs/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      // image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'BIGDATA',
        logo: {
          alt: 'BigData',
          src: 'img/bigdata-logo.svg',
        },
        items: [
          {to: '/docs/deep-learning', label: '大数据', position: 'right'},
          // {
          //   type: 'docSidebar',
          //   sidebarId: 'tutorialSidebar',
          //   position: 'left',
          //   label: '前端',
          // },
          // // configure the top-bar
          {to: '/docs/frontend', label: '前端', position: 'right'},
          {to: '/docs/backend', label: '后端', position: 'right'},
          // {to: '/blog', label: 'Blog', position: 'left'},
          {to: '/docs/intro', label: 'Welcome!', position: 'left'},
          {
            href: 'https://github.com/bigdata-io/', 
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'light',

        copyright: `
        Copyleft © SWPU 2018-${new Date().getFullYear()} BigData Studio
        `,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
