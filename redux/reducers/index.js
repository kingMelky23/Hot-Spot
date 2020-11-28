import {combineReducers} from 'redux'
import {eventIDReducer} from './eventIdReducer'
import {coordinatesReducer} from "./coordinatesReducer"
import {groupNameReducer} from './groupNameReducer'

export default combineReducers({eventIDReducer,coordinatesReducer,groupNameReducer})