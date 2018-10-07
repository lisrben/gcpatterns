import React from 'react'
import Helmet from 'react-helmet'
import get from 'lodash/get'
import Img from 'gatsby-image'
import SidebarLink from '../components/sidebar'

import sidebarStyles from '../components/sidebar.module.css'
import heroStyles from '../components/hero.module.css'

class BlogPostTemplate extends React.Component {
  render() {
    const post = get(this.props, 'data.contentfulBlogPost')
    const posts = get(this.props, 'data.allContentfulBlogPost.edges')
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')


    return (
      <div className={heroStyles.blogContainer} style={{ background: '#fff' }}>

      <div className={sidebarStyles.sidebar}>
        <a href="/" className={sidebarStyles.logoSmall}>button</a>
        <ul>
        {posts.map(({ node }) => {
          return (
            <li key={node.slug}>
              <SidebarLink article={node} />
            </li>
          )
        })}

          </ul>
      </div>

        <Helmet title={`${post.title} | ${siteTitle}`} />
        <div className={heroStyles.blogContent}>
          <Img className={heroStyles.blogImage} alt={post.title} sizes={post.heroImage.sizes} />

        <div className="blogWrapper">
          <h1 className="section-headline">{post.title}</h1>
          <p
            style={{
              display: 'block',
            }}
          >
          </p>
          <div
            dangerouslySetInnerHTML={{
              __html: post.body.childMarkdownRemark.html,
            }}
          />
          </div>
        </div>
      </div>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
query BlogPostBySlug($slug: String!) {
  contentfulBlogPost(slug: { eq: $slug }) {
    title
    publishDate(formatString: "MMMM Do, YYYY")
    heroImage {
      sizes(maxWidth: 1180, background: "rgb:000000") {
        ...GatsbyContentfulSizes_withWebp
      }
    }
    body {
      childMarkdownRemark {
        html
      }
    }
  }
  allContentfulBlogPost(sort: {fields: [title], order: ASC}) {
    edges {
      node {
        title
        slug
      }
    }
  }
}


`
