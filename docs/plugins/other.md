---
sidebar_position: 3
---

# 其他插件

## 脚注功能

可以附在文章页面的最底端的，对某些东西加以说明，印在书页下端的注文。 脚注和尾注是对文本的补充说明。

本主题天然支持 `markdown` 语法的脚注，使用方法如下：

```markdown
基本脚注[^1]
这是一个内联脚注[^2](内联脚注)
另一个[^3]
另一个[^4]


[^1]: 基本脚注内容
[^3]: 段落
脚注
内容
[^4]: 一些脚注内容 [markdown](https://en.wikipedia.org/wiki/Markdown)
```

你可以 [点击这里](https://www.codeover.cn/hexo-footnotes/) 在线查看示例

- 默认不过滤代码块内的脚注，即在代码块内的脚注也会被渲染出来。如果你需要过滤代码块内的脚注，可以在主题配置文件 `_config.minimalism.yml` 中设置 `footnote.ignoreCodeBlock` 的值为 `true`。
- 如需禁用脚注，可在主题配置文件 `_config.minimalism.yml` 中设置 `footnote.enable` 的值为 `false`
- 本功能部分参考了 [hexo-reference](https://github.com/kchen0x/hexo-reference)

### 配置示例

```yaml
# 脚注
footnote:
  enable: true # 是否开启脚注解析
  ignoreCodeBlock: true # 是否忽略代码块中的脚注
```