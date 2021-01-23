import React from "react"
import NavItem from '../src/components/Archetypes/NavItem/NavItem';

export default {
  title: "Archetypes",
}

export const navItem = () => (
  <div style={{ 
    padding: "16px", 
    display: "flex",
    justifyContent: 'space-evenly',

  }}>
    <NavItem 
      navItemText= {
        'Home'
      }/>
    <NavItem 
      navItemText= {
        'About'
      }/>
    <NavItem 
      navItemText= {
        'Contact'
      }/>
  </div>
)