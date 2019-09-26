import { gettingProfileStarted, profileFetched } from '../actions';

function getUserProfile(accessToken) {
  return dispatch => {
    dispatch(gettingProfileStarted());

    const headers = new Headers();
    const bearer = 'Bearer ' + accessToken;
    headers.append('Authorization', bearer);
    var options = {
      method: 'GET',
      headers: headers
    };
    var graphEndpoint = 'https://graph.microsoft.com/v1.0/me';
    return fetch(graphEndpoint, options)
      .catch(error => {
        console.error(
          'Failed to get your profile, you have ti fill the form manually'
        );
      })
      .then(res => res.json())
      .then(res => dispatch(profileFetched(res)));
  };
}

export default getUserProfile;
