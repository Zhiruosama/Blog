import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/Blog/",

  lang: "zh-CN",
  title: "学习笔记",
  description: "vuepress-theme-hope 的博客演示",

  // 设置浏览器标签页的图标
  head: [
    // 使用明确的type属性指定图标类型，路径前缀与base一致
    ["link", { rel: "icon", type: "image/x-icon", href: "/Blog/Fayicon.ico?v=3" }],
    // 添加shortcut icon关系，增加兼容性
    ["link", { rel: "shortcut icon", type: "image/x-icon", href: "/Blog/Fayicon.ico?v=3" }],
  ],

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
