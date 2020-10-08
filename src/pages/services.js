import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroSection from "../components/Reusable/HeroSection"
import Infoblock from "../components/Reusable/Infoblock"
import Servicephotosection from "../components/Services/Servicephotosection"

const ServicePage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <HeroSection 
      img={data.img.childImageSharp.fluid}
      title="Our Services"
      subtitle=""
      heroclass="about-background"
    />
    <Infoblock heading="Read Our Services" />
    <Servicephotosection />
  </Layout>
)

export const query = graphql `
{
  img: file(relativePath: { eq: "about.png" }) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
}
`

export default ServicePage
