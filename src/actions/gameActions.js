import axios from "axios";
import { popularGamesURL,newGamesURL,upcomingGamesURL,searchGameUrl } from "../api";


export const loadGames=()=>async(dispatch)=>{


    const popularData=await axios.get(popularGamesURL());
    const newData=await axios.get(newGamesURL());
    const upcomingData=await axios.get(upcomingGamesURL());    
    dispatch({
        type:'FETCH_GAMES',
        payload:{
            popular:popularData.data.results,
            newGames:newData.data.results,
            upcoming:upcomingData.data.results,             

        }
    })


}
export const fetchSearch=(game_Name)=>async(dispatch)=>{
const serchGames=await axios.get(searchGameUrl(game_Name));
dispatch({
    type:'FETCH_SEARCHED',
    payload:{
        searched:serchGames.data.results
    },
});
};

export const clearSearched=()=>{
    return{
        type:'CLEAR_SEARCH',
        payload:{
            searched:[{}],
        }
    }
}