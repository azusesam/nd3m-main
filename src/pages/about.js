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
              コンピュテーショナルデザインを基盤に <br></br>
              研究・制作活動を行うクリエイティブチーム
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
            {" "}
            建築情報学領域を中心に,
            制作・研究・勉強会・イベント企画など, 幅広く活動中.  
            <br></br>
            大学や企業, 専門分野の枠にとらわれず, コンピュテーショナルデザインを共通項に集まった多様なメンバーで構成されている.
            <br></br>
            <strong>
              <strong>
                まだ未踏の地を探検し, 新しい価値観と感動を広く発信していく.
              </strong>
            </strong>
            <br></br>
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

          <p>
            <h4>沿革</h4>
            <table>
              <tbody>
                <tr>
                  <td>2019.11</td>
                  <td>ND3Mの名前を初めて用いたイベント "Enjointing Spagetoini" 開催
                  </td>
                </tr>
                <tr>
                  <td>2020.03</td>
                  <td>愛知県の建築学生によるチームとして本格的に活動を開始</td>
                </tr>
                <tr>
                  <td>2021.12</td>
                  <td>第3期始動, 名古屋以外のメンバーも迎え新体制へ</td>
                </tr>
                <tr>
                  <td>2022.04</td>
                  <td>社会人のメンバーが誕生し, 新たなステップへ</td>
                </tr>
              </tbody>
            </table>
          </p>
            

          <p>
          <h4>お問い合わせ</h4>
            コンタクトは右上のSNS等からお待ちしております.
          <br></br>
          プロジェクトのお誘いやご相談, チームへの参加希望など, お気軽にご連絡ください. 
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
    nd3mAccounting: file(relativePath: { eq: "aboutpage_logo.png" }) {
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
