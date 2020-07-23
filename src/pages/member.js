import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../utils/normalize.css"
import "../utils/css/screen.css"

const AboutPage = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout title={siteTitle}>
      <SEO
        title="Member"
        keywords={[`blog`, `gatsby`, `javascript`, `react`]}
      />

      <article className="post-content page-template no-image">
        <div className="post-content-body">
          {/* <h2 id="clean-minimal-and-deeply-customisable-london-is-a-theme-made-for-people-who-appreciate-simple-lines-">
              　<p>Nagoya </p>
              <p>Digital Design Developer</p> 
              <p>Meeting</p>
          </h2> */}
          <figure className="kg-card kg-image-card kg-width-full">
            <Img
              fluid={data.medyAccounting.childImageSharp.fluid}
              className="kg-image"
              style={{ margin: "1rem auto" }}
            />
            {/* <figcaption >Large imagery is at the heart of this theme</figcaption> */}
          </figure>
          <h3 id="dynamic-styles">Medy</h3>
          <p>
            池本しょうこ<br></br>
            名古屋工業大学大学院在学中<br></br>
            専門分野：近代建築史(修士) , 建築計画(学部)<br></br>
            岐阜市出身。趣味はデジタル絵を描くこと、arduinoとesp32を使った電子工作。
            <br></br>
            twitter : MEDY @408321date{" "}
          </p>

          <figure className="kg-card kg-image-card kg-width-full">
            <Img
              fluid={data.konAccounting.childImageSharp.fluid}
              className="kg-image"
              style={{ margin: "1rem auto" }}
            />
            {/* <figcaption >Large imagery is at the heart of this theme</figcaption> */}
          </figure>
          <h3 id="dynamic-styles">Consomme</h3>
          <p>
            専門分野：建築計画<br></br>
            建築設計を新しい技術で楽にしたり飛躍させたりして生きていきたい
          </p>

          <figure className="kg-card kg-image-card kg-width-full">
            <Img
              fluid={data.azuAccounting.childImageSharp.fluid}
              className="kg-image"
              style={{ margin: "1rem auto" }}
            />
            {/* <figcaption >Large imagery is at the heart of this theme</figcaption> */}
          </figure>
          <h3 id="dynamic-styles">Azu</h3>
          <p>
            田住 梓<br></br>
            名古屋工業大学 社会工学科 建築・デザイン分野 3年<br></br>
            東京都西東京市出身<br></br>
            道具を触ることが好き(自転車、3Dプリンタ、パソコン、カメラ、工具、登山用品などなど)。愛猫の名前はまりん。
            <br></br>
            最近は3DプリンタとARにモチベーション有り。  <br></br>
            Twitter:[AZU(@azusa353)](https://twitter.com/azusa353)
          </p>

          <figure className="kg-card kg-image-card kg-width-full">
            <Img
              fluid={data.nakazimaAccounting.childImageSharp.fluid}
              className="kg-image"
              style={{ margin: "1rem auto" }}
            />
            {/* <figcaption >Large imagery is at the heart of this theme</figcaption> */}
          </figure>
          <h3 id="dynamic-styles">Nakajima</h3>
          <p>
            中島宏徳<br></br>
            三重大学大学院在学中<br></br>
            専門分野：近代住宅史<br></br>
            土岐市出身（新首都は東京から東濃へ）<br></br>
            趣味：イラストと薫製。現在はフォトグラメトリとunityを勉強中。
            <br></br>
            Twitter：ナカジマ @bokunori302
          </p>

          <figure className="kg-card kg-image-card kg-width-full">
            <Img
              fluid={data.konoAccounting.childImageSharp.fluid}
              className="kg-image"
              style={{ margin: "1rem auto" }}
            />
            {/* <figcaption >Large imagery is at the heart of this theme</figcaption> */}
          </figure>
          <h3 id="dynamic-styles">Ko-no</h3>
          <p>
            河野哲也<br></br>
            中部大学工学部研究科建設専攻　在学中<br></br>
            専門分野:意匠設計+構造設計<br></br>
            愛知県安城市出身（日本のデンマーク）<br></br>
            趣味は造形物製作、チェロ、化石掘、サッカー。
          </p>

          <figure className="kg-card kg-image-card kg-width-full">
            <Img
              fluid={data.abeAccounting.childImageSharp.fluid}
              className="kg-image"
              style={{ margin: "1rem auto" }}
            />
            {/* <figcaption >Large imagery is at the heart of this theme</figcaption> */}
          </figure>
          <h3 id="dynamic-styles">Be-ah</h3>
          <p>
            阿部宥太郎<br></br>
            専門分野：都市シミュレーション(仮)<br></br>
            大阪府出身<br></br>
            Podcastや芸人のラジオなどをよく聴きます。あと音楽も好きです
          </p>
          {/* <p>
            Both post and page templates are light and minimal, with all the
            focus on the content while the design of the theme gets out of the
            way. Beneath the hood, London enjoys the full power of the{" "}
            <a href="https://docs.ghost.org/api/handlebars-themes/">
              Ghost Handlebars Theme API
            </a>{" "}
            to provide limitless customisation options and dynamic styles.
          </p>
          <p>
            Don't forget to check out the{" "}
            <a href="https://docs.ghost.org/integrations/">
              Ghost Integrations Directory
            </a>{" "}
            for more ways to integrate Ghost with your favourite services.
          </p> */}
        </div>
      </article>
    </Layout>
  )
}

const indexQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    medyAccounting: file(relativePath: { eq: "member/medy.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500, quality: 100, grayscale: true) {
          ...GatsbyImageSharpFluid
          ...GatsbyImageSharpFluidLimitPresentationSize
        }
      }
    }
    konAccounting: file(relativePath: { eq: "member/kon.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500, quality: 100, grayscale: true) {
          ...GatsbyImageSharpFluid
          ...GatsbyImageSharpFluidLimitPresentationSize
        }
      }
    }
    nakazimaAccounting: file(relativePath: { eq: "member/nakazima.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500, quality: 100, grayscale: true) {
          ...GatsbyImageSharpFluid
          ...GatsbyImageSharpFluidLimitPresentationSize
        }
      }
    }
    konoAccounting: file(relativePath: { eq: "member/kono.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500, quality: 100, grayscale: true) {
          ...GatsbyImageSharpFluid
          ...GatsbyImageSharpFluidLimitPresentationSize
        }
      }
    }
    azuAccounting: file(relativePath: { eq: "member/azu.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500, quality: 100, grayscale: true) {
          ...GatsbyImageSharpFluid
          ...GatsbyImageSharpFluidLimitPresentationSize
        }
      }
    }
    abeAccounting: file(relativePath: { eq: "member/abe.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500, quality: 100, grayscale: true) {
          ...GatsbyImageSharpFluid
          ...GatsbyImageSharpFluidLimitPresentationSize
        }
      }
    }
  }
`

export default props => (
  <StaticQuery
    query={indexQuery}
    render={data => (
      <AboutPage location={props.location} data={data} {...props} />
    )}
  />
)
