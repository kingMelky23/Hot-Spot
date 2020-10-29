import {SET_EVENT_ID} from './types'

export const Event_Id =(id)=>{
    return{
        type: SET_EVENT_ID,
        payload: id
    }
}

