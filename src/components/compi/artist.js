import { ArtistDefinitions, PublishedArtists } from "./artist-def"
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled, { css } from "styled-components"
import { navigate } from "@reach/router"

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
      {PublishedArtists.map(id => {
        return <ArtistBox artistId={id}></ArtistBox>
      })}
    </ArtistSection>
  )
}

const ArtistBoxStyle = styled.div`
  margin-bottom: 10px;
  width: calc(25% - 4px);

  @media (max-width: 768px) {
    width: calc(50% - 3px);
  }
`

const ArtistImgStyle = styled.div`
  height: 150px;

  ${props =>
    css`
      background-image: url(${props.url});
    `}
  background-position: center;
  background-size: cover;

  @media (max-width: 768px) {
    height: 100px;
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
      <div
        onClick={() => onclickArtistBox(artistId)}
        style={{ cursor: "pointer" }}
      >
        <ArtistImgStyle url={image.src}></ArtistImgStyle>
        {/* <h5>{def.name}</h5> */}
      </div>
    </ArtistBoxStyle>
  )
}

const onclickArtistBox = artistId => {
  console.log(artistId)
  navigate(`/compi/artists/#${artistId}`)
}

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
      <p style={{ marginTop: 12 }}>{def.message}</p>
    </ArtistDetailStyle>
  )
}
