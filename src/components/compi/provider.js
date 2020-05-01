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
  margin: 20px auto 0;
  width: 80%;
  display: flex;
  justify-content: center;
`

const LogoOuter = styled.div`
  margin-right: 15px;
`

const Logo = styled.img`
  width: 150px;
  @media (max-width: 768px) {
    width: 100px;
  }
`

export const ProviderLogoLink = ({ provider, url }) => {
  const data = useStaticQuery(query)

  const image = data.providers.edges.find(e => {
    return e.node.childImageSharp.fluid.src.includes(provider)
  }).node.childImageSharp.fluid

  return (
    <LogoOuter>
      <a href={url} target="_blank">
        <Logo src={image.src} alt={provider} />
      </a>
    </LogoOuter>
  )
}
