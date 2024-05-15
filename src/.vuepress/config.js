// https://dev.to/kouts/combine-vuepress-and-bootstrap-to-create-a-docs-site-and-deploy-it-to-netlify-4880
const { description } = require("../../package");

module.exports = {
  base: "/bindh/",
  // publicPath: " ",
  // publicPath: process.env.BASE_URL,
  // assetsDir: process.env.BASE_URL,
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: "Documentation du site la petite sorcière by Habeuk v1.0.0",
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,
  /**
   * Pour l'exportation du theme.
   */
  dest: "public",
  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ["meta", { name: "theme-color", content: "#223e70" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" },
    ],
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: "",
    editLinks: false,
    docsDir: "",
    editLinkText: "",
    lastUpdated: false,
    nav: [
      // {
      //   text: "Guide",
      //   link: "/guide/",
      // },
      // {
      //   text: "Config",
      //   link: "/config/",
      // },
      {
        text: "Documentation",
        link: "/docs/",
      },
    ],
    // For more information => https://vuepress.vuejs.org/theme/default-theme-config.html#homepage
    displayAllHeaders: true,
    sidebar: {
      "/docs/": [
        {
          title: "Ajout des produits et des variations",
          path: "/docs/produits",
          collapsable: false,
          children: [
            { title: "Produits", path: "produits" },
            { title: "Variations", path: "Variations" },
          ],
        },
        {
          title: "Ajout des termes taxonomies",
          path: "/docs/utilisation/taxonomiesTerms",
          collapsable: true,
        },
        
        {
          title: "modification d'une page",
          path: "/docs/utilisation/modification-page",
          collapsable: true,
        },
        {
          title: "modification du menu",
          path: "/docs/utilisation/modification-menu",
          collapsable: true,
          children: [
            {
              title: "Menu configuration",
              path: "/docs/utilisation/creation-menus",
            },
            {
              title: "adding taxonomies",
              path: "/docs/utilisation/taxonomies",
            },
            {
              title: "Documents",
              path: "/docs/utilisation/document",
            },
            {
              title: "other modifications",
              path: "/docs/utilisation/auther-examples",
            },
          ],
        },

        {
          title: "Blog",
          path: "/docs/utilisation/Blog",
          collapsable: true,
        },
        {
          title: "modification du footer",
          path: "/docs/utilisation/modification-footer",
          collapsable: true,
        },
        
        
      ],
      "/foo/": [
        "" /* /foo/ */,
        "one" /* /foo/one.html */,
        "two" /* /foo/two.html */,
      ],

      "/bar/": [
        "" /* /bar/ */,
        "three" /* /bar/three.html */,
        "four" /* /bar/four.html */,
      ],
      // fallback
      "/": [
        "" /* / */,
        "contact" /* /contact.html */,
        "about" /* /about.html */,
      ],
    },

    // sidebar: [
    //   {
    //     title: "Presentation", // required
    //     path: "/docs/", // optional, link of the title, which should be an absolute path and must exist
    //     collapsable: false, // optional, defaults to true
    //     sidebarDepth: 1, // optional, defaults to 1
    //     //children: ["/"],
    //   },
    //   {
    //     title: "Group 2",
    //     children: [
    //       /* ... */
    //     ],
    //     initialOpenGroupIndex: -1, // optional, defaults to 0, defines the index of initially opened subgroup
    //   },
    // ],
    // sidebar: {
    //   "/docs/": [
    //     {
    //       title: "Presentation",
    //       collapsable: true,
    //       //children: ["", "presentation"],

    //     },
    //     {
    //       title: "Installation",
    //       collapsable: true,
    //       children: ["", "installation"],
    //     },
    //   ],
    //   "/guide/": [
    //     {
    //       title: "Guide",
    //       collapsable: false,
    //       children: ["", "using-vue"],
    //     },
    //   ],
    // },
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: ["@vuepress/plugin-back-to-top", "@vuepress/plugin-medium-zoom"],
};
