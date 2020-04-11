import React from "react"
import { Link } from "gatsby"

import Layout from "../../components/compi/layout"
import CompiLogoImage from "../../components/compi/logo_image"
import AAAImage from "../../components/compi/aaa_image"
import SEO from "../../components/compi/seo"
import styled, { createGlobalStyle } from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    color: #222;
  }
`

/*  // :root {
  //     font-size: ${px2vw(24)};

  //     @media (min-width: 768px) {
  //       font-size: ${px2vw(18)};
  //     }

  //     @media (min-width: 1024px) {
  //       font-size: ${px2vw(16)};
  //     }
  //   } */

const Container = styled.div`
  font-size: 14pt;
  font-family: "游ゴシック体", YuGothic, "游ゴシック Medium", "Yu Gothic Medium",
    "游ゴシック", "Yu Gothic", "メイリオ", sans-serif;
  margin: 0 auto;
  width: 90%;
  max-width: 860px;
  padding: 0 1.0875rem 1.45rem;

  @media (max-width: 768px) {
    font-size: 12pt;
  }
`

const SectionTitle = styled.h2`
  margin: 50px auto 30px auto;
  text-align: center;
  padding: 0;
  font-size: 44pt;
  font-style: italic;

  @media (max-width: 768px) {
    font-size: 25pt;
  }
`

const CompiLogoOuter = styled.div`
  margin-top: 70px;
  margin-bottom: 50px;
  padding-bottom: 30px;
  @media (max-width: 768px) {
    margin-bottom: 20px;
    padding-bottom: 5px;
  }
`

const CenterP = styled.p`
  text-align: center;
  margin-top: 0;
`

const MessageName = styled.h3`
  font-size: 24pt;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 19pt;
  }
`

const Gokakunin = styled.h3`
  margin-top: 50px;
  font-size: 24pt;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 19pt;
  }
`

const Center = ({ message }) => {
  return (
    <CenterP>
      {message}
      {/* {message.split("\n").map((e, i) => (
        <React.Fragment key={i}>
          {e} <br />
        </React.Fragment>
      ))} */}
    </CenterP>
  )
}

const Message = styled.div`
  border: 4px solid #222;
  padding: 16px;
  margin-top: 20px;
  margin-bottom: 20px;
`

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

const IndexPage = () => (
  <Layout>
    <Global />
    <Container>
      <SEO title="Internal Meeting Compilation" />
      <CompiLogoOuter>
        <CompiLogoImage />
      </CompiLogoOuter>

      <SectionTitle>CONCEPT</SectionTitle>

      <Center message={conceptMessage}></Center>

      <CenterP style={{ marginTop: 30 }}>
        発起人
        <br />
        トモヒロツジ / <a href="http://cllctv-jp.com">cllctv.</a>
        <br />
        ykpythemind（伊藤薫人）/ <a href="https://nkwors.com">猫を堕ろす</a>
      </CenterP>

      <SectionTitle>PURPOSE</SectionTitle>

      <center>
        愛知県名古屋市 鶴舞DAYTRIP、K.D ハポンの両ライブハウス継続のための支援
      </center>

      <SectionTitle>RELEASE INFORMATION</SectionTitle>

      <CenterP>
        配信開始予定日：5/1（金） <br />
        配信媒体：bandcamp、各種サブスクリプション <br />
        支援方法：bandcampでのアルバムの購入、サブスクリプションでの再生、各種投げ銭
      </CenterP>

      <SectionTitle>MESSAGE</SectionTitle>

      <Message>
        <MessageName>トモヒロツジ / cllctv.</MessageName>
        {TTMessage}
      </Message>

      <Message>
        <MessageName>ykpythemind（伊藤薫人） / 猫を堕ろす</MessageName>
        {YKMessage}
      </Message>

      <SectionTitle>STAFF</SectionTitle>

      <center>
        文責：辻知広
        <br />
        写真提供：志賀正太郎
        <br />
        powered by{" "}
        <a href="http://cllctv-jp.com" target="_blank">
          cllctv.
        </a>
      </center>
      <div
        style={{
          width: "20%",
          minWidth: 50,
          textAlign: "center",
          margin: "10px auto 0",
        }}
      >
        <CllctvImage />
      </div>
      <center style={{ marginTop: 16 }}>
        連絡先: cllctv.rvw@gmail.com
        <br />
        トモヒロツジ (
        <a href="https://twitter.com/tomo_at" target="_blank">
          @tomo_at
        </a>
        )
        <br />
        ykpythemind (
        <a href="https://twitter.com/ykpythemind" target="_blank">
          @ykpythemind
        </a>
        )
      </center>

      <Gokakunin>ご確認ください</Gokakunin>

      <p>
        *本企画はDAYTRIP 村田さん、K.D ハポン
        モモジさんの両名のご賛同をいただいていますが
        あくまでも辻、伊藤両名による企画となります。そのため、本企画に対するご意見は辻、伊藤へ
        よろしくお願いいたします。
      </p>
      <p>
        *本企画は辻、伊藤のいずれかと親交のある方々を中心にお声がけしています。
        両名いずれかと親交があり、参加を希望される方がいらっしゃいましたら、お手数ではありますが、
        ご連絡をお願いいたします。
      </p>

      <footer
        style={{
          marginTop: 90,
          marginLeft: "auto",
          marginRight: "auto",
          marginBottom: 20,
          textAlign: "right",
        }}
      >
        © 2020
        {` `}
        <a
          href="http://cllctv-jp.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          cllctv.
        </a>
      </footer>

      <div style={{ marginTop: 30, marginBottom: 30 }}>
        <AAAImage />
      </div>
    </Container>
  </Layout>
)

const conceptMessage = `昨今の新型コロナウイルスの蔓延により、音楽業界は大きな危機を迎えています。
当たり前だった日々はあまりに突然に終わりを告げ、どうすれば生き残れるか、
それを真剣に考えねばならないほど、事態は深刻なものです。

そんな中で、自分たちがお世話になった居場所だけでも自分たちの手でサポートしたい。
そんな意思を持って今回、二つのライブハウス、鶴舞DAYTRIPとK. D ハポンの支援を目的とした、
コンピレーションアルバムのリリースを企画いたしました。
`

const TTMessage = `DAYTRIPは前店長である八木さんの頃から、バンド活動の拠点としてずっとお世話になってきた
場所でした。自主企画はいつもDAYTRIPでしたし、普段のブッキングライブでも多くのバンドと
つながりを結んでくれた、まさに自分の音楽活動の原点と言える場所です。
ハポンは、cllctv.を初めてからずっとイベントで使わせてもらっているライブハウスで、
モモジさんの人柄が生み出す温かなベニューはまさに唯一無二の居場所です。
今回のこの企画が、この両ライブハウスに所縁のある多くの人をつなげ、その思いを形にして
受けた恩を返す企画となれることを願います。皆様の賛同をお待ちしています。`

const YKMessage = `DAYTRIPは前店長である八木さんの頃から、バンド活動の拠点としてずっとお世話になってきた
場所でした。自主企画はいつもDAYTRIPでしたし、普段のブッキングライブでも多くのバンドと
つながりを結んでくれた、まさに自分の音楽活動の原点と言える場所です。
ハポンは、cllctv.を初めてからずっとイベントで使わせてもらっているライブハウスで、
モモジさんの人柄が生み出す温かなベニューはまさに唯一無二の居場所です。
今回のこの企画が、この両ライブハウスに所縁のある多くの人をつなげ、その思いを形にして
受けた恩を返す企画となれることを願います。皆様の賛同をお待ちしています。`

export default IndexPage
