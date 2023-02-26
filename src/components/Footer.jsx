import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import { FaFacebook, FaInstagram } from "react-icons/fa"

const Footer = () => {
  const {
    site: {
      meta: { links },
    },
  } = useStaticQuery(graphql`
    query FooterQuery {
      site {
        meta: siteMetadata {
          links {
            facebook
            instagram
          }
        }
      }
    }
  `)

  return (
    <div className="container py-8 md:flex md:items-center md:justify-between">
      <ul className="flex justify-center md:order-2">
        {/* <FooterLink href={links.twitter} icon={FaTwitter} label="Twitter" /> */}
        <FooterLink href={links.facebook} icon={FaFacebook} label="Facebook" />
        <FooterLink
          href={links.instagram}
          icon={FaInstagram}
          label="Instagram"
        />
        {/* <FooterLink
          href={links.pinterest}
          icon={FaPinterest}
          label="Pinterest"
        /> */}
      </ul>
      <div className="mt-8 md:mt-0 md:order-1">
        <p className="text-center text-sm md:text-base text-gray-700">
          &copy; 2022 Estudio Qbo. Derechos reservados.
        </p>
      </div>
    </div>
  )
}

const FooterLink = ({ href, label, icon: Icon }) => {
  return (
    <li className="inline-block pl-6">
      <a
        href={href}
        target="_blank"
        rel="noreferrer noopener"
        className="text-gray-500 hover:text-red-700 transition duration-150 ease-out"
      >
        <span className="sr-only">{label}</span>
        <Icon className="w-7 h-7 fill-current" />
      </a>
    </li>
  )
}

export default Footer
