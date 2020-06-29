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
          <p>自己紹介文</p>

          <figure className="kg-card kg-image-card kg-width-full">
            <Img
              fluid={data.konAccounting.childImageSharp.fluid}
              className="kg-image"
              style={{ margin: "1rem auto" }}
            />
            {/* <figcaption >Large imagery is at the heart of this theme</figcaption> */}
          </figure>
          <h3 id="dynamic-styles">Consomme</h3>
          <p>自己紹介文</p>

          <figure className="kg-card kg-image-card kg-width-full">
            <Img
              fluid={data.azuAccounting.childImageSharp.fluid}
              className="kg-image"
              style={{ margin: "1rem auto" }}
            />
            {/* <figcaption >Large imagery is at the heart of this theme</figcaption> */}
          </figure>
          <h3 id="dynamic-styles">Azu</h3>
          <p>自己紹介文</p>

          <figure className="kg-card kg-image-card kg-width-full">
            <Img
              fluid={data.nakazimaAccounting.childImageSharp.fluid}
              className="kg-image"
              style={{ margin: "1rem auto" }}
            />
            {/* <figcaption >Large imagery is at the heart of this theme</figcaption> */}
          </figure>
          <h3 id="dynamic-styles">Nakashima</h3>
          <p>自己紹介文</p>

          <figure className="kg-card kg-image-card kg-width-full">
            <Img
              fluid={data.konoAccounting.childImageSharp.fluid}
              className="kg-image"
              style={{ margin: "1rem auto" }}
            />
            {/* <figcaption >Large imagery is at the heart of this theme</figcaption> */}
          </figure>
          <h3 id="dynamic-styles">Ko-no</h3>
          <p>自己紹介文</p>

          <figure className="kg-card kg-image-card kg-width-full">
            <Img
              fluid={data.abeAccounting.childImageSharp.fluid}
              className="kg-image"
              style={{ margin: "1rem auto" }}
            />
            {/* <figcaption >Large imagery is at the heart of this theme</figcaption> */}
          </figure>
          <h3 id="dynamic-styles">Abe</h3>
          <p>自己紹介文</p>
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
