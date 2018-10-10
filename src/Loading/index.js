export const LOAD_START = 'LOADING::START';
export const LOADING_END = 'LOADING::END';

export const start = () => ({ type: LOAD_START });
export const end = () => ({ type: LOADING_END });

const loading = (state = false, { type }) => (
  type === LOAD_START ? true :
  type === LOADING_END ? false :
  state
);

export default { loading };

export const isLoading = state => state.loading;