import {
  combineReducers,
  legacy_createStore as createStore,
} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import areaReducer from './area';
import cityReducer from './city';

const reducer = combineReducers({
  area: areaReducer,
  city: cityReducer,
});
const store = createStore(reducer, composeWithDevTools());

export type RootState = ReturnType<typeof store.getState>;

export default store;
