import React from 'react'
import PropTypes from 'prop-types'
import './PageTitle.css'

const PageTitle = (PageTitleText) => (
  <div className="page-title">
      <div id="page-title-text">{Object.values(PageTitleText)}</div>
  </div>
)

PageTitle.propTypes = {
  PageTtleText: PropTypes.string
}

export default PageTitle
