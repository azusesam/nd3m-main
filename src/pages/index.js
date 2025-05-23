import React from "react";
import { graphql, StaticQuery } from "gatsby";

import Layout from "../components/layout";
import Seo from "../components/seo";
import PostCard from "../components/postCard";

// import "../utils/global.scss"
import "../utils/normalize.css";
import "../utils/css/screen.css";
//TODO: switch to staticQuery, get rid of comments, remove unnecessary components, export as draft template
const BlogIndex = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title;
  const posts = data.allMarkdownRemark.edges;
  let postCounter = 0;

  return (
    <Layout title={siteTitle}>
      <Seo
        title="ND3M / エヌ ディー スリー エム　| コンピュテーショナルデザインを専門とする建築集団"
        keywords={[
          `ND3M`,
          `nagoya digital design developers meing`,
          `デジタルデザイン`,
          `コンピュテーショナルデザイン`,
          `デジタルファブリケーション`
        ]}
        description="ND3Mは，コンピュテーショナルデザイン，デジタルファブリケーションを中心に，建築を専門に研究・プロジェクトを実施するギルド集団です．"
      />
      {/* <Bio /> */}
      {data.site.siteMetadata.description && (
        <header className="page-head">
          <h3 className="page-head-title">
            Projects by ND3M<br></br>
          </h3>
        </header>
      )}
      <div className="post-feed">
        {posts.map(({ node }) => {
          postCounter++;
          return (
            <PostCard
              key={node.fields.slug}
              count={postCounter}
              node={node}
              postClass={`post`}
            />
          );
        })}
      </div>
    </Layout>
  );
};

const indexQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }, limit: 1000) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date
            title
            description
            thumbnail {
              childImageSharp {
                fluid(maxWidth: 1360) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`;

export default props => (
  <StaticQuery
    query={indexQuery}
    render={data => (
      <BlogIndex location={props.location} props data={data} {...props} />
    )}
  />
);
