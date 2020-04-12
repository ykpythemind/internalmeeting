import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

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

const Slide = ({ house }) => {
  // house is `day` or `hapon`
  const data = useStaticQuery(query)

  // console.log(data.houseImage)

  const images = data.houseImage.edges.filter(e => {
    return e.node.childImageSharp.fluid.src.includes(house)
  })

  console.log(images)

  return (
    <div>a</div>
    // <Img
    //   // fluid={data.logo.childImageSharp.fluid}
    //   loading="auto"
    //   alt="Internal Meeting Compilation"
    //   fadeIn={false}
    // />
  )
}

export default Slide
