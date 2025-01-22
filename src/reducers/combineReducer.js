import gameReducer from "./gameReducer"
import { combineReducers } from "redux"
import detailReducer from "./detailReducer"
const rootReducer=combineReducers({
    games:gameReducer,
    game:detailReducer
})
export default rootReducer