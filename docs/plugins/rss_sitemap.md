---
sidebar_position: 2
---

# RSS 订阅与站点地图

## RSS 订阅

当每天要访问多个网站时，手动检查每个网站是否有更新是非常耗时和繁琐的。这时，RSS 订阅就可以帮助你省去这些麻烦。

RSS 订阅是一种基于 XML 的技术，可以让你通过一个单独的阅读器或应用程序获取多个网站的更新内容。一旦你订阅了一个网站的RSS源，阅读器就会定期检查该网站的更新并在新文章发布时自动通知你。这样你就可以及时获得你所关心的信息，而不必每次手动检查多个网站。

RSS 订阅不仅适用于新闻网站和博客，还可以用于社交媒体和在线论坛等。通过订阅这些源，你可以方便地跟踪你感兴趣的话题和讨论，并及时了解相关动态。

因此，RSS 订阅是一种非常便利的方式，让你可以更高效地浏览和获取互联网上的信息，特别是当你需要关注多个网站或频道时。

### 安装

本主题中使用到了 [hexo-generator-feed](https://github.com/hexojs/hexo-generator-feed) 的 Hexo 插件来做 `RSS`，安装命令如下：

```bash npm2yarn
npm install hexo-generator-feed --save
```

在 Hexo 根目录下的 _config.yml 文件中，新增以下的配置项：

```yaml
feed:
  type: # Feed 类型，可选值：atom、rss2、rdf
    - atom
    - rss2
  path: # 可选多个
    - atom.xml
    - rss2.xml
  limit: 30
  hub:
  content:
  content_limit: 160
  content_limit_delim: ' '
  order_by: -date
```

执行 `hexo clean && hexo g` 重新生成博客文件，然后在 `public` 文件夹中即可看到 `atom.xml` 文件，说明你已经安装成功了。

## 站点地图

Sitemap（网站地图）是一种 XML 文件，包含了网站上的所有页面的信息，包括它们的 URL 地址、最后更新时间等等。搜索引擎可以通过读取 Sitemap 文件，更快地找到网站上的所有页面，从而更好地理解网站的结构和内容。通过提供一个Sitemap文件，你可以帮助搜索引擎更好地了解你的网站，加快它们对你网站的收录和排名。

### 安装

本主题中使用到了 [hexo-generator-sitemap](https://github.com/hexojs/hexo-generator-sitemap) 的 Hexo 插件来支持 `Sitemap`，安装命令如下：

```bash npm2yarn
npm install hexo-generator-sitemap --save
```

在 Hexo 根目录下的 _config.yml 文件中，新增以下的配置项：

```yaml
sitemap:
  path: # 可选只要一个
    - sitemap.xml
    - sitemap.txt
  rel: true # 是否在页面头部添加 rel="sitemap" 链接
```

执行 `hexo clean && hexo g` 重新生成博客文件，然后在 `public` 文件夹中即可看到 `sitemap.xml` 文件，说明你已经安装成功了。

之后，你可以在各大搜索引擎的站长平台中提交你的 `sitemap.xml` 文件，让搜索引擎更快地收录你的网站。

:::tip

本页所有配置项均在 Hexo 配置根目录 `_config.yml` 中修改

:::