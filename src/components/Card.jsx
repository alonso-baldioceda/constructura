import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { graphql, Link } from "gatsby"
import { motion } from "framer-motion"
import { string, shape, object, arrayOf } from "prop-types"

const Card = (props) => {
  const { name, slug, summary, thumbnail } = props

  const image = getImage(thumbnail.localFile)

  return (
    <motion.div
      transition={{ duration: 0.25, delay: 0.05 }}
      whileHover={{ scale: 1.0275 }}
      className="bg-white h-full shadow-md overflow-hidden group border-4 border-deepBlue"
    >
      <Link to={`/${slug}`}>
        <div className="group-hover:opacity-75 transition duration-150 ease-out w-full">
          <GatsbyImage image={image} alt={name} className="w-full" />
        </div>
        <div className="p-4 sm:p-5 bg-deepBlue">
          <h1 className="sm:text-lg text-white font-semibold">{name}</h1>
          <p className="text-sm sm:text-base text-white">{summary}</p>
        </div>
      </Link>
    </motion.div>
  )
}

Card.propTypes = {
  name: string.isRequired,
  slug: string.isRequired,
  summary: string.isRequired,
  thumbnail: shape({
    localFile: object,
  }),
  category: arrayOf(string).isRequired,
}

export default Card

export const query = graphql`
  fragment PortfolioCard on ContentfulPortfolio {
    id
    name
    slug
    thumbnail {
      localFile {
        childImageSharp {
          gatsbyImageData(width: 444, height: 342, quality: 50)
        }
      }
    }
    summary
    category
  }
`
