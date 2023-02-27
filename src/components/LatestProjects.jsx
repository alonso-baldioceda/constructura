import React from "react"
import Card from "../components/Card"
import { useStaticQuery, graphql } from "gatsby"

const LatestProjects = () => {
  const data = useStaticQuery(graphql`
    query LatestProjectsQuery {
      portfolio: allContentfulPortfolio(limit: 3) {
        nodes {
          ...PortfolioCard
        }
      }
    }
  `)

  const { portfolio } = data

  return (
    <div className="py-8 mx-auto max-w-xl lg:max-w-full lg:py-12">
      <h1 className="font-black text-2xl mb-4 font-bold leading-none tracking-tight text-deepBlue lg:text-3xl md:mx-auto">
        Últimos Proyectos
      </h1>
      {portfolio && portfolio.nodes.length > 0 ? (
        <div className="flex flex-wrap -mx-3 lg:-mx-3">
          {portfolio.nodes.map((item) => (
            <div className="w-full sm:w-1/2 lg:w-1/3 p-3" key={item.id}>
              <Card {...item} />
            </div>
          ))}
        </div>
      ) : (
        <div className="container">No projects found.</div>
      )}
    </div>
  )
}

export default LatestProjects
