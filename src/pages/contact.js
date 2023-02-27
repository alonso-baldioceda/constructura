import React from "react"
import { graphql } from "gatsby"
import Layout from "../layouts/Layout"
import Form from "../components/Form"
import SiteMetadata from "../components/SiteMetadata"

const ContactPage = ({ data }) => {
  const { allContentJson } = data
  const { contact } = allContentJson.edges[0].node
  const { cardsData, form } = contact || {}

  return (
    <Layout>
      <SiteMetadata title="Contact" description="Contacte a Coesa para ..." />
      <Form card={cardsData} form={form} />
    </Layout>
  )
}

export default ContactPage

export const query = graphql`
  query ContactQuery {
    allContentJson {
      edges {
        node {
          contact {
            cardsData {
              iconUrl
              title
              list {
                text
              }
            }
            form {
              heading
              body
              firstName
              lastName
              email
              phone
              subject
              message
              submitting
              submit
              validation {
                firstNameRequired
                lastNameRequired
                emailRequired
                emailInvalid
                phoneRequired
                subjectRequired
                messageRequired
                successHeader
                successBody
                errorHeader
                errorBody
              }
            }
          }
        }
      }
    }
  }
`
