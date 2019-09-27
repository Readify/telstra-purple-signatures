import { MsalAuthProvider, LoginType } from 'react-aad-msal';

const config = {
  auth: {
    authority: 'https://login.microsoftonline.com/common',
    clientId: '14680f0a-1355-4dda-be3f-04e04ffdcb92',
    redirectUri: window.location.origin
  },
  cache: {
    cacheLocation: 'sessionStorage',
    storeAuthStateInCookie: true
  }
};

const authenticationParameters = {
  scopes: ['openid', 'user.read']
};

export const authProvider = new MsalAuthProvider(
  config,
  authenticationParameters,
  LoginType.Redirect
);
