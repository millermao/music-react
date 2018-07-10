import {createStore} from 'redux';
import toDo from '../combilneReducer/reducer';

const store = createStore(toDo);

export default store;