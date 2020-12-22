import React from "react";
import { Link } from "gatsby";

import styles from "./grid-item.module.scss"

class GridItem extends React.Component {
  render() {
    return (
      <article className={styles.gridItem}>
        <div className={styles.gridItem__container}>
          <Link to="" className={styles.gridItem__link}>
            {this.props.children}
          </Link>
        </div>
      </article>
    )
  }
}

export default GridItem