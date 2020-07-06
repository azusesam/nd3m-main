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
      <SEO title="About" keywords={[`blog`, `gatsby`, `javascript`, `react`]} />

      <article className="post-content page-template no-image">
        <div className="post-content-body">
          {/* <h2 id="clean-minimal-and-deeply-customisable-london-is-a-theme-made-for-people-who-appreciate-simple-lines-">
              　<p>Nagoya </p>
              <p>Digital Design Developer</p> 
              <p>Meeting</p>
          </h2> */}
          <figure className="kg-card kg-image-card kg-width-full">
            <Img
              fluid={data.nd3mAccounting.childImageSharp.fluid}
              className="kg-image"
              style={{ margin: "1rem auto" }}
            />
            {/* <figcaption >Large imagery is at the heart of this theme</figcaption> */}
          </figure>
          <h3 id="dynamic-styles">About</h3>
          <p>
            名古屋を拠点に、「建築と異分野の融合」を軸とし、
            過去から未来へ時間軸を横断しながら研究・思考・議論をしていくスペシャリスト集団。
            また、「コンピューターを積極的に使うこと」を共通項としアイデアコンペから
            エキシビジョン、実作、実務に渡るまで制作活動・ワークショップも取り組んでいる。
          </p>
          <h3 id="dynamic-styles">活動における2つの軸+α</h3>

          <p>
            ■
            D(Design/Develop)：「コンピューターを積極的に使う」上で制作をしている。
          </p>

          <p>
            ■
            M(Meeting)：ND3M自体がゼミのような形で思考・議論をする機会を設ける。
          </p>

          <p>
            主な領域は、パラメトリックデザイン、ファブリケーションデザイン、
            ジェネラティブデザイン、フィジカルコンピューティングをはじめとする
            最新技術を中心とする。
            また技術だけでなく、その背景や歴史を学ぶことで
            高付加価値なデザインの提供を行う。
          </p>

          <p>コンタクトは右上のTwitterのDMから受付してます。</p>
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
    nd3mAccounting: file(relativePath: { eq: "nd3m.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500, quality: 100) {
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
