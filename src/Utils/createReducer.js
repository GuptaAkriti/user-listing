export default function createReducer(initialState, handlers) {
    return function reducer(state, action) {
      let returnValue = state;
      if (typeof state === 'undefined') {
        returnValue = initialState;
      } else if (Object.prototype.hasOwnProperty.call(handlers, action.type)) {
        returnValue = handlers[action.type](state, action);
      }
      return returnValue;
    };
  }
  