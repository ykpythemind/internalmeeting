import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const query = graphql`
  query {
    coverImage: file(relativePath: { eq: "compi/misc/imc_1600.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export const CoverImage = () => {
  const data = useStaticQuery(query)
  return (
    <a href="https://i.gyazo.com/de0c43340a7bd151c08618600b7c6aac.jpg">
      <Img
        fluid={data.coverImage.childImageSharp.fluid}
        alt="Internal Meeting Compilation Jacket"
      />
    </a>
  )
}
