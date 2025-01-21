const initialState={
    popular:[],
    newGames:[],
    upcoming:[]
}
const gameReducer=(state=initialState,action)=>{
    switch(action.type){
        case 'FETCHGAMES':
            return {...state}
        default:
            return{...state}
    }
}
export default gameReducer