---
sidebar_position: 1
---

# 快速开始

:::tip

使用本主题需要 [Hexo](https://hexo.io/) 版本大于 5.0.0

:::

## 安装

### 1. 安装主题

在你的 Hexo 博客根目录下执行，你可以选择使用你所喜欢的依赖管理工具来安装：

```bash npm2yarn
npm install hexo-theme-minimalism
```

#### 其他方式
当然，你也可以使用以下方式安装：

点击 [这里](https://codeload.github.com/f-dong/hexo-theme-minimalism/zip/master) 下载 `master` 分支的最新稳定版的代码，解压缩后，将 `hexo-theme-minimalism-master` 文件夹中的所有内容复制到你 `Hexo` 的 `themes/minimalism` 文件夹中即可(没有 `minimalism` 文件夹可创建后复制)。

你也可以使用 git clone 命令来下载:

```bash
git clone https://github.com/f-dong/hexo-theme-minimalism.git themes/minimalism
```

### 2. 启用主题

在 Hexo 根目录的 _config.yml 文件中，将 theme 值修改为 minimalism。

```yml title="_config.yml"
# Extensions
## Plugins: https://hexo.io/plugins/
## Themes: https://hexo.io/themes/
// highlight-next-line
theme: minimalism
```

或者你可以直接在 Hexo 根目录下执行：


```bash npm2yarn
npx hexo config theme minimalism
```

:::caution

执行此命令会清除 `_config.yml` 中的所有注释，如果你不想清除注释，请选择手动修改。

:::

### 3. 创建主题配置文件

在 Hexo 根目录下创建 `_config.minimalism.yml` 文件，并将 [此处](https://github.com/f-dong/hexo-theme-minimalism/blob/master/_config.yml) 的所有内容复制进去。

之后，如未有特殊说明，所有的主题配置均在此文件修改。

### 4. 运行

现在，你已经可以执行以下命令来启动 Hexo 了

```bash npm2yarn
npx hexo server
```

## 更新

在你的 Hexo 博客根目录下执行如下命令：

```bash npm2yarn
npm install hexo-theme-minimalism@latest
```