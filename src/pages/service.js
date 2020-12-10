import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../utils/normalize.css"
import "../utils/css/screen.css"

const ServicePage = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout title={siteTitle}>
      <SEO
        title="All posts"
        keywords={[`blog`, `gatsby`, `javascript`, `react`]}
      />

      <article className="post-content page-template no-image">
        <div className="post-content-body">
          <figure className="kg-card kg-image-card ">
            <Img
              fluid={data.tenkeilogo.childImageSharp.fluid}
              className="kg-image"
            />
            <figcaption></figcaption>
          </figure>
          <h3 id="heading-level-3">
            世界にたった1つの模型に、<br></br>
            世界でたった1つの人物添景を。<br></br>
          </h3>
          <h3 id="heading-level-3">
            あなたの模型にふさわしい、<br></br>
            あなただけの添景を手軽に。
          </h3>
          <h3 id="heading-level-3">
            10-Kei (テンケイ) は、スマホで撮影するだけで、<br></br>
            オリジナル3D添景が作れるサービスです。
          </h3>
          {/* <h2 id="heading-level-2">サービス概要</h2>
           */}
          <p>
            <br></br>
            <br></br>
            卒業設計やコンペでの模型製作の中で<br></br>
            「小学校で遊ぶ子供たちの添景が欲しい」「住宅の中での様々な動きに適した添景が欲しい」などなど…思ったことはありませんか？
            <br></br>
            10-keiはそんなあなたの願いを叶えます。
            <br></br>
            <br></br>
          </p>
          　　
          <p>
            このサービスを利用するための手順はたったの
            <strong>
              <strong>4つ</strong>
            </strong>{" "}
            。
          </p>
          <dl>
            <dt>1. 作りたい添景のポーズを決めて360度さまざまな方向から撮影</dt>
            　お手持ちのスマホなどで撮影するだけ！
            <dd>
              <p>
                <figure className="kg-card kg-image-card ">
                  <Img
                    fluid={data.step1photograph.childImageSharp.fluid}
                    className="kg-image"
                  />
                </figure>
              </p>
            </dd>
            <dt>2. データをアップロードし制作を依頼</dt>
            　サービスチームが頂いた写真から3Dモデルを制作します。
            <dd>
              <p>
                <figure className="kg-card kg-image-card">
                  <Img
                    fluid={data.step2upload.childImageSharp.fluid}
                    className="kg-image"
                  />
                </figure>
              </p>
            </dd>
            <dt>3. 3Dになったデータを確認</dt>
            　思った通りの添景ができあがるか、事前に確認できます。
            <dd>
              <p>
                <figure className="kg-card kg-image-card">
                  <Img
                    fluid={data.step33dmodel.childImageSharp.fluid}
                    className="kg-image"
                  />
                </figure>
              </p>
            </dd>
            <dt>4. 自宅に添景が届く</dt> 　あとは待つだけでお届けします！
            <dd>
              <p>
                <figure className="kg-card kg-image-card">
                  <Img
                    fluid={data.step4reach.childImageSharp.fluid}
                    className="kg-image"
                  />
                </figure>
              </p>
            </dd>
          </dl>
          <h3 id="heading-level-3">あなたが表現したいシーンをつくるお手伝い</h3>
          <figure className="kg-card kg-image-card">
            <Img
              fluid={data.printed2.childImageSharp.fluid}
              className="kg-image"
            />
          </figure>
          　　 　　
          <h4 id="ordered">どうやって作ってるの？</h4>
          <ol>
            <li>
              360度様々な方向から、添景にしたいポーズの写真を撮り、データをアップロードしていただきます。
            </li>
            <li>
              アップロードされたデータから、フォトグラメトリを行い3Dモデルを生成します。
            </li>
            <li>
              モデルを一部修正し、確認していただいた後、光造形3Dプリンタで出力します。
            </li>
            <li>出力品を自宅までお届けします。</li>
          </ol>
          　　
          <figure className="kg-card kg-image-card">
            <Img
              fluid={data.printed1.childImageSharp.fluid}
              className="kg-image"
            />
          </figure>
          <h2 id="heading-level-2">2021年1月上旬, β版リリース予定</h2>
          <p>
            β版では、事前に登録いただいた方を中心に、サービスのテストを行います。
            <br></br>
            サービス内容や価格などは随時変更される場合があります。<br></br>
          </p>
          <h3 id="heading-level-3">最新情報を受け取る</h3>
          <p>
            Twitterで順次情報を公開します。価格やサービス詳細、β版テスター募集、正式リリース日告知など行っていきます。
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

    tenkeilogo: file(relativePath: { eq: "tenkei/tenkei-logo.png" }) {
      childImageSharp {
        fluid(maxWidth: 1360, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    step1photograph: file(relativePath: { eq: "tenkei/takephoto.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000, quality: 100) {
          ...GatsbyImageSharpFluid
          ...GatsbyImageSharpFluidLimitPresentationSize
        }
      }
    }
    step2upload: file(relativePath: { eq: "tenkei/buildmodel.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000, quality: 100) {
          ...GatsbyImageSharpFluid
          ...GatsbyImageSharpFluidLimitPresentationSize
        }
      }
    }
    step33dmodel: file(relativePath: { eq: "tenkei/checkmodel.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000, quality: 100) {
          ...GatsbyImageSharpFluid
          ...GatsbyImageSharpFluidLimitPresentationSize
        }
      }
    }
    step4reach: file(relativePath: { eq: "tenkei/hand.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000, quality: 100) {
          ...GatsbyImageSharpFluid
          ...GatsbyImageSharpFluidLimitPresentationSize
        }
      }
    }
    printed1: file(relativePath: { eq: "tenkei/print.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000, quality: 100) {
          ...GatsbyImageSharpFluid
          ...GatsbyImageSharpFluidLimitPresentationSize
        }
      }
    }
    printed2: file(relativePath: { eq: "tenkei/printed2.jpg" }) {
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
      <ServicePage location={props.location} data={data} {...props} />
    )}
  />
)
