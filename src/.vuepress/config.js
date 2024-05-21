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
          title: "Gestion des sites et pages",
          path: "/docs/gestion-sites-pages/introduction",
          collapsable: true,
          children: [
            {
              title: "Génération d'un site web",
              path: "/docs/gestion-sites-pages/gen-siteweb",
            },
            {
              title: "creation d'un page",
              path: "/docs/gestion-sites-pages/create-a-page",
            },
            {
              title: "Quelques outils de customisation d'une page",
              path: "/docs/gestion-sites-pages/custom-a-page",
              collapsable: true,
              children: [
                {
                  title: "Ajout d'une section dans une page",
                  path: "/docs/gestion-sites-pages/custom-a-page/add-section",
                },
                {
                  title: "Modification des couleurs d'un site",
                  path: "/docs/gestion-sites-pages/custom-a-page/update-colors",
                },
                {
                  title: "Modification du layout d'un paragraphe",
                  path: "/docs/gestion-sites-pages/custom-a-page/alter-section-layout",
                },
              ],
            },
            {
              title: "Génération d'un modèle de page",
              path: "/docs/gestion-sites-pages/gen-page",
              collapsable: true,
              children: [
                {
                  title: "génération de pages en général",
                  path: "/docs/gestion-sites-pages/gen-page/for-all-pages",
                },
                {
                  title: "génération de pages  d'accueil",
                  path: "/docs/gestion-sites-pages/gen-page/home-page",
                },
              ],
            },
            {
              title: "Troubleshooting",
              path: "/docs/gestion-sites-pages/troubleshooting",
            },
          ],
        },
        {
          title: "Configuration du module hbkcolissimochrono",
          path: "/docs/hbkcolissimochrono/introduction",
          collapsable: true,
          children: [
            {
              title: "Installation",
              path: "/docs/hbkcolissimochrono/installation",
            },
            {
              title: "Configuration de base",
              path: "/docs/hbkcolissimochrono/configuration-de-base"
            },
            {
              title: "Index",
              collapsable: true,
              children: [
                {
                  title: "Colissimo",
                  path: "/docs/hbkcolissimochrono/indexes/colissimo"
                }, {
                  title: "Chronopost",
                  collapsable: true,
                  path: "/docs/hbkcolissimochrono/indexes/chronopost"
                }
              ]
            },
          ]
        },
        {
          title: "Configuration des moyens de paiment",
          // path: "/docs/moyens-de-paiment",
          collapsable: true,
          children: [
            {
              title: "Stripe",
              path: "/docs/moyens-de-paiments/stripe/login"
            },
            {
              title: "Configuration du site wb-horizon",
              path: "/docs/moyens-de-paiments/stripe/site-config"
            }
          ]
        },
        {
          title: "Creation d'un modèle de page",
          collapsable: true,
          children: [
            {
              title: "introduction",
              path: "/docs/modele-de-page",
            },
          ],
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
            { title: "Association de domaines", path: "/docs/create_models/association_domain" },
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
