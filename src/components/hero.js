import React from 'react'
import Img from 'gatsby-image'

import styles from './hero.module.css'

export default ({ data }) => (
  <div className={styles.hero}>
    <img className={styles.heroImage} src="/images/HeroImage.svg" />
    <a href="https://sketch.cloud/s/8p8p3"> Download Library</a>
  </div>
)
