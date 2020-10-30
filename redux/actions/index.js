import {SET_EVENT_ID} from './types'

export const set_Event_Id =(id="1")=>{
    return{
        type: SET_EVENT_ID,
        payload: id
    }
}

