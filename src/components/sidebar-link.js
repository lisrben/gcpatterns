import React from 'react'
import Link from 'gatsby-link'
import styles from './sidebar.module.css'



export default ({ article }) => (
  <div className={styles.preview}>
    <Link to={`/blog/${article.slug}`}>
      <h3 className={styles.previewTitle}>
        {article.title}
      </h3>
    </Link>
  </div>
)
