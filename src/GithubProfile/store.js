export const SAVE_TYPE = 'PROFILE::SAVE';

export const save = profile => ({
  type: SAVE_TYPE, payload: profile
});

export const initialState = {
  id: null,
  year: 0,
  name: '',
  login: '',
  company: '',
  location: '',
  following: '',
  followers: '',
  avatar_url: '',
  public_repos: '',
  bio: ''
};


const profile = (state = initialState, { type, payload }) => (
  type === SAVE_TYPE
    ? ({ ...state, ...payload })
    : state
);

export default { profile };

export const getProfile = state => state.profile;