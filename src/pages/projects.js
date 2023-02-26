import React from "react"

import Layout from "../layouts/Layout"
import FadeInWhenVisible from "../components/FadeInWhenVisible"
import Projects from "../components/Projects"
import LatestProjects from "../components/LatestProjects"
import SiteMetadata from "../components/SiteMetadata"

const ProjectsPage = () => {
  return (
    <Layout>
      <SiteMetadata
        title="Projects"
        description="Observa las ideas de algunos de nuestros clientes tomar forma y convertirse en un proyecto realizable."
      />
      <div className="container">
        <Projects />
      </div>
      <FadeInWhenVisible>
        <div className="bg-gray-100">
          <div className="container">
            <LatestProjects />
          </div>
        </div>
      </FadeInWhenVisible>
    </Layout>
  )
}

export default ProjectsPage
