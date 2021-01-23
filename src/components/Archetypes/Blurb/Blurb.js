import React from 'react'
import PropTypes from 'prop-types'
import './Blurb.css'

const Blurb = ({blurbText}) => (
  <div className="blurb-background">
      <div id="blurb-text">{blurbText}</div>
  </div>
)

Blurb.propTypes = {
  backgroundImage: PropTypes.string
}

export default Blurb
