import axios from "axios";
import {gameDetailUrl} from "../api";


export const loadDetail=(id)=>async(dispatch)=>{
    

    const detailData=await axios.get(gameDetailUrl(id));
 
    dispatch({
        type:'GET_DETAIL',
        payload:{
            game:detailData.data,
        }
    })


}