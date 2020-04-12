import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

const query = graphql`
  query {
    houseImage: allFile(
      filter: { absolutePath: { regex: "/compi/" } }
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

const Photo = ({ fluid }) => {
  return <Img fluid={fluid} loading="auto" alt="photo" fadeIn={false} />
}

const Dived = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
  width: 100%;

  @media (max-width: 768px) {
    margin-top: 15px;
  }
`

const Half = styled.div`
  width: 49%;
`

const Slide = ({ house }) => {
  // house is `day` or `hapon`
  const data = useStaticQuery(query)

  // console.log(data.houseImage)

  const images = data.houseImage.edges.filter(e => {
    return e.node.childImageSharp.fluid.src.includes(house)
  })

  const im1 = images[0].node.childImageSharp.fluid
  const im2 = images[1].node.childImageSharp.fluid
  const im3 = images[2].node.childImageSharp.fluid

  return (
    <div>
      <Photo fluid={im1}></Photo>
      <Dived>
        <Half>
          <Photo fluid={im2}></Photo>
        </Half>
        <Half>
          <Photo fluid={im3}></Photo>
        </Half>
      </Dived>
    </div>
  )
}

export default Slide
