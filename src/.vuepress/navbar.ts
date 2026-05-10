import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: "博文",
    icon: "pen-to-square",
    prefix: "/posts/",
    children: [
      { text: "海道教育实习", link: "海道教育实习/" },
    ],
  },
]);
