const createInterceptor = () => {
  const _before = [];
  const _after = [];

  const unsubscribe = (_handlers, handler) => () => {
    const index = _handlers.indexOf(handler);
    if (index < 0) return;
    _handlers.splice(index, 1);
  };

  const subscribe = _handlers => handler => {
    _handlers.push(handler);
    return unsubscribe(_handlers, handler);
  };

  const notify = (_handlers, action, store, prevent) => {
    try {
      _handlers.forEach(
        handler => handler(action, store, prevent)
      )
    } catch(err) {
      console.error(err);
    }
  };

  const middleware = store => next => action => {
    let _prevented = false;
    const prevent = () => {
      _prevented = true;
    };
    notify(_before, action, store, prevent);
    if (_prevented) return null;
    const res = next(action);
    notify(_after, action, store);
    return res;
  };
  middleware.before = subscribe(_before);
  middleware.after = subscribe(_after);

  return middleware;
};

export default createInterceptor;
