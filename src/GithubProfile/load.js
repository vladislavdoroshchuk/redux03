import { save } from './store';
import { fetchProfile } from './profile';

export const loadProfile = url => fetchProfile(url).then(save);
// -> Promise.resolve({ type: SAVE_TYPE, payload: { ...book } })