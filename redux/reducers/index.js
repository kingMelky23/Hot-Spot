import {combineReducers} from 'redux'
import {eventIDReducer} from './eventIdReducer'
import {coordinatesReducer} from "./coordinatesReducer"

export default combineReducers({eventIDReducer,coordinatesReducer})