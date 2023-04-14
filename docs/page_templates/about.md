---
sidebar_position: 4
---

# 关于页

## 配置

### 1. 创建关于页

关于页是用来展示**关于我和我的博客**信息的页面，如果在你的博客 `source` 目录下还没有 `about/index.md` 文件，那么你就需要新建一个，命令如下：

```bash npm2yarn
npx hexo new page "about"
```

关于页其实就是一个普通的文章页，你可以在 `about/index.md` 文件里面写任何你想要的内容，比如：

```markdown title="source/about/index.md"
---
title: 关于
date: 2022-04-26 22:59:30
---

# 关于我

我是一名前端开发工程师，我喜欢写博客，我喜欢分享。

...
```

### 2. 导航栏添加关于页

在 Minimalism 主题配置文件 `_config.minimalism.yml` 的 [navbar 配置项](/docs/config/navbar) 里面启用关于页。

```markdown title="_config.minimalism.yml"
menu:
  about:
# highlight-start
    url: "/about/"
    External: false
    name: 关于
# highlight-end
```

