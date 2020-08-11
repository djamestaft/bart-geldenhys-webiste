import React from 'react'
import PropTypes from 'prop-types'
import './PageTitle.css'

const PageTtle = (PageTtleText) => (
  <div className="page-title">
      <div id="page-title-text">Find Your Balance</div>
  </div>
)

PageTtle.propTypes = {
  PageTtleText: PropTypes.string
}

export default PageTtle
