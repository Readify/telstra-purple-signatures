import React from 'react';
import './Header.scss';

const Header = ({ brandInfo }) => (
  <nav className="navbar" role="navigation" aria-label="main navigation">
    <div className="section" style={{ width: '100%' }}>
      <div className="container">
        <div className="navbar-brand">
          <a className="navbar-item" href={brandInfo.brandLink}>
            {brandInfo.appName}
          </a>
        </div>
      </div>
      <div className="column" />
    </div>
  </nav>
);

export default Header;
