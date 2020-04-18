import React from "react"
// import { Link } from "gatsby"

import Layout from "../../components/compi/layout"
import CompiLogoImage from "../../components/compi/logo_image"
import AAAImage from "../../components/compi/aaa_image"
import SEO from "../../components/compi/seo"
import styled, { createGlobalStyle } from "styled-components"
import { useStaticQuery, graphql } from "gatsby"

import { ArtistDetail } from "../../components/compi/artist"
import { PublishedArtists } from "../../components/compi/artist-def"

import { Global, Container, SectionTitle } from "./index"

const ArtistsPage = () => {
  const url = "https://internalmeeting.com/compi/artists"
  const imageUrl = `https://i.gyazo.com/13c5e6224440597717815d35110799ff.png`
  const ogDescription = `cllctv. が「Internal Meeting Compilation」として鶴舞DAYTRIPとK.Dハポンの支援を目的としたコンピレーションアルバムのリリースを企画いたしました。`

  return (
    <Layout>
      <Global />
      <Container>
        <SEO
          title="Internal Meeting Compilation"
          url={url}
          imageUrl={imageUrl}
          description={ogDescription}
        />

        <a href="/compi">トップへ戻る</a>

        <SectionTitle>ARTIST &amp; MESSAGES</SectionTitle>

        {PublishedArtists.map(id => {
          return <ArtistDetail artistId={id}></ArtistDetail>
        })}

        <a href="/compi">トップへ戻る</a>
      </Container>
    </Layout>
  )
}

export default ArtistsPage
