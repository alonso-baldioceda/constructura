// require("dotenv").config()

// const { CONTENTFUL_SPACE_ID, CONTENTFUL_DELIVERY_TOKEN,  } = process.env

// if (!CONTENTFUL_SPACE_ID || !CONTENTFUL_DELIVERY_TOKEN) {
//   throw new Error(
//     "Contentful spaceId and the access token need to be provided."
//   )
// }

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

process.env.GATSBY_CONCURRENT_DOWNLOAD = 1

module.exports = {
  siteMetadata: {
    title: process.env.GATSBY_WEBSITE_NAME,
    titleTemplate: "%s · Small phrase here",
    description:
      "Diseñamos tu espacio ideal con nuestro toque  moderno y creativo, notarás la luz espacio y orden en tus proyectos de arquitectura, volvemos realidad las ideas que imaginaste.",
    siteUrl: process.env.GATSBY_WEBSITE_DOMAIN,
    image: "./src/images/og_image.jpeg",
    menu: [
      { name: "Home", to: "/" },
      { name: "Proyectos", to: "projects" },
      { name: "Contáctenos", to: "contact" },
    ],
    links: {
      facebook: "https://www.facebook.com/estudioqbocr",
      instagram: "https://www.instagram.com/estudioqbocr/",
    },
    locale: "es",
    whatsapp: "https://wa.me/50660430841",
    messenger: "http://m.me/estudioqbocr",
  },
  flags: { PRESERVE_WEBPACK_CACHE: true },
  plugins: [
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: process.env.GATSBY_GOOGLE_TAG_MANAGER,
        includeInDevelopment: false,
      },
    },
    {
      resolve: "gatsby-plugin-zopfli",
    },
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`],
          placeholder: `dominantColor`,
          quality: 50,
          breakpoints: [576, 768, 992, 1200],
          backgroundColor: `transparent`,
          tracedSVGOptions: {},
          blurredOptions: {},
          jpgOptions: {},
          pngOptions: {},
          webpOptions: {},
          avifOptions: {},
        },
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/data/`,
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: `${__dirname}/src/images/svg/`,
        },
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.GATSBY_CONTENTFUL_SPACE_ID,
        accessToken: process.env.GATSBY_CONTENTFUL_DELIVERY_TOKEN,
        downloadLocal: true,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: process.env.GATSBY_WEBSITE_DOMAIN,
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Estudio Qbo`,
        short_name: `estudioqbo`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#3182ce`,
        display: `minimal-ui`,
        icon: `src/images/svg/logo.svg`,
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/`],
      },
    },
  ],
}
