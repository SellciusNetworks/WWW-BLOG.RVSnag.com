import React, { useState } from 'react';
import { Link, useStaticQuery } from 'gatsby';
import { graphql } from 'gatsby';
import Img from "gatsby-image";
import './Navbar.css';




function Navbar(props) {
  const [active, setActive] = useState(false);
  const [navBarActiveClass, setNavBarActiceClass] = useState('');

  const images = useStaticQuery(graphql`query {
    rvsnagLogo: file( relativePath : { eq: "RVSnag_logo.png" }) {
      childImageSharp {
          fixed(width: 200) {
              ...GatsbyImageSharpFixed
          }
      }
    }
  }`);

  function toggleHamburger() {
    // toggle the active boolean in the state
    // this.setState(
    //   {
    //     active: !this.state.active,
    //   },
    //   // after state has been updated,
    //   () => {
    //     // set the class in state for the navbar accordingly
    //     this.state.active
    //       ? this.setState({
    //           navBarActiveClass: 'is-active',
    //         })
    //       : this.setState({
    //           navBarActiveClass: '',
    //         })
    //   }
    // )
  }

  return (
    <nav
      className="navbar is-transparent"  
      role="navigation"
      aria-label="main-navigation"
    >
      <div className="container">
        <div className="navbar-brand">
          <Link to="/"  title="Logo"> 
            <Img fixed={images.rvsnagLogo.childImageSharp.fixed} loading="eager" className="rvlogoImg" alt="RVSnag.com Logo" />
          </Link>
          {/* Hamburger menu */}
          <div
            className={`navbar-burger burger ${navBarActiveClass}`}
            data-target="navMenu"
            onClick={() => toggleHamburger()}
          >
            <span />
            <span />
            <span />
          </div>
        </div>
        <div
          id="navMenu"
          className={`navbar-menu ${navBarActiveClass}`}
        >
          <div className="navbar-start has-text-centered">
            <Link className="navbar-item" to="/search">
              Search
            </Link>
            <Link className="navbar-item" to="/blog">
              Blog
            </Link>
          </div>
          <div className="navbar-end has-text-centered">
            <a
              className="navbar-item"
              href="https://github.com/netlify-templates/gatsby-starter-netlify-cms"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="icon">
                
              </span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
