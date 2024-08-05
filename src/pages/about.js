import React from "react";
import { graphql, StaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

import Layout from "../components/layout";
import Seo from "../components/seo";

import "../utils/normalize.css";
import "../utils/css/screen.css";

const AboutPage = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title;

  return (
    <Layout title={siteTitle}>
      <Seo title="About" keywords={[`blog`, `gatsby`, `javascript`, `react`]} />

      <article className="post-content page-template no-image">
        <div className="post-content-body">
          <h2 id="clean-minimal-and-deeply-customisable-london-is-a-theme-made-for-people-who-appreciate-simple-lines-">
            {/* <p>Nagoya Digital Design Developers Meeting</p>
            <p></p>
           <p></p> */}
          </h2>
          <h2 id="dynamic-styles">
            <p>
              {" "}
              コンピュテーショナルデザインを基盤に <br></br>
              新たな建築を模索するギルド的集団です
            </p>
          </h2>
          <p>
            {" "}
            建築情報学領域を中心に，デザイン・制作・研究・勉強会・イベント企画など幅広く活動をしています．
            <br></br>
            大学，企業，専門分野の枠にとらわれず，コンピュテーショナルデザインを共通項に集まった多様なメンバーでチームを組んでいます．
            <br></br>
            <br></br>
            <strong>
              "まだ未踏の地を探検し, 新しい価値観と感動を広く発信していく."
            </strong>
            <br></br>
            をスローガンに，建築の新たなかたち・新たなしくみ・新たなつくりかた，を模索し実践していきます．
            <br></br>
          </p>
          <br></br>
          <h3 id="dynamic-styles">コンピュテーショナルデザインの可能性</h3>
          我々はおもに3つの可能性に対してアプローチしています．<br></br>
          <br></br>
          <p>
            {" "}
            <strong>■デザインプロセスの改変</strong>
            <br></br>
            CADに代表されるデジタル技術の導入により，建築のつくりかたは大きく変化しました．しかし，単にこれまで人の手で行っていたプロセスを効率化するだけでなく，アルゴリズミックな形態生成，センシングの反映など，デザインプロセスそのものを変える可能性を持っています．
            <br></br>
            <br></br>
            <strong>■コンストラクションプロセスの改変</strong>
            <br></br>
            3DプリンティングやMR技術．センシングなどの建築をつくることに関わる技術は，効率化や安全性の向上などをもたらします．これまでデザインできても実現できなかったかたちをつくれるようになり，さらにはデジタル技術ならではの特徴を生かした新たなデザインや，デザインプロセスとインタラクティブに作用するつくりかたが生まれます．
            <br></br>
            <br></br>
            <strong>■プロセスの融合</strong>
            <br></br>
            計画→設計→施工→マネジメントと，これまで一方通行で分断されていた建築のプロセスは，デジタル技術の導入により統合され，ひとつになっていきます．モノの情報はデータとしてコンピュータを介してやりとりされ，リアルタイムに処理し，反応することができるようになります．キネティックなしくみだったり，つくる様子をデザインにフィードバックしてかたちが変わったり，プロセスの融合により建築のありかたも変わっていきます．
          </p>
          <br></br>
          <h3>業務内容</h3>
          ND3Mは自主企画だけでなく，任意団体として請負業務を行っております．
          プロジェクトすべてへから，一部分のサポート・支援なども承ります．下記の内容は一例です，まずはご相談ください．
          <ul>
            <li>
              <strong>コンピュテーショナルデザインを活用した空間設計</strong>
              <br></br>
              内装やパブリックスペース，家具など，デジタル技術を積極的に取り入れ，新しい価値観に基づく空間を設計します．
              <br></br>
              <a
                href="/fablossom"
                title="fabrossom"
                target="_blank"
                rel="noopener noreferrer"
              >
                参考事例1
              </a>
              　
              <a
                href="/suyarigasumi"
                title="suyarigasumi"
                target="_blank"
                rel="noopener noreferrer"
              >
                参考事例2
              </a>
            </li>
            <li>
              <strong>技術支援</strong>
              <br></br>
              3Dスキャンやモデリング，フィジカルコンピューティング，デジタルファブリケーションなど，豊富な知見を生かした技術支援により，プロジェクトの実現をサポートします．
              <br></br>
              <a
                href="/rambdarack"
                title="rambdarack"
                target="_blank"
                rel="noopener noreferrer"
              >
                参考事例1
              </a>
              　
              <a
                href="/AnotherWorld"
                title="kikuimushi"
                target="_blank"
                rel="noopener noreferrer"
              >
                参考事例2
              </a>
            </li>
            <li>
              <strong>3Dスキャン・3Dプリント</strong>
              <br></br>
              模型や部品などの制作も承ります．<br></br>
              <a
                href="/10kei"
                title="10kei"
                target="_blank"
                rel="noopener noreferrer"
              >
                参考事例
              </a>
            </li>
            <li>
              <strong>データ作成・支援</strong>
              <br></br>
              3Dプリント・レーザー加工・NC加工など，デジタルファブリケーションのためのデータを作成，またはその支援を幅広い知見をもとに行います．
              <br></br>
            </li>
            <li>
              <strong>ワークショップ・イベント企画</strong>
              <br></br>
              デジタル技術に触れるワークショップなどの企画を行います<br></br>
              <a
                href="/EnjoinTree"
                title="enjointree"
                target="_blank"
                rel="noopener noreferrer"
              >
                参考事例
              </a>
            </li>
          </ul>
          <figure className="kg-card kg-image-card ">
            <GatsbyImage
              image={data.nd3mlogoPic.childImageSharp.gatsbyImageData}
              className="kg-image"
              style={{ margin: "1rem auto", maxWidth: "400px" }}
            />
            {/* <figcaption >Large imagery is at the heart of this theme</figcaption> */}
          </figure>
          <p>
            <h4>沿革</h4>
            <table>
              <tbody>
                <tr>
                  <td>2019.11</td>
                  <td>ND3M結成， "Enjointing Spagetoini" 開催</td>
                </tr>
                <tr>
                  <td>2020.03</td>
                  <td>愛知県の建築学生によるチームとして本格的に活動を開始</td>
                </tr>
                <tr>
                  <td>2021.12</td>
                  <td>第3期始動, 関東・関西のメンバーも迎え新体制へ</td>
                </tr>
                <tr>
                  <td>2022.04</td>
                  <td>社会人のメンバーが誕生し, 新たなステップへ</td>
                </tr>
                <tr>
                  <td>2022.11</td>
                  <td>４期目がスタート</td>
                </tr>
              </tbody>
            </table>
          </p>
          <p>
            <h4>お問い合わせ</h4>
            コンタクトは右上のSNS等からお待ちしております.
            <br></br>
            プロジェクトのお誘いやご相談, チームへの参加希望など,
            お気軽にご連絡ください.
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
  );
};

const indexQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    nd3mlogoPic: file(relativePath: { eq: "aboutpage_logo.png" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, width: 400)
      }
    }
    nd3maboutPic: file(relativePath: { eq: "about.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, width: 1000)
      }
    }
  }
`;

export default props => (
  <StaticQuery
    query={indexQuery}
    render={data => (
      <AboutPage location={props.location} data={data} {...props} />
    )}
  />
);
