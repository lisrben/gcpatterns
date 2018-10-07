import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
import styles from './article-preview.module.css'

export default ({ article }) => (
  <div className={styles.preview}>
    <Link to={`/blog/${article.slug}`}>
      <Img alt="" sizes={article.heroImage.sizes} />
    
      <h3 className={styles.previewTitle}>
        {article.title}
      </h3>
    </Link>
  </div>
)
