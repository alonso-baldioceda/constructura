const path = require(`path`)

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  const typeDefs = `
    type contentfulPortfolioDescriptionTextNode implements Node {
      description: String
    }
    type ContentfulPortfolio implements Node {
      description: contentfulPortfolioDescriptionTextNode @link(by: "id", from: "description___NODE")
      gallery: [ContentfulAsset] @link(by: "id", from: "gallery___NODE")
      id: ID!
      name: String!
      related: [ContentfulPortfolio] @link(by: "id", from: "related___NODE")
      slug: String!
      summary: String!
      thumbnail: ContentfulAsset @link(by: "id", from: "thumbnail___NODE")
      url: String
      category: [String!]
    }
  `
  createTypes(typeDefs)
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    graphql(`
      {
        portfolio: allContentfulPortfolio {
          nodes {
            slug
          }
        }
      }
    `).then(({ errors, data }) => {
      if (errors) {
        reject(errors)
      }

      if (data && data.portfolio) {
        const component = path.resolve("./src/templates/portfolio-item.jsx")
        data.portfolio.nodes.map(({ slug }) => {
          createPage({
            path: `/${slug}`,
            component,
            context: { slug },
          })
        })
      }

      resolve()
    })
  })
}

exports.onCreateWebpackConfig = ({
  stage,
  actions,
  getConfig,
  loaders,
  plugins,
}) => {
  const config = getConfig()
  const miniCssExtractPluginIndex = config.plugins.findIndex(
    (plugin) => plugin.constructor.name === "MiniCssExtractPlugin"
  )

  if (miniCssExtractPluginIndex > -1) {
    // remove miniCssExtractPlugin from plugins list
    config.plugins.splice(miniCssExtractPluginIndex, 1)

    // re-add mini-css-extract-plugin
    if (stage === "build-javascript") {
      config.plugins.push(
        plugins.extractText({
          filename: `[name].[contenthash].css`,
          chunkFilename: `[name].[contenthash].css`,
          ignoreOrder: true,
        })
      )
    } else {
      config.plugins.push(
        plugins.extractText({
          filename: `[name].css`,
          chunkFilename: `[id].css`,
          ignoreOrder: true,
        })
      )
    }
  }
  actions.replaceWebpackConfig(config)
}
