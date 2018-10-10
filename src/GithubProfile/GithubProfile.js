import React from 'react';
import { connect } from 'react-redux';
import { isLoading } from '../Loading';
import { getProfile } from './store';

const GithubProfile = ({ isLoading, name, login, company, location, avatar_url, following, followers, public_repos, bio, toggleView }) => (
  <div className="col-md-4">
    {isLoading && 'Loading ...'}
    {!isLoading && !login &&
    <div className="alert alert-danger" role="alert">
      Error Loading the Profile!
    </div>
    }
    {!isLoading && login && (
      <div className="user">
        <img
          className="user-img-top"
          src={avatar_url}
          alt={name}
        />
        <div className="user-body">

          <button onClick={toggleView} className="btn btn-link">
            <h4 className="user-name">{name}</h4>
          </button>
          <h5>{login}</h5>
          <p>{company}</p>
          <p>{location}</p>
          <strong>Bio:</strong>
          <p>{bio}</p>
          <strong>Statistic:</strong>
          <p>Repositories: {public_repos}</p>
          <p>Following: {following}</p>
          <p>Followers: {followers}</p>
        </div>
      </div>
    )}
  </div>
);

const state2Props = state => ({
  ...getProfile(state),
  isLoading: isLoading(state)
});

export default connect(state2Props)(GithubProfile);

