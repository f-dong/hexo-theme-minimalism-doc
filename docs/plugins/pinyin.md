---
sidebar_position: 1
---

# 中文链接转拼音

如果你的文章名称是中文的，那么 Hexo 默认生成的永久链接也会有中文，这样不利于 SEO。我们可以用 [hexo-permalink-pinyin](https://github.com/viko16/hexo-permalink-pinyin) Hexo 插件使在生成文章时生成中文拼音的永久链接。

## 配置

### 1. 安装

安装命令如下：

```bash npm2yarn
npm i hexo-permalink-pinyin --save
```

### 2. 修改配置


在 Hexo 根目录下的 `_config.yml` 文件中，新增以下的配置项：

```yml title="_config.yml"
permalink_pinyin:
  enable: true # 启用插件
  separator: '-' # 分词符，将使用此符号分隔两个汉字间的拼音
```


:::tip

注：除了此插件外，[hexo-abbrlink](https://github.com/rozbo/hexo-abbrlink) 插件也可以生成非中文的链接。你可前往其项目地址详细了解。

:::
