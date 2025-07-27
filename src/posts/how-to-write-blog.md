---
icon: pen-to-square
date: 2023-12-02
category:
  - 教程
  - 博客写作
tag:
  - Markdown
  - VuePress
  - 指南
---
# 如何在VuePress中写博客

本文将介绍如何在VuePress中创建和编写博客文章，包括Markdown语法和VuePress特有的功能。

<!-- more -->

## 创建新的博客文章

在VuePress中创建新的博客文章非常简单，只需要在 `src/posts`目录下创建一个新的Markdown文件即可。

### 文件命名

文件名将会成为URL的一部分，所以建议使用英文、数字和连字符，例如：`my-first-post.md`。

### Frontmatter

每篇博客文章都需要在文件开头添加Frontmatter，这是一段YAML格式的元数据，用于定义文章的各种属性。

```yaml
---
icon: edit
date: 2023-12-02
category:
  - 教程
  - 博客写作
tag:
  - Markdown
  - VuePress
  - 指南
sticky: false
star: false
---
```

#### 常用的Frontmatter属性

- **icon**: 文章图标
- **date**: 发布日期
- **category**: 文章分类
- **tag**: 文章标签
- **sticky**: 是否置顶
- **star**: 是否收藏

## Markdown语法

VuePress使用Markdown作为内容编写的主要格式。以下是一些常用的Markdown语法：

### 标题

```markdown
# 一级标题
## 二级标题
### 三级标题
```

### 列表

无序列表：

```markdown
- 项目1
- 项目2
- 项目3
```

有序列表：

```markdown
1. 第一步
2. 第二步
3. 第三步
```

### 链接和图片

```markdown
[链接文本](https://example.com)
![图片描述](/path/to/image.jpg)
```

### 代码块

```markdown
```javascript
function hello() {
  console.log('Hello, VuePress!');
}
```

```

## VuePress特有功能

VuePress提供了一些特有的功能，可以让你的博客更加丰富多彩。

### 文章摘要

在文章中使用`<!-- more -->`标记可以将其上方的内容作为文章摘要显示在博客首页。

### 自定义容器

VuePress提供了一些自定义容器，可以用来突出显示内容：

```markdown
::: tip 提示
这是一个提示
:::

::: warning 警告
这是一个警告
:::

::: danger 危险
这是一个危险警告
:::

::: details 点击查看详情
这是详情内容
:::
```

### 使用Vue组件

VuePress允许你在Markdown中使用Vue组件：

```markdown
<MyComponent />
```

## 发布博客

写完博客后，你需要将其发布到网站上：

1. 运行 `npm run docs:build`构建网站
2. 将生成的文件部署到服务器或GitHub Pages

如果你使用GitHub Actions，只需要将代码推送到GitHub仓库，它会自动构建并部署你的博客。

## 总结

通过本文的介绍，你应该已经掌握了在VuePress中创建和编写博客文章的基本方法。希望你能够创作出精彩的博客内容！
