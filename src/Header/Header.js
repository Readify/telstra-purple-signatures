import React, { Component } from 'react';
import './Header.scss';

const Header = () => {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="section" style={{ width: '100%' }}>
        <div className="container">
          <div className="navbar-brand">
            <img
              src="/logo.png"
              alt={this.props.brandInfo.companyName}
              style={{ height: 60 }}
            />
            <a
              className="navbar-item brand-name"
              href={this.props.brandInfo.brandLink}
            >
              {this.props.brandInfo.appName}
            </a>
          </div>
        </div>
        <div className="column" />
      </div>
    </nav>
  );
};

export default Header;
