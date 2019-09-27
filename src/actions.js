export const GET_PROFILE = 'GET_PROFILE';

export function gettingProfileStarted() {
  return {
    type: GET_PROFILE
  };
}

export const PROFILE_FETCHED = 'PROFILE_FETCHED';

export function profileFetched(data) {
  return {
    type: PROFILE_FETCHED,
    payload: data
  };
}
