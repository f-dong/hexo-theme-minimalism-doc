// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');


const { inject } = require('@vercel/analytics');
inject();

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Minimalism 文档',
  tagline: '一款简洁，快速，纯净的 Hexo 主题',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://your-docusaurus-test-site.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-CN',
    locales: ['en', 'zh-CN'],
    localeConfigs: {
        'zh-CN': {
            label: '简体中文',
        }
    }
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/f-dong/hexo-theme-minimalism-doc/edit/master/',
          remarkPlugins: [
            [require('@docusaurus/remark-plugin-npm2yarn'), {sync: true}],
          ],
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
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
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'Minimalism 文档',
        logo: {
          alt: 'My Site Logo',
          src: 'img/avatar.png',
        },
        items: [
          // {
          //   type: 'localeDropdown',
          //   position: 'right',
          // },
          {
            type: 'docSidebar',
            sidebarId: 'docs',
            position: 'left',
            label: '文档',
          },
          // {
          //   type: 'docSidebar',
          //   sidebarId: 'hexo',
          //   position: 'left',
          //   label: 'Hexo 技巧',
          // },
          {
            href: 'https://github.com/f-dong/hexo-theme-minimalism',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '文档',
            items: [
              {
                label: '快速开始',
                to: '/docs/start',
              },{
                label: '配置教程',
                to: '/docs/category/基本配置',
              },{
                label: '插件支持',
                to: '/docs/category/插件',
              },
            ],
          },
          {
            title: '更多',
            items: [
              {
                label: '在线示例',
                to: 'https://www.codeover.cn/',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/f-dong/hexo-theme-minimalism',
              },
            ],
          },
        ],
        copyright: `<span onclick="window.open('https://beian.miit.gov.cn/');" style="cursor:pointer">豫ICP备2022011962号</span>`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
