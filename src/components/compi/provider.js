import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

const query = graphql`
  query {
    providers: allFile(
      filter: { absolutePath: { regex: "/compi/provider_images/" } }
      sort: { fields: [name], order: ASC }
    ) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

export const ProviderOuter = styled.div`
  margin: 20px 0 0;
  width: 100%;
`

const LogoOuter = styled.div`
  float: left;
  margin-right: 15px;
`

export const ProviderLogoLink = ({ provider, url }) => {
  const data = useStaticQuery(query)

  const image = data.providers.edges.find(e => {
    return e.node.childImageSharp.fluid.src.includes(provider)
  }).node.childImageSharp.fluid

  return (
    <LogoOuter>
      <a href={url} target="_blank">
        <img src={image.src} width={100} alt={provider} />
      </a>
    </LogoOuter>
  )
}
