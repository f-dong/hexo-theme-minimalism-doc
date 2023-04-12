---
sidebar_position: 1
---

# 基本信息

:::tip

本页所有文件配置项均在 Hexo 配置根目录 `_config.yml` 中修改

:::

## 语言

配置项名称：`language`

博客内容语言，目前主题仅支持 `zh-CN`，请注意合理设置，否则浏览博客时浏览器会弹出翻译窗口。

## 站点地址

配置项名称：`url`

博客地址，请正确填写，以免造成一些不必要的影响。注意链接末尾不要加 `/`。

## 博文内容固定链接

配置项名称：`permalink`

:year	文章的发表年份（4 位数）
:month	文章的发表月份（2 位数）
:i_month	文章的发表月份（去掉开头的零）
:day	文章的发表日期 (2 位数)
:i_day	文章的发表日期（去掉开头的零）
:hour	文章发表时的小时 (2 位数)
:minute	文章发表时的分钟 (2 位数)
:second	文章发表时的秒钟 (2 位数)
:title	文件名称 (相对于 “source/_posts/“ 文件夹)
:name	文件名称
:post_title	文章标题
:id	文章 ID (清除缓存时不具有持久性)
:category	分类。如果文章没有分类，则是 default_category 配置信息。
:hash	文件名（与 :title 相同）和日期的 SHA1 哈希值（12位16进制数）

layout	布局
title	标题
date	建立日期
updated	更新日期
tags	标签
categories	分类
lang	语言

## 标题

配置项名称：`title`

站点标题，显示在网页标题栏。

## 网站描述

配置项名称：`description`

网站简要描述，主要用于 SEO 优化，文章内的 `description` 会优先于此配置。

## 网站关键词

配置项名称：`keywords`

网站关键词，主要用于 SEO 优化，文章内的 `keywords` 会优先于此配置。