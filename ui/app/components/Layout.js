// eslint jsx-a11y/anchor-is-valid: 0
import React from 'react';
import { Link } from 'react-router-dom';

import SideMenu from './SideMenu';

const Layout = ({ title, subtitle, children }) => (
  <div className="hold-transition skin-blue sidebar-mini sidebar-collapse">
    <div className="wrapper">

      <header className="main-header">
        <Link className="logo" to="/">
          <span className="logo-mini"><b>EL</b></span>
          <span className="logo-lg"><b>Electron dashboard</b></span>
        </Link>

        <nav className="navbar navbar-static-top">

          {/*<button className="sidebar-toggle" data-toggle="push-menu" >
            <span className="sr-only">Toggle navigation</span>
          </button>

          <form className="navbar-form navbar-left" role="search">
            <div className="form-group">
              <input type="text" className="form-control" id="navbar-search-input" placeholder="Search" />
            </div>
          </form>*/}
          

          <div className="navbar-custom-menu">
            <ul className="nav navbar-nav">
              
            </ul>
          </div>

        </nav>
      </header>

      <SideMenu />
      <div className="content-wrapper">

        {title ? (
          <section className="content-header">
            <h1>
              {title}
              {subtitle
                ? <small>{subtitle}</small>
                : ''}
            </h1>
          </section>) : ''}
        <section className="content">
          {children}
        </section>
      </div>
    </div>
  </div>
);


export default Layout;
