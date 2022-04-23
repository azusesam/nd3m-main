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
              <p>Digital Design Developers</p>
              <p>Meeting</p>
          </h2> */}
          <h3>Member</h3>         
          <p>
            <center>
            様々な専門分野や興味を持つ, バリエーション豊かなメンバーが在籍している.<br></br>
            それぞれの能力をチームとして統合し, 昇華させていく. 
            </center>
            <br></br>
          </p>

          <figure className="kg-card kg-image-card kg-image-left">
            <left>
            <Img
              fluid={data.azuAccounting.childImageSharp.fluid}
              className="kg-image"
              style={{ margin: "0" }}
            />
            </left>
            {/* <figcaption >Large imagery is at the heart of this theme</figcaption> */}
          </figure>
          <h4 id="dynamic-styles">田住梓 / AZU</h4>
          <p>
            <strong>Azusa TAZUMI</strong>
            <br></br>
            デジタルファブリケーション
            <br></br>
            <br></br>
            1999.12　東京都出身<br></br>
            2022.03　名古屋工業大学 卒業(学士/工学)<br></br>
            2022.04　名古屋工業大学大学院　工学研究科社会工学系プログラム<br></br>
            <br></br>
            3Dプリンタやレーザー加工を中心に、新しい表現や仕組みを模索中です。 <br></br>
            ND3Mでは実装/施工を中心に活動中。
            <br></br>
            <a href="https://twitter.com/azusa353" target="_blank">
              Twitter:@azusa353
            </a>
            <br></br>
            <br></br>
          </p>



          <figure className="kg-card kg-image-card kg-image-left">
            <Img
              fluid={data.medyAccounting.childImageSharp.fluid}
              className="kg-image"
              style={{ margin: "0" }}
            />
            {/* <figcaption >Large imagery is at the heart of this theme</figcaption> */}
          </figure>
          <h4 id="dynamic-styles">池本しょうこ / MEDY</h4>
          <p>
            <strong>Shoko IKEMTO</strong>
            <br></br>
            意匠設計・コンピュテーショナルデザイン・近代建築史
            <br></br>
            <br></br>
            1997.09　岐阜市出身<br></br>
            2020.03　名古屋市立大学(学士/芸術工学)<br></br>
            2022.03　名古屋工業大学大学院(修士/工学)<br></br>
            2022.04　某ゼネコンで建築設計<br></br>
            <br></br>
            ND3M-Research&Engineeringのチームリーダーとして研究・開発案件をメインでやってます。<br></br>
            実務設計とアカデミックを横断しながら新しい価値を実装・実現していきます。
            <br></br>
            <a href="https://twitter.com/408321date" target="_blank">
              Twitter:@408321date
            </a>
            <br></br>
            <br></br>
          </p>

          <figure className="kg-card kg-image-card kg-image-left">
            <Img
              fluid={data.someAccounting.childImageSharp.fluid}
              className="kg-image"
              style={{ margin: "0" }}
            />
            {/* <figcaption >Large imagery is at the heart of this theme</figcaption> */}
          </figure>
          <h4 id="dynamic-styles">近藤広隆 / コンソメ</h4>
          <p>
            <strong>Hirotaka KONDO</strong>
            <br></br>
            コンピュテーショナルデザイン・xR
            <br></br>
            <br></br>
            1995.09　愛知県出身<br></br>
            2019.03　名古屋大学(学士)<br></br>
            2022.03　名古屋大学大学院(修士)<br></br>
            2022.04　建築系エンジニアとして会社勤務<br></br>
            <br></br>
            xRを深めたい<br></br>
            建築設計を新しい技術で楽にしたり飛躍させたりして生きていきたい
            <br></br>
            <br></br>
          </p>

         

          <figure className="kg-card kg-image-card kg-image-left">
            <Img
              fluid={data.konoAccounting.childImageSharp.fluid}
              className="kg-image"
              style={{ margin: "0"}}
            />
            {/* <figcaption >Large imagery is at the heart of this theme</figcaption> */}
          </figure>
          <h4 id="dynamic-styles">河野哲也</h4>
          <p>
            <strong>Tetsuya KONO</strong>
            <br></br>
            意匠設計・構造設計・生物模倣・造形創成・コンピューテーショナルデザイン
            <br></br>
            <br></br>
            1997.08　デンマーク(in Japan)(安城市) 出身<br></br>
            2020.03　中部大学(学士/工学)<br></br>
            2022.03　中部大学大学院(修士/建設工学)<br></br>
            2022.04　リズムデザイン構造計画事務所(構造アトリエ事務所)勤務<br></br>
            <br></br>
            ND3M-Structural Designのチームリーダーとして
            構造計画をメインとしたプロジェクトを行っております。<br></br>
            新しい構造形態を追求し、皆様の生活に、より良い生活空間を提供致します。
            <br></br>
            <br></br>
          </p>


          <figure className="kg-card kg-image-card kg-image-left">
            <Img
              fluid={data.nishimuraAccounting.childImageSharp.fluid}
              className="kg-image"
              style={{ margin: "0" }}
            />
            {/* <figcaption >Large imagery is at the heart of this theme</figcaption> */}
          </figure>
          <h4 id="dynamic-styles">西村隆登</h4>
          <p>
            <strong>Ryuto NISHIMURA</strong>
            <br></br>
            都市計画
            <br></br>
            <br></br>
            1997.10　広島県呉市出身<br></br>
            2018.03　呉工業高等専門学校　建築学科　卒業<br></br>
            2022.03　豊橋技術科学大学大学院　建築・都市システム学専攻　卒業(修士/工学)<br></br>
            2022.04　総合建設コンサルタント会社に就職<br></br>
            <br></br>
            建築学をベースに興味を都市・まちづくりに広げ、今に至る。
            <br></br>
            <br></br>
          </p>


          <figure className="kg-card kg-image-card kg-image-left">
            <Img
              fluid={data.kawachiAccounting.childImageSharp.fluid}
              className="kg-image"
              style={{ margin: "0" }}
            />
            {/* <figcaption >Large imagery is at the heart of this theme</figcaption> */}
          </figure>
          <h4 id="dynamic-styles">河内駿</h4>
          <p>
            <strong>Shun KAWACHI</strong>
            <br></br>
            建築計画(主に公共図書館)
            <br></br>
            <br></br>
            1999.12　愛知県岡崎市出身<br></br>
            2018.04　愛知工業大学 工学部 建築学科入学<br></br>
            2022.04　愛知工業大学大学院 工学研究科在学<br></br>
            <br></br>
           
            <br></br>
            <br></br>
          </p>


          <figure className="kg-card kg-image-card kg-image-left">
            <Img
              fluid={data.seiAccounting.childImageSharp.fluid}
              className="kg-image"
              style={{ margin: "0" }}
            />
            {/* <figcaption >Large imagery is at the heart of this theme</figcaption> */}
          </figure>
          <h4 id="dynamic-styles">近藤誠之介</h4>
          <p>
            <strong>Seinosuke KONDO</strong>
            <br></br>
            建築計画 意匠設計
            <br></br>
            <br></br>
            1999.10　京都府出身<br></br>
            2022.04　京都工芸繊維大学 デザイン・建築学課程 在学<br></br>
            <br></br>
            音・光・風や人流などのパラメータをセンシング・解析することで、変化する建築の形を実現する。<br></br>
            ポストモダン的な建築アナロジーを、パラメトリック・デザインによって実空間としての実現する方法を思考する。 
            <br></br>
            <br></br>
          </p>

          <figure className="kg-card kg-image-card kg-image-left">
            <Img
              fluid={data.sumiAccounting.childImageSharp.fluid}
              className="kg-image"
              style={{ margin: "0" }}
            />
            {/* <figcaption >Large imagery is at the heart of this theme</figcaption> */}
          </figure>
          <h4 id="dynamic-styles">鷲見良</h4>
          <p>
            <strong>Ryo SUMI</strong>
            <br></br>
          デジタルファブリケーション、建築意匠設計
            <br></br>
            <br></br>
            2000.8　愛知県名古屋市出身<br></br>
            2021.3　豊田工業高等専門学校　建築学科　卒業<br></br>
            2021.4　豊橋技術科学大学　建築・都市システム学課程　在学<br></br>
            <br></br>
            粘土3Dプリンターや大口径ノズルFDM3Dプリンターを用い、建築への3Dプリンターの導入、
            3Dプリント建築のデザイン手法を模索しています。現在は土壁を3Dプリントしています。
            <br></br>
            <a href="https://twitter.com/645pro_repo" target="_blank">
              Twitter:@645pro_repo
            </a>
            <br></br>
            <br></br>
          </p>

          <figure className="kg-card kg-image-card kg-image-left">
            <Img
              fluid={data.annAccounting.childImageSharp.fluid}
              className="kg-image"
              style={{ margin: "0" }}
            />
            {/* <figcaption >Large imagery is at the heart of this theme</figcaption> */}
          </figure>
          <h4 id="dynamic-styles">徳井彩乃</h4>
          <p>
            <strong>Ayano TOKUI</strong>
            <br></br>
            <br></br>
            2000.10 奈良県出身<br></br>
            2022. 4  東京理科大学　工学部建築学科3年<br></br>
            <br></br>
           
            <br></br>
            <br></br>
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
        fluid(maxWidth: 300, quality: 100, grayscale: true) {
          ...GatsbyImageSharpFluid
          ...GatsbyImageSharpFluidLimitPresentationSize
        }
      }
    }
    someAccounting: file(relativePath: { eq: "member/some.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 300, quality: 100, grayscale: true) {
          ...GatsbyImageSharpFluid
          ...GatsbyImageSharpFluidLimitPresentationSize
        }
      }
    }
   
    konoAccounting: file(relativePath: { eq: "member/tty.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 300, quality: 100, grayscale: true) {
          ...GatsbyImageSharpFluid
          ...GatsbyImageSharpFluidLimitPresentationSize
        }
      }
    }
    nishimuraAccounting: file(relativePath: { eq: "member/246ra.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 300, quality: 100, grayscale: true) {
          ...GatsbyImageSharpFluid
          ...GatsbyImageSharpFluidLimitPresentationSize
        }
      }
    }
    kawachiAccounting: file(relativePath: { eq: "member/kwc.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 300, quality: 100, grayscale: true) {
          ...GatsbyImageSharpFluid
          ...GatsbyImageSharpFluidLimitPresentationSize
        }
      }
    }
    azuAccounting: file(relativePath: { eq: "member/azu.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 300, quality: 100, grayscale: true) {
          ...GatsbyImageSharpFluid
          ...GatsbyImageSharpFluidLimitPresentationSize
        }
      }
    }
    sumiAccounting: file(relativePath: { eq: "member/sumi.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 300, quality: 100, grayscale: true) {
          ...GatsbyImageSharpFluid
          ...GatsbyImageSharpFluidLimitPresentationSize
        }
      }
    }
    seiAccounting: file(relativePath: { eq: "member/sei.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 300, quality: 100, grayscale: true) {
          ...GatsbyImageSharpFluid
          ...GatsbyImageSharpFluidLimitPresentationSize
        }
      }
    }
    annAccounting: file(relativePath: { eq: "member/ann.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 300, quality: 100, grayscale: true) {
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
