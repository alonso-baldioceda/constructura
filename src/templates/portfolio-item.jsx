import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import React from "react"
import SiteMetadata from "../components/SiteMetadata"
// import Button from "../components/Button"
import Card from "../components/Card"
import Carousel from "../components/Carousel"
// import Newsletter from "../components/Newsletter"
import Layout from "../layouts/Layout"

const Portfolio = (props) => {
  const { description, gallery, name, related, summary, thumbnail } =
    props.data.item

  return (
    <Layout>
      <SiteMetadata
        title={name}
        description={summary}
        image={thumbnail.localFile.publicURL}
      />

      <div className="container">
        <div className="mx-auto max-w-xl lg:max-w-full bg-gray-800 my-8 lg:my-12">
          <div className="flex flex-wrap">
            <div className="w-full lg:w-8/12">
              {gallery && gallery.length === 1 && (
                <GatsbyImage
                  image={getImage(gallery[0].localFile)}
                  alt={name}
                />
              )}
              {gallery && gallery.length > 1 && <Carousel images={gallery} />}
            </div>
            <div className="lg:w-4/12 flex relative">
              <div className="p-4 flex flex-col">
                <div className="order-2 lg:order-1">
                  <h1 className="text-xl lg:text-2xl leading-normal font-semibold lg:font-black tracking-normal text-turbo sm:leading-2 mb-2">
                    {name}
                  </h1>
                  <h3 className="text-lg leading-normal font-semibold text-white tracking-normal">
                    {summary}
                  </h3>
                </div>
                {description && (
                  <p className="text-base text-white whitespace-pre-line font-light tracking-wide my-2 order-3 lg:order-2">
                    {description.description}
                  </p>
                )}
                {gallery && gallery.length > 1 && (
                  <div className="hidden lg:block constrols absolute w-24 h-16 lg:mt-auto lg:bottom-6 mx-0 order-1 lg:order-3 mb-6 lg:mb-0">
                    <button
                      aria-label="Previous slide"
                      className="hidden lg:block control-button swiper-button-prev w-6 h-6 sm:w-7 sm:h-7 text-white bg-gray-700 hover:bg-turbo focus:outline-none focus:shadow-outline transition duration-150 ease-out m-0"
                    ></button>
                    <button
                      aria-label="Next slide"
                      className="control-button swiper-button-next w-6 h-6 sm:w-7 sm:h-7 text-white bg-gray-700 hover:bg-turbo focus:outline-none focus:shadow-outline transition duration-150 ease-out m-0"
                    ></button>
                  </div>
                )}
                {/* <p className="absolute bottom-14 font-semibold italic tracking-widest left-32 text-green-400">
                  ({gallery.length} /10)
                </p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {related && (
        <div className="bg-gray-100">
          <div className="container">
            <div className="py-8 mx-auto max-w-xl lg:max-w-full lg:py-12">
              <h1 className="text-2xl lg:text-4xl leading-normal font-extrabold tracking-tight text-gray-900 mb-4 lg:mb-8">
                También pueden gustarte
              </h1>

              <div className="flex flex-wrap -mx-3 lg:-mx-3">
                {related.map((item) => (
                  <div className="w-full sm:w-1/2 lg:w-1/3 p-3" key={item.id}>
                    <Card {...item} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
      {/* <Newsletter /> */}
    </Layout>
  )
}

export default Portfolio

export const query = graphql`
  query PortfolioItemQUery($slug: String!) {
    item: contentfulPortfolio(slug: { eq: $slug }) {
      description {
        description
      }
      gallery {
        id
        localFile {
          childImageSharp {
            gatsbyImageData(width: 900, quality: 50)
          }
        }
        title
      }
      name
      related {
        ...PortfolioCard
      }
      summary
      thumbnail {
        localFile {
          publicURL
        }
      }
    }
  }
`
