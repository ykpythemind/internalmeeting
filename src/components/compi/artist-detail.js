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

const ArtistDetailStyle = styled.div`
  margin-bottom: 36px;
  margin-top: 36px;
  padding-bottom: 36px;
  border-bottom: 1px solid #666;
`

export const ArtistDetail = ({ artistId }) => {
  const data = useStaticQuery(query)

  const image = data.artists.edges.find(e => {
    return e.node.childImageSharp.fluid.src.includes(artistId)
  }).node.childImageSharp.fluid

  const def = ArtistDefinitions.find(({ id }) => id === artistId)

  return (
    <ArtistDetailStyle>
      <h2 id={def.id}>{def.name}</h2>
      <Img fluid={image}></Img>
      <p style={{ marginTop: 12 }}>{nl2br(def.message)}</p>
    </ArtistDetailStyle>
  )
}

const newlineRegex = /(\r\n|\r|\n)/g

const nl2br = function(str) {
  if (typeof str !== "string") {
    return str
  }

  return str.split(newlineRegex).map(function(line, index) {
    if (line.match(newlineRegex)) {
      return React.createElement("br", { key: index })
    }
    return line
  })
}
