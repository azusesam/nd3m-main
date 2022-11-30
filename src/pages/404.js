import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

class NotFoundPage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="404: Not Found" />
        <h1>Not Found</h1>
        <p>Please check if the URL is correct.</p>
        <p>  <a
                href="https://twitter.com/nagoya_d3m"
                title="Twitter"
                target="_blank"
                rel="noopener noreferrer"
              >
                If you have any problem, please contact from twitter. 
              </a>
              </p>
      
      </Layout>
    )
  }
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
