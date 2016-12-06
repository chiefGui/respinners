import React, {PropTypes} from 'react'
import classNames from 'classnames'
import color from 'onecolor'

import styles from './styles.css'

function Simple(props) {
  const primaryColor = props.color
  const secondaryColor = color(primaryColor).lightness(.9).hex()

  const spinnerStyle = {
    width: props.size,
    height: props.size,
    borderTopColor: primaryColor,
    borderRightColor: secondaryColor,
    borderBottomColor: secondaryColor,
    borderLeftColor: secondaryColor
  }
  const spinnerCn = classNames(
    styles.spinner,
    {[styles.isCentered]: props.isCentered}
  )

  return <div style={spinnerStyle} className={spinnerCn} />
}

Simple.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
  isCentered: PropTypes.bool
}

Simple.defaultProps = {
  isCentered: true
}

export default Simple
