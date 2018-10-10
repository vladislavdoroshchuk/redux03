import { start, end, isLoading } from '../Loading';
import { save, getProfile } from './store';
import { fetchProfile } from './profile';

export const loadProfile = url => async (dispatch, getState) => {
  const state = getState();
  const loadingNow = isLoading(state);
  if (loadingNow) {
    console.log('Currently loading');
    return;
  }

  const currentProfile = getProfile(state);
  if (currentProfile.id) {
    console.log('Already loaded');
    return;
  }
  dispatch(start());
  const profile = await fetchProfile(url);
  dispatch(save(profile));
  dispatch(end());
};