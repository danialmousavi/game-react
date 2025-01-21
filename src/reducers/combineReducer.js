import gameReducer from "./gameReducer"
import { combineReducers } from "redux"
const rootReducer=combineReducers({
    games:gameReducer
})
export default rootReducer