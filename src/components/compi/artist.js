import { ArtistDefinitions } from "./artist-def"
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

const query = graphql`
  query {
    artists: allFile(
      filter: { absolutePath: { regex: "/compi/artists/" } }
      sort: { fields: [name], order: ASC }
    ) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 600) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

const ArtistSection = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-between;
`

export const Artists = () => {
  return (
    <ArtistSection>
      <ArtistBox artistId="qulague"></ArtistBox>
      <ArtistBox artistId="goodbye"></ArtistBox>
      <ArtistBox artistId="muscle"></ArtistBox>
      <ArtistBox artistId="frenzy"></ArtistBox>
      <ArtistBox artistId="goodbye"></ArtistBox>
      <ArtistBox artistId="muscle"></ArtistBox>
    </ArtistSection>
  )
}

const ArtistBoxStyle = styled.div`
  margin-bottom: 16px;
  width: calc(25% - 4px);

  @media (max-width: 768px) {
    width: calc(33% - 3px);
  }
`

const ArtistBox = ({ artistId }) => {
  const data = useStaticQuery(query)

  const image = data.artists.edges.find(e => {
    return e.node.childImageSharp.fluid.src.includes(artistId)
  }).node.childImageSharp.fluid

  const def = ArtistDefinitions.find(({ id }) => id === artistId)

  return (
    <ArtistBoxStyle>
      <Img fluid={image}></Img>
      <h5>{def.name}</h5>
    </ArtistBoxStyle>
  )
}
