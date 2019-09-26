import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { AuthenticationActions, AuthenticationState } from 'react-aad-msal';
import { GET_PROFILE, PROFILE_FETCHED } from './actions';

const initialState = {
  initializing: false,
  initialized: false,
  idToken: null,
  accessToken: null,
  state: AuthenticationState.Unauthenticated,
  profile: null,
  gettingProfile: false,
  profileFetched: false
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PROFILE:
      return {
        ...state,
        gettingProfile: true
      };
    case PROFILE_FETCHED:
      return {
        ...state,
        gettingProfile: false,
        profileFetched: true,
        profile: action.payload
      };
    case AuthenticationActions.Initializing:
      return {
        ...state,
        initializing: true,
        initialized: false
      };
    case AuthenticationActions.Initialized:
      return {
        ...state,
        initializing: false,
        initialized: true
      };
    case AuthenticationActions.AcquiredIdTokenSuccess:
      return {
        ...state,
        idToken: action.payload
      };
    case AuthenticationActions.AcquiredAccessTokenSuccess:
      return {
        ...state,
        accessToken: action.payload
      };
    case AuthenticationActions.AcquiredAccessTokenError:
      return {
        ...state,
        accessToken: null
      };
    case AuthenticationActions.LoginSuccess:
      return {
        ...state,
        account: action.payload.account
      };
    case AuthenticationActions.LoginError:
    case AuthenticationActions.AcquiredIdTokenError:
    case AuthenticationActions.LogoutSuccess:
      return { ...state, idToken: null, accessToken: null, account: null };
    case AuthenticationActions.AuthenticatedStateChanged:
      return {
        ...state,
        state: action.payload
      };
    default:
      return state;
  }
};

export const basicReduxStore = createStore(
  rootReducer,
  // Enable the Redux DevTools extension if available
  /// See more: https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfiblj
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);
