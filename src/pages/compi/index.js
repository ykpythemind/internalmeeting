import React from "react"
import { Link } from "gatsby"

import Layout from "../../components/compi/layout"
import CompiLogoImage from "../../components/compi/logo_image"
import AAAImage from "../../components/compi/aaa_image"
import SEO from "../../components/compi/seo"
import styled, { createGlobalStyle } from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Slide from "../../components/compi/slide"
import { Artists } from "../../components/compi/artist"
import { SongDef } from "../../components/compi/artist-def"

export const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    color: #222;
    background-color: #fff;
  }

  a:link {
    color: #1a0dab;
  }
  a:hover {
    color: #1a0dab;
  }
  a:visited {
    color: #1a0dab;
  }
`

export const Container = styled.div`
  font-size: 14pt;
  font-family: "游ゴシック体", YuGothic, "游ゴシック Medium", "Yu Gothic Medium",
    "游ゴシック", "Yu Gothic", "メイリオ", sans-serif;
  margin: 0 auto;
  width: 90%;
  max-width: 860px;
  padding: 0 1.0875rem 1.45rem;

  @media (max-width: 768px) {
    font-size: 12pt;
    width: 94%;
  }
`

export const SectionTitle = styled.h2`
  margin: 50px auto 30px auto;
  text-align: center;
  padding: 0;
  font-size: 44pt;
  font-style: italic;

  @media (max-width: 768px) {
    font-size: 25pt;
  }
`

const ReleaseInfoBox = styled.div`
  margin: 50px auto 30px auto;

  display: flex;
  flex-direction: row;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

const ReleaseInfoSong = styled.div`
  padding: 0px 7px 0 0;
  width: calc(50% - 4px);

  @media (max-width: 768px) {
    width: 100%;
  }
`

const SongStyle = styled.div`
  display: flex;
  font-size: 90%;
  line-height: 1.6rem;

  @media (max-width: 768px) {
    line-height: 1.1rem;
  }
`

const SongTitleStyle = styled.div`
  width: 30px;
  flex-shrink: 0;

  @media (max-width: 768px) {
    width: 30px;
  }
`

const Song = ({ num, title, artist }) => {
  return (
    <SongStyle>
      <SongTitleStyle>{num}.</SongTitleStyle>
      <div>{`${title} - ${artist}`}</div>
    </SongStyle>
  )
}

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

const Small = styled.div`
  font-size: 12pt;
`

const MessageName = styled.h3`
  font-size: 24pt;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 19pt;
  }
`

const HouseName = styled.h3`
  font-size: 24pt;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 19pt;
  }
`

const Gokakunin = styled.h3`
  margin-top: 50px;
  font-size: 18pt;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 17pt;
  }
`

const Message = styled.div`
  border: 4px solid #222;
  padding: 16px;
  margin-top: 20px;
  margin-bottom: 20px;
`

