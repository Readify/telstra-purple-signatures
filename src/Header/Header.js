import React from 'react';

const Header = ({ brandInfo }) => (
  <div>
    <div id="Header" className="col-md-12">
      <div className="row">
        <div className="col-md-1"/>
        <div className="col-md-11" style={{ paddingLeft: '0px' }}>
          <a className="navbar-brand" href={brandInfo.brandLink}>{brandInfo.appName}</a>
        </div>
      </div>
      <div className="navbar-collapse collapse"/>
    </div>
  </div>
);

export default Header;