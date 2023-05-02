import React from 'react';
import './Header.scss';

const Header = (props) => {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="section" style={{ width: '100%' }}>
        <div className="container">
          <div className="navbar-brand">
            <img
              src="/logo.png"
              alt={props.brandInfo.companyName}
              style={{ height: 60 }}
            />
            <a
              className="navbar-item brand-name"
              href={props.brandInfo.brandLink}
            >
              {props.brandInfo.appName}
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