const query = graphql`
  query {
    placeholderImage: file(relativePath: { eq: "cllctv.png" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    ogpImage: file(relativePath: { eq: "imc_ogp.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    coverImage: file(relativePath: { eq: "compi/misc/imc_1600.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const CllctvImage = () => {
  const data = useStaticQuery(query)
  return (
    <Img fluid={data.placeholderImage.childImageSharp.fluid} alt="cllctv" />
  )
}

const CoverImage = () => {
  const data = useStaticQuery(query)
  return (
    <a href="https://i.gyazo.com/de0c43340a7bd151c08618600b7c6aac.jpg">
      <Img
        fluid={data.coverImage.childImageSharp.fluid}
        alt="Internal Meeting Compilation Jacket"
      />
    </a>
  )
}

const IndexPage = () => {
  const url = "https://internalmeeting.com/compi/"
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
        <CompiLogoOuter>
          <CompiLogoImage />
        </CompiLogoOuter>

        <center style={{ fontSize: 13 }}>
          2020/4/26 第二弾アーティストと収録曲を公開しました。{" "}
        </center>

        <SectionTitle>CONCEPT</SectionTitle>

        <CenterP>
          {`昨今の新型コロナウイルスの蔓延により、音楽業界は大きな危機を迎えています。当たり前だった日々はあまりに突然に終わりを告げ、どうすれば生き残れるか、それを真剣に考えねばならないほど、事態は深刻なものです。`}
          <br />
          {`そんな中で、自分たちがお世話になった居場所だけでも自分たちの手でサポートしたい。そんな意思を持って今回、二つのライブハウス、鶴舞DAYTRIPとK.Dハポンの支援を目的とした、コンピレーションアルバムのリリースを企画いたしました。`}
        </CenterP>

        <CenterP style={{ marginTop: 30 }}>
          発起人
          <br />
          トモヒロツジ /{" "}
          <a href="http://cllctv-jp.com" target="_blank">
            cllctv.
          </a>
          <br />
          ykpythemind（伊藤薫人）/{" "}
          <a href="https://nkwors.com" target="_blank">
            猫を堕ろす
          </a>
        </CenterP>

        <SectionTitle>PURPOSE</SectionTitle>

        <center style={{ marginBottom: 45 }}>
          愛知県名古屋市 鶴舞DAYTRIP、K.D ハポンの両ライブハウス継続のための支援
        </center>

        <HouseName>鶴舞DAYTRIP</HouseName>
        <center style={{ marginBottom: 40 }}>
          <Slide house="day"></Slide>
          <br />
          <a href="https://www.daytrip.club/" target="_blank">
            鶴舞DAYTRIPのHPを見る
          </a>
        </center>

        <HouseName>K.Dハポン</HouseName>
        <center>
          <Slide house="hapon"></Slide>
          <br />
          <a href="http://www2.odn.ne.jp/kdjapon/" target="_blank">
            K.DハポンのHPを見る
          </a>
        </center>

        <SectionTitle>RELEASE INFORMATION</SectionTitle>

        <CoverImage></CoverImage>

        <ReleaseInfoBox>
          <ReleaseInfoSong>
            {SongDef.slice(0, 15).map((e, i) => (
              <Song
                num={e.num}
                title={e.title}
                artist={e.artist}
                key={i}
              ></Song>
            ))}
          </ReleaseInfoSong>
          <ReleaseInfoSong>
            {SongDef.slice(15, 31).map((e, i) => (
              <Song
                num={e.num}
                title={e.title}
                artist={e.artist}
                key={i}
              ></Song>
            ))}
          </ReleaseInfoSong>
        </ReleaseInfoBox>

        <CenterP>
          配信開始予定日：5/1（金） <br />
          配信媒体：bandcamp、各種サブスクリプション <br />
          支援方法：bandcampでのアルバムの購入、サブスクリプションでの再生、各種投げ銭
        </CenterP>

        <SectionTitle>ARTISTS</SectionTitle>

        <Artists></Artists>

        <CenterP style={{ marginTop: 20 }}>
          <Link to="/compi/artists">アーティストのメッセージを見る</Link>
        </CenterP>

        <SectionTitle>MESSAGE</SectionTitle>

        <Message>
          <MessageName>トモヒロツジ / cllctv.</MessageName>
          {`DAYTRIPは前店長である八木さんの頃から、バンド活動の拠点としてずっとお世話になってきた場所でした。自主企画はいつもDAYTRIPでしたし、普段のブッキングライブでも多くのバンドとつながりを結んでくれた、まさに自分の音楽活動の原点と言える場所です。`}
          <br />
          {`ハポンは、cllctv.を初めてからずっとイベントで使わせてもらっているライブハウスで、 モモジさんの人柄が生み出す温かなベニューはまさに唯一無二の居場所です。`}
          <br />
          {`今回のこの企画が、この両ライブハウスに所縁のある多くの人をつなげ、その思いを形にして受けた恩を返す企画となれることを願います。皆様の賛同をお待ちしています。`}
        </Message>

        <Message>
          <MessageName>ykpythemind（伊藤薫人） / 猫を堕ろす</MessageName>
          {`俺が名古屋でライブハウスというものに出ようと思ったとき、ライブハウスの偉そうな人に説教されそうとか、上下関係とか厳しそうみたいなイメージで気が引けた記憶がある。 `}
          {`DaytripとKDハポンはそんなイメージを覆してくれたライブハウスだ。まさか自分がこんなにライブハウスに通うようになるとは思わなかった。Daytrip/ハポン（位置的には向かい合わせにありますね）の近くに引っ越したときはワクワクしながら自転車を漕いで通った。`}
          <br />
          ハポンは結構アコースティックな感じのハコなので、自分みたいなバンドをやってる人間が出るところではないのかもと思っていたが、店長のモモジさんは何故か激推ししてくれている。
          モモジさんが「このCDをユキトくんが自分でミックスしたのすごいね！車で聞いても他のCDと同じくらい音圧あって良い！」と褒めてくださったとき、まさに意識していたことを褒められたので一生付いていきますと思ったものだ。(車での音圧感を褒められるのは新鮮です)
          <br />
          Daytripとハポンにはとても感謝しているし、これからも遊びたいと思ってるし、今回こういう形でサポートすることになった。皆さんも力を貸してくれると嬉しい。
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

        <Small>
          <p>
            {`*本企画はDAYTRIP 村田さん、K.D ハポン モモジさんの両名のご賛同をいただいていますが、あくまでも辻、伊藤両名による企画となります。そのため、本企画に対するご意見は辻、伊藤へ よろしくお願いいたします。`}
          </p>
          <p>{`*本企画による売上は全てDAYTRIP、K.D ハポンに寄付いたします。`}</p>
        </Small>

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

        <div style={{ marginTop: 80, marginBottom: 30 }}>
          <AAAImage />
        </div>
      </Container>
    </Layout>
  )
}

export default IndexPage
