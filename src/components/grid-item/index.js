import React from "react";

import styles from "./grid-item.module.scss"

class GridItem extends React.Component {
  render() {
    return (
      <div className={styles.gridItem}>
        {this.props.children}
      </div>
    )
  }
}

export default GridItem