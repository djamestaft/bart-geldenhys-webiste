import React from 'react'
import NavItem from '../components/Archetypes/NavItem/NavItem';

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )
  }

  render() {
    return (
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-start has-text-centered">
              <NavItem 
                navItemText="Home"
                navUrl="/about"/>
              <NavItem 
                navItemText="About"
                navUrl="/products"/>
              <NavItem 
                navItemText="Gallery"
                navUrl="/blog"/>
              <h1 id="logo-text">
                BART GULDENHUYS
              </h1>
              <NavItem 
                navItemText="Timetable"
                navUrl="/contact"/>
              <NavItem 
                navItemText="FAQ"
                navUrl="/contact/examples"/>
              <NavItem 
                navItemText="Contact"
                navUrl="/contact/examples"/>
            </div>          
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
