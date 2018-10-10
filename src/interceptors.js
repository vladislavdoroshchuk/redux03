import { LOAD_TYPE, save } from './GithubProfile/store';
import { fetchProfile } from './GithubProfile/profile';
import createInterceptor from './intercept-middleware';

export const interceptor = createInterceptor();

interceptor.before(
  (action, store, prevent) => {
    if (action.type !== LOAD_TYPE) return;
    if (/dle2BgAAQBAJ/.test(action.payload)) {
      console.log('Prevented', action);
      prevent();
      return;
    }
    fetchProfile(action.payload)
      .then(save)
      .then(store.dispatch)
  }
);