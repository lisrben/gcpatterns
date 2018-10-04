import React from 'react'
import Link from 'gatsby-link'
import sidebarStyles from './sidebar.module.css'

export default ({ article }) => (  
  <div className={sidebarStyles.sidebar}>
    <a href="/" className={sidebarStyles.logoSmall}>button</a>
    <ul>
      <li className={sidebarStyles.active}><a>Artboards</a></li>
      <li><a>Feature Guide</a></li>
    </ul>
  </div>
)
