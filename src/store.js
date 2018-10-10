import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { reducers } from './GithubProfile';
import loading from './Loading';

import { loadProfile } from './GithubProfile/thunks';
import promiseMiddleware from './promise-middleware';
import thunkMiddleware from './thunk-middleware';


export const store = createStore(
  combineReducers({ ...reducers, ...loading }),
  undefined,
  applyMiddleware(thunkMiddleware, promiseMiddleware, logger)
);

store.dispatch(
  loadProfile(`https://api.github.com/users/${window.location.pathname.split("/github-profile/")[1]}`)
);
