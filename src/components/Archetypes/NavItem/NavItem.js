import React from 'react'
import PropTypes from 'prop-types'
import './NavItem.css'

const NavItem = ({navItemText, navUrl}) => (
  <div className="navitem-background">
      <li id="navitem-text">{navItemText}</li>
  </div>
)

NavItem.propTypes = {
  navItemText: PropTypes.string
}

export default NavItem
