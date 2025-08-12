import { defineConfig } from "vitepress";

export default defineConfig({ 
  title: "yoyolin's blog",
  description: "歡迎觀賞我的部落格",
  base: "/yoyo-lin/", // 👈👈👈 這個非常需要設定喔！！
  themeConfig: {
    
    // 👇👇👇 查看 https://vitepress.dev/reference/default-theme-nav
    nav: [
      { text: "首頁", link: "/" },
      { text: "指南", link: "/guide/" },
      { text: "writeup", link: "/writeup/" },
      { text: "API", link: "/api/" },
      ],

    // 👇👇👇 查看 https://vitepress.dev/reference/default-theme-sidebar
    sidebar:[
      {
        text: "範例",
        items: [
            { text: "範例一", link: "/examples/example-one" },
            { text: "範例二", link: "/examples/example-two" },
          ]
        }
      ],

    // 👇👇👇 查看 https://vitepress.dev/reference/default-theme-config#sociallinks
    socialLinks: [
      {
        icon: "github",
        link: "https://aisp-fhsh.github.io/yoyo-lin/",
      }
    ]
  }
})
