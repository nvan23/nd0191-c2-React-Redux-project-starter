import { createStore } from 'redux';
import root from '../reducers';
import middleware from "../middleware";

const store = createStore(root, middleware);

export default store;
