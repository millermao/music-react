import {DECREMENT,INCREMENT} from '../actionType/type';

function increment(text){
    return {type:INCREMENT,text}
}

function decrement(text){
    return {type:DECREMENT,text}
}

export {increment,decrement}