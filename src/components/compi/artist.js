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
  // justify-content: space-between;
`

export const Artists = () => {
  return (
    <ArtistSection>
      {PublishedArtists.map((id, i) => {
        return <ArtistBox artistId={id} key={i}></ArtistBox>
      })}
    </ArtistSection>
  )
}

const ArtistBoxStyle = styled.div`
  margin-bottom: 10px;
  margin-right: 5px;
  width: calc(25% - 6px);

  @media (max-width: 768px) {
    padding-right: 5px;
    margin-right: 0;
    margin-bottom: 6px;
    width: 50%;

    :nth-child(2n) {
      padding-right: 0px;
      margin-right: 0px;
    }
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
    height: 120px;
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
        title={def.name}
      >
        <ArtistImgStyle url={image.src}></ArtistImgStyle>
      </div>
    </ArtistBoxStyle>
  )
}

const onclickArtistBox = artistId => {
  navigate(`/compi/artists/#${artistId}`)
}
