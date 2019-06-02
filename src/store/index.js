import accessToken from "./token-reducer";
import {createStore} from 'redux';

const store = createStore(accessToken);

export default store;
