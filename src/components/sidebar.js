import React from 'react'
import Link from 'gatsby-link'
import styles from './sidebar.module.css'



export default ({ article }) => (
    <Link to={`/blog/${article.slug}`} activeStyle={{
            backgroundColor: "#E8EAEB",
          }}>
      <h3 className={styles.previewTitle}>
        {article.title}
      </h3>
    </Link>
)
