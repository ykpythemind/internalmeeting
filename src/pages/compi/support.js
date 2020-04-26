import React from "react"
// import { Link } from "gatsby"

import Layout from "../../components/compi/layout"
// import CompiLogoImage from "../../components/compi/logo_image"
// import AAAImage from "../../components/compi/aaa_image"
import SEO from "../../components/compi/seo"
import styled from "styled-components"
// import { useStaticQuery, graphql } from "gatsby"

import { Global, Container, SectionTitle } from "./index"

const SupportInfoBox = styled.div`
  margin: 10px auto 40px auto;

  display: flex;
  flex-direction: row;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

const SupportInfoTitle = styled.div`
  padding: 0px 0px 0 0;
  margin: 0;
  width: 30%;

  font-size: 25px;

  @media (max-width: 768px) {
    width: 100%;
  }
`

const SupportInfoDesc = styled.div`
  width: 100%;
`

const Note = `
<iframe
class="note-embed"
src="https://note.com/embed/notes/n657f6504dbcd"
style="border: 0; display: block; max-width: 99%; width: 494px; padding: 0px; margin: 10px 0px; position: static; visibility: visible;"
height="400"
></iframe>
<script
async
src="https://note.com/scripts/embed.js"
charset="utf-8"
></script>
<br>
※ページ下部「サポートする」より。
`

const SupportPage = () => {
  const url = "https://internalmeeting.com/compi/support"
  const imageUrl = `https://i.gyazo.com/13c5e6224440597717815d35110799ff.png`
  const ogDescription = `cllctv. が「Internal Meeting Compilation」として鶴舞DAYTRIPとK.Dハポンの支援を目的としたコンピレーションアルバムのリリースを企画いたしました。`

  return (
    <Layout>
      <Global />
      <Container>
        <SEO
          title="Internal Meeting Compilation その他のサポート方法について"
          url={url}
          imageUrl={imageUrl}
          description={ogDescription}
        />
        <br />
        <a href="/compi">トップへ戻る</a>
        <SectionTitle>その他のサポート方法について</SectionTitle>
        <SupportInfoBox>
          <SupportInfoTitle>note</SupportInfoTitle>
          <SupportInfoDesc
            dangerouslySetInnerHTML={{ __html: Note }}
          ></SupportInfoDesc>
        </SupportInfoBox>
        <SupportInfoBox>
          <SupportInfoTitle>直接のお振込</SupportInfoTitle>
          <SupportInfoDesc>
            1.{" "}
            <a href="https://forms.gle/R2gvwA7PdUs1aTDQ6" target="_blank">
              振り込み申請フォーム
            </a>
            から振り込み人の連絡先と名義を送信してください。
            <br /> 2. 以下の口座に振込をお願いします。<br></br>
            <div style={{ backgroundColor: "#eee", padding: "15px" }}>
              三菱UFJ銀行 四日市支店 普通 0144603 ツジ　トモヒロ
            </div>
          </SupportInfoDesc>
        </SupportInfoBox>
        ※
        以上よりご支援いただきました金額は一定期間ごとに集計の上、全額寄付させていただきます。
        <br />
        <br />
        <a href="/compi">トップへ戻る</a>
      </Container>
    </Layout>
  )
}

export default SupportPage
