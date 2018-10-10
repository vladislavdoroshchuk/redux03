import React from "react";

import { Provider } from 'react-redux';

import GithubProfile from './GithubProfile';
import { store } from './store';


const AppPure = () => (
  <div className="container">
    <div className="row">
      <div className="col-sm-12">
        <h1>Hello JS </h1>
      </div>
    </div>
    <hr />
    <div className="row">
      <GithubProfile />
    </div>
  </div>
);

const App = () => (
  <Provider store={store}>
    <AppPure />
  </Provider>
);

export default App;