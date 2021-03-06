import React from 'react'
import PropTypes from 'prop-types'
import './Button.css'

const Button = (buttonText) => (
  <div className="button">
      <div id="button-text">{Object.values(buttonText)}</div>
  </div>
)

Button.propTypes = {
  buttonText: PropTypes.string
}

export default Button
