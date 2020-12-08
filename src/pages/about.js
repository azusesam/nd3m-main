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
          <h2 id="clean-minimal-and-deeply-customisable-london-is-a-theme-made-for-people-who-appreciate-simple-lines-">
            {/* <p>Nagoya Digital Design Developers Meeting</p>
            <p></p>
           <p></p> */}
          </h2>

          <h3 id="dynamic-styles">
            <p>
              名古屋の建築学生発, <br></br>
              デジタルデザインムーブメントに多様な方面からアプローチするデザイン集団.
            </p>{" "}
          </h3>
          <figure className="kg-card kg-image-card kg-width-full">
            <Img
              fluid={data.nd3maboutAccounting.childImageSharp.fluid}
              className="kg-image"
              style={{ margin: "1rem auto" }}
            />
            {/* <figcaption >Large imagery is at the heart of this theme</figcaption> */}
          </figure>

          <p>
            デジタルデザイン, コンピュテーショナルデザインに関連して,
            アイデアコンペ, エキシビジョン, 実作,
            実務に渡るまでのプロジェクトや, ワークショップなどに取り組んでいる.
            <br></br> 複数の大学の学生が自主的に集まり,
            大学や研究室の枠にとらわれず,
            共通項として「新しい建築を提案したい」「面白い！と話題になることを社会に発信したい」という意思を持っている.{" "}
          </p>
          <p>
            {" "}
            <strong>
              <strong>
                まだ未踏の地を探検し, 新しい価値観と感動を広く発信していく.
              </strong>
            </strong>
          </p>

          <h3 id="dynamic-styles">活動における2つの軸+α</h3>

          <p>
            {" "}
            <strong>
              <strong>
                ■
                D(Design/Develop)：「コンピューターを積極的に使い」制作をしている
              </strong>
            </strong>
            <br></br>
            しかしながら, デジタルデザインだけにこだわるのではなく,
            その時に必要な技術を選び, 活用する.
            多様なバックグラウンドのメンバーが集まるからこそ提供できる価値である.
          </p>

          <p>
            {" "}
            <strong>
              <strong>
                ■
                M(Meeting)：ND3M自体がゼミのような形で思考・議論をする機会を設ける
              </strong>
            </strong>
            <br></br>
            技術を身につけるだけでなく, 勉強,
            議論を重視して活動している.また,外部からもメンバーを募るオープンなリサーチを主宰し,
            成果を発表することも行っている.
          </p>

          <p>
            主な領域は, パラメトリックデザイン, デジタルファブリケーション,
            フィジカルコンピューティングなど.　
            技術だけでなく、その背景や歴史を学ぶことで
            高付加価値なデザインの提供を行う。
          </p>
          <figure className="kg-card kg-image-card kg-width-full">
            <Img
              fluid={data.nd3mAccounting.childImageSharp.fluid}
              className="kg-image"
              style={{ margin: "1rem auto" }}
            />
            {/* <figcaption >Large imagery is at the heart of this theme</figcaption> */}
          </figure>

          <p>コンタクトは右上から.</p>
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
    nd3mAccounting: file(relativePath: { eq: "nd3m.png" }) {
      childImageSharp {
        fluid(maxWidth: 400, quality: 100) {
          ...GatsbyImageSharpFluid
          ...GatsbyImageSharpFluidLimitPresentationSize
        }
      }
    }
    nd3maboutAccounting: file(relativePath: { eq: "about.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000, quality: 100) {
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
