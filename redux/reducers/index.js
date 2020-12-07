import {combineReducers} from 'redux'
import {eventIDReducer} from './eventIdReducer'
import {coordinatesReducer} from "./coordinatesReducer"
import {groupNameReducer} from './groupNameReducer'
import {currentUserReducer} from "./currentUserReducer"

export default combineReducers({eventIDReducer,coordinatesReducer,groupNameReducer,currentUserReducer})