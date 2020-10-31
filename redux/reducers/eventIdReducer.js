import {SET_EVENT_ID} from '../actions/types';

const INITAL_STATE = "";

export const eventIDReducer = (state = INITAL_STATE,action) =>{
    switch(action.type){
        case SET_EVENT_ID:
            return action.payload
        default:
            return state
    }
}