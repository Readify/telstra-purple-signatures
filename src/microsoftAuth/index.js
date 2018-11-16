import constants from '../constants';

const msal = require('msal');
const { UserAgentApplication } = msal;

export const MicrosoftGraph = require('@microsoft/microsoft-graph-client');

const { applicationConfig } = constants;

const authCallback = (errorDesc, token, error) => {
  if (token) {
  } else {
    console.error(error + ':' + errorDesc);
  }
};
const userAgentApplication = new UserAgentApplication(
  applicationConfig.clientID,
  null,
  authCallback
);
export const login = async () => {
  const graphScopes = ['user.read'];
  try {
    let accessToken = null;
    try {
      accessToken = await userAgentApplication.acquireTokenSilent(graphScopes);
    } catch (error) {
      await userAgentApplication.loginPopup(graphScopes);
      accessToken = await userAgentApplication.acquireTokenSilent(graphScopes);
    }
    return accessToken;
  } catch (error) {
    console.error(error);
  }
};

export const getMicrosoftADInfo = async () => {
  try {
    const token = await login();

    if (token === null) return null;

    const client = MicrosoftGraph.Client.init({
      authProvider: done => {
        done(null, token);
      }
    });
    const res = await client.api('/me').get();
    return {
      name: res.displayName,
      title: res.jobTitle,
      email: res.mail,
      mobile: res.mobilePhone
    };
  } catch (error) {
    console.error(error);
  }
};
