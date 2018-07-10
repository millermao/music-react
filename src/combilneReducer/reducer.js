import counter from '../reducers/userInfo';
import {combineReducers} from 'redux';

const toDo = combineReducers({
    counter
})
export default toDo