import React from 'react';
import './Header.scss';
import { AzureAD, AuthenticationState } from 'react-aad-msal';
import { authProvider } from '../AAD/authProvider';
import { basicReduxStore } from '../reduxStore';

const loginWithAAD = () => {
  authProvider.login();
};

const Header = ({ brandInfo }) => (
  <nav className="navbar" role="navigation" aria-label="main navigation">
    <div className="section" style={{ width: '100%' }}>
      <div className="container">
        <div className="navbar-brand">
          <img
            src="/logo.png"
            alt={brandInfo.companyName}
            style={{ height: 60 }}
          />
          <a className="navbar-item brand-name" href={brandInfo.brandLink}>
            {brandInfo.appName}
          </a>
          <AzureAD provider={authProvider} reduxStore={basicReduxStore}>
            {({ login, logout, authenticationState, accountInfo }) => {
              return (
                <React.Fragment>
                  {authenticationState ===
                    AuthenticationState.Unauthenticated && (
                    <div className="navbar-item login">
                      <button
                        type="button"
                        className="button"
                        onClick={loginWithAAD}
                      >
                        Login
                      </button>
                    </div>
                  )}

                  {accountInfo && (
                    <div className="navbar-item username">
                      {' '}
                      {accountInfo.account.name}{' '}
                    </div>
                  )}
                </React.Fragment>
              );
            }}
          </AzureAD>
        </div>
      </div>
      <div className="column" />
    </div>
  </nav>
);

export default Header;
