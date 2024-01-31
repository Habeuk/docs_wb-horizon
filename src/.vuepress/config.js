// https://dev.to/kouts/combine-vuepress-and-bootstrap-to-create-a-docs-site-and-deploy-it-to-netlify-4880
const { description } = require("../../package");

module.exports = {
  base: "/wb-horizon/",
  // publicPath: " ",
  // publicPath: process.env.BASE_URL,
  // assetsDir: process.env.BASE_URL,
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: "Wb-Horizon documentation",
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
    ["meta", { name: "apple-mobile-web-app-status-bar-style", content: "black" }],
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
          "title": "Creation d'un modèle de page",
          collapsable: true,
          children : [
            {
              title: "introduction",
              path: "/docs/modele-de-page"
            }
          ]
        },
        {
          title: "Presentation",
          path: "/docs/index",
          collapsable: false,
          children: [{ title: "Introduction", collapsable: false }],
        },
        {
          title: "Creer un modele site web",
          path: "/docs/create_models/introduction",
          collapsable: true,
          children: [
            { title: "Introduction", path: "/docs/create_models/introduction" },
            { title: "Creation de layout", path: "/docs/create_models/create_layout" },
          ],
        },
        {
          title: "Tutos et astuces",
          path: "/docs/create_models/introduction",
          collapsable: true,
          children: [
            { title: "Introduction", path: "/docs/create_models/introduction" },
            { title: "Creation de layout", path: "/docs/create_models/create_layout" },
          ],
        },
        {
          title: "Concepts",
          path: "/docs/create_models/introduction",
          collapsable: true,
          children: [
            { title: "Introduction", path: "/docs/create_models/introduction" },
            { title: "Creation de layout", path: "/docs/create_models/create_layout" },
          ],
        },
        {
          title: "Fonctionnalitées",
          path: "/docs/create_models/introduction",
          collapsable: true,
          children: [
            { title: "Introduction", path: "/docs/features/introduction" },
            { title: "Import", path: "/docs/features/import" },
          ],
        },
      ],
    },
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: ["@vuepress/plugin-back-to-top", "@vuepress/plugin-medium-zoom"],
};
