import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/index';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
console.log(createStoreWithMiddleware);

export default function configureStore(initialState) {
  const store = createStoreWithMiddleware(rootReducer, initialState);

  return store;
}
