import React from 'react'
import NavItem from '../components/Archetypes/NavItem/NavItem';
import { Link } from 'gatsby';

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
              <Link to="/">
                <NavItem navItemText="Home"/>
              </Link>
              <Link to="/about">
                <NavItem navItemText="About"/>
              </Link>
              <Link to="/gallery">
                <NavItem navItemText="Gallery"/>
              </Link>

              <h1 id="logo-text">BART GULDENHUYS</h1>

              <Link to="/bookings">
                <NavItem navItemText="Bookings"/>
              </Link>
              <Link to="/faq">
                <NavItem navItemText="FAQ"/>
              </Link>
              <Link to="/contact">
                <NavItem navItemText="Contact"/>
              </Link>
            </div>          
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
