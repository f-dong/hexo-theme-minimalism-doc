---
sidebar_position: 2
---

# 文章

## Front-matter 选项详解

`Front-matter` 是一种 `YAML` 格式的元数据块，用于描述 `markdown` 文件的一些属性和配置，例如文章的标题、日期、标签等等。

在 `Hexo` 中 `Front-matter` 选项的所有内容均为非必填的，但我仍然建议至少填写 `title` 和 `date` 的值。

| 配置选项        | 默认值                   | 描述                                                            |
|-------------|-----------------------|---------------------------------------------------------------|
| title       | `Markdown` 的文件标题      | 文章标题，强烈建议填写此选项                                                |
| date        | 文件创建时的日期时间            | 发布时间，强烈建议填写此选项                                                |
| img         | `featureImages` 中的某个值 | 文章特征图，推荐使用图床(腾讯云、七牛云、又拍云等)来做图片的路径.如: `http://xxx.com/xxx.jpg` |
| top         | `true`                | 推荐文章（文章是否置顶），如果 `top` 值为 `true`，则会作为首页推荐文章                    |
| hide        | `false`               | 隐藏文章，如果 `hide` 值为 `true` ，则文章不会在首页显示                          |
| cover       | `false`               | `v1.0.2` 版本新增，表示该文章是否需要加入到首页轮播封面中                             |
| toc         | `true`                | 是否开启 TOC，可以针对某篇文章单独关闭 TOC 的功能。                                |
| summary     | 无                     | 文章摘要，自定义的文章摘要内容，如果这个属性有值，文章卡片摘要就显示这段文字                        |
| description | 无                     | 用于搜索引擎的 description，如果没值则取 summary 或 截取文章内容                   |
| categories  | 无                     | 文章分类，本主题的分类表示宏观上大的分类，只建议一篇文章一个分类                              |
| tags        | 无                     | 文章标签，一篇文章可以多个标签                                               |
| keywords    | 文章标题                  | 文章关键字，SEO 时需要                                                 |
| categories  | 文章分类                  | 当前文章的所属分类 用户分类归档页                                             |
| tags        | 文章标签                  | 可以有多个                                                         |

### 最简示例

```yaml
---
title: typora-vue-theme主题介绍
date: 2022-04-26 09:25:00
---
```

### 最全示例

```yaml
---
title: typora-vue-theme主题介绍
date: 2022-04-26 09:25:00
author: 张三
img: /source/images/xxx.jpg
top: true
hide: false
cover: true
toc: false
summary: 这是你自定义的文章摘要内容，如果这个属性有值，文章卡片摘要就显示这段文字，否则程序会自动截取文章的部分内容作为摘要
description: 该值主要用于 seo 优化，设置后页面 description 将显示该值，未设置则取 summary 或截取部分文章内容
categories: Markdown
tags:
  - Typora
  - Markdown
---
```

## 文章置顶

要实现顶置的文章，需在文章页添加 sticky 属性，sticky 值越大，文章的排序越靠前，参考如下。

```yaml
---
title: Minimalism 主题使用指南
date: 2023-04-26
tags: [Hexo]
categories: [Hexo]
sticky: 999
---
```

## 文章隐藏

```yaml
hide:
- home_hide: true
- archive_hide: false
- category_hide: false
- tag_hide: false
```

- `hide` 隐藏文章，设置后默认在所有页面隐藏(不影响直接打开文章详情页)
  - `home_hide` 是否在首页隐藏
  - `archive_hide` 是否在归档页隐藏
  - `category_hide` 是否在分类页隐藏
  - `tag_hide` 是否在标签页隐藏

`hide` 一旦配置，默认所有页面都隐藏，如需指定部分页面不隐藏，则需指定对应页面为 `false`，例如：

```yaml
hide:
- home_hide: false
```

代表在别的页面都隐藏，在首页正常显示

同时，如果想在所有页面都隐藏，只需配置 `hide: true` 即可。

```yaml
hide: true
```

:::info

文章隐藏后，文章详情页仍然可以访问，只是不会在列表页显示，如需完全隐藏，可以设置 `published` 为 `false`。

:::
