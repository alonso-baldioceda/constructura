import React from "react"
import { graphql } from "gatsby"

import Layout from "../layouts/Layout"
import SiteMetadata from "../components/SiteMetadata"
import FadeInWhenVisible from "../components/FadeInWhenVisible"
import Slider from "../components/Slider"
import Services from "../components/Services"
import LatestProjects from "../components/LatestProjects"
// import Newsletter from "../components/Newsletter"

// Colors:
// https://coolors.co/9e6240-dea47e-cd4631-f8f2dc-81adc8

const IndexPage = ({ data }) => {
  const { allContentJson, slider } = data

  // const { hero, services } = allContentJson.edges[0].node
  const { slidesData, services } = allContentJson.edges[0].node

  const {
    headline: serviceHeadline,
    description: serviceDescription,
    list,
  } = services

  const { edges: heroImagesList } = slider

  return (
    <Layout>
      <SiteMetadata title="Home" description="Portfolio of Estudio Qbo" />
      <div className="pt-8 lg:pt-12">
        <div className="container">
          <div className="mx-auto max-w-xl lg:max-w-full">
            <Slider images={heroImagesList} content={slidesData} />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="py-8 mx-auto max-w-xl lg:max-w-full lg:py-12">
          <div className="flex flex-col mb-6 lg:flex-row md:mb-10">
            <div className="lg:w-1/2">
              <h1 className="mb-6 font-black text-2xl tracking-tight text-gray-900 lg:text-3xl sm:leading-none xl:max-w-lg lg:mr-6">
                {serviceHeadline}
              </h1>
            </div>
            <div className="lg:w-1/2">
              <p className="text-base text-gray-700">{serviceDescription}</p>
            </div>
          </div>
          <Services services={list} />
        </div>
      </div>
      <FadeInWhenVisible>
        <div className="bg-gray-100">
          <div className="container">
            <LatestProjects />
          </div>
        </div>
      </FadeInWhenVisible>
      {/* <Newsletter /> */}
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query HomeQuery {
    allContentJson {
      edges {
        node {
          hero {
            title
            description {
              text
            }
          }
          slidesData {
            title
            description
            alt
          }
          services {
            headline
            description
            list {
              title
              list {
                title
              }
            }
          }
        }
      }
    }
    slider: allFile(
      filter: {
        extension: { regex: "/(jpg)|(png)|(jpeg)/" }
        relativeDirectory: { eq: "hero" }
      }
      sort: { order: ASC, fields: name }
    ) {
      totalCount
      edges {
        node {
          base
          name
          id
          childImageSharp {
            gatsbyImageData(width: 900, quality: 50)
          }
        }
      }
    }
  }
`
