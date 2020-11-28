import {SET_GROUP} from '../actions/types';

const INITAL_STATE = "";

export const groupNameReducer = (state = INITAL_STATE,action) =>{
    switch(action.type){
        case SET_GROUP:
            return action.payload
        default:
            return state
    }
}