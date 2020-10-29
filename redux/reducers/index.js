import {combineReducers} from 'redux'
import {SET_EVENT_ID, GET_EVENT_ID} from '../actions/types';

const intialState = "";

const eventIDReducer = (state = intialState,action) =>{
    switch(action.type){
        case SET_EVENT_ID:
            return action.payload
        default:
            return state
    }
}

combineReducers({
    eventsIDReducer: eventIDReducer,
    
})