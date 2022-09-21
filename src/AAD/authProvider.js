import { MsalAuthProvider, LoginType } from 'react-aad-msal';

const config = {
  auth: {
    authority: 'https://login.microsoftonline.com/common',
    clientId: '3bc4e4c8-365a-494f-9344-ed26b3573a74',
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
