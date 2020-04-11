import React from "react"
import { Link } from "gatsby"
import styled, { createGlobalStyle } from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Main = styled.h1`
  color: #222;
  display: flex;
  justify-content: center;
  text-align: center;
  height: 100vh;
  width: 100%;
  font-size: 60px;
  font-family: Helvetica, sans-serif;
  font-weight: bold;
  align-items: center;
`
const Cllctv = styled.a`
  position: fixed;
  display: block;
  // background: url(../images/cllctvsmall.png) center center no-repeat round;
  bottom: 0px;
  right: 0px;
  margin-bottom: 24px;
  margin-right: 24px;
  width: 50px;
  height: 50px;
`

const IndexGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    color: #222;
    background-color: #fff;
  }

  a {
    text-decoration: underline;
  }
  a:link {
    color: #222;
  }
  a:hover {
    color: #222;
  }
  a:visited {
    color: #222;
  }
`

const IndexPage = () => {
  return (
    <>
      <IndexGlobal />
      <Main>
        <div>
          <Link to="/compi">INTERNAL MEETING</Link>
        </div>
      </Main>
      <Cllctv
        href="http://cllctv-jp.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <CllctvImage></CllctvImage>
      </Cllctv>
    </>
  )
}

const CllctvImage = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "cllctv.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Img fluid={data.placeholderImage.childImageSharp.fluid} alt="cllctv" />
  )
}

export default IndexPage
