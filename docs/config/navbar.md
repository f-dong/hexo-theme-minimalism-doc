---
sidebar_position: 3
---

# 导航栏

## 链接列表

配置项名称：`menu`，默认值：`[]`

请写到你的链接列表，格式如下：

```yaml title="_config.redefine.yml"
menu:
  Index: # 随意起名，但不能重复
    url: / # 链接地址，可以是外链
    External: false # 是否弹出新窗口打开
    name: 首页 # 链接名称
```

如果要实现在导航栏点击菜单时跳转到第三方网站，只需把 path 的值填写为第三方网站的 URL 即可。

例如：在头部导航栏配置跳转到百度网站的菜单：
    
```yaml title="_config.redefine.yml"
menu:
  Baidu:
    url: "https://www.baidu.com"
    External: true
    name: 百度
```

## 全文搜索

功能开发中...
