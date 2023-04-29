/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  docs: [
    'introduction',
    'start',
    'article',
    {
      type: 'category',
      label: '基本配置',
      collapsed: false,
      items: [{type: 'autogenerated', dirName: 'config'}],
    },
    {
      type: 'category',
      label: '页面模板',
      collapsed: false,
      items: [{type: 'autogenerated', dirName: 'page_templates'}],
    },
    {
      type: 'category',
      label: '插件',
      collapsed: false,
      items: [{type: 'autogenerated', dirName: 'plugins'}],
    },
  ],
  hexo: [
    {
        type: 'autogenerated',
        dirName: 'hexo',
    }
  ]
};

module.exports = sidebars;
