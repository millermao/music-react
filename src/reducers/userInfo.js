//定义reducer
import {INCREMENT,DECREMENT} from '../actionType/type'
function counter (state=0,action){
    switch(action.type){
        case INCREMENT:
            return state+1
        case DECREMENT:
            return state-1
        default:
            return state       
    }
}
export default counter