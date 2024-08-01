import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

import { globalHistory } from "@reach/router";

import Layout from "../components/layout";
import Seo from "../components/seo";
import Share from "../components/share";

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark;
    const siteTitle = this.props.data.site.siteMetadata.title;
    const siteUrl = this.props.data.site.siteMetadata.siteUrl;
    const path = globalHistory.location.pathname;

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <Seo
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />
        <article
          className={`post-content ${post.frontmatter.thumbnail || `no-image`}`}
        >
          <header className="post-content-header">
            <h1 className="post-content-title">{post.frontmatter.title}</h1>
          </header>

          {post.frontmatter.description && (
            <p class="post-content-excerpt">{post.frontmatter.description}</p>
          )}

          {post.frontmatter.thumbnail && (
            <div className="post-content-image">
              <GatsbyImage
                className="kg-image"
                image={
                  post.frontmatter.thumbnail.childImageSharp.gatsbyImageData
                }
                alt={post.frontmatter.title}
              />
            </div>
          )}
          <Share title={post.frontmatter.title} url={`${siteUrl}${path}`} />
          <div
            className="post-content-body"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />

          <footer className="post-content-footer">
            {/* There are two options for how we display the byline/author-info.
        If the post has more than one author, we load a specific template
        from includes/byline-multiple.hbs, otherwise, we just use the
        default byline. */}
          </footer>
        </article>
      </Layout>
    );
  }
}

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
        siteUrl
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date
        description
        thumbnail {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH, width: 1360)
          }
        }
      }
    }
  }
`;
