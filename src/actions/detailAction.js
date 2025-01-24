import axios from "axios";
import {gameDetailUrl,gameScreenshotsUrl} from "../api";


export const loadDetail=(id)=>async(dispatch)=>{
    

    const detailData=await axios.get(gameDetailUrl(id));
    const screenshotData=await axios.get(gameScreenshotsUrl(id));
    dispatch({
        type:'GET_DETAIL',
        payload:{
            game:detailData.data,
            screen:screenshotData.data
        }
    })


}
export const emptyDetail=()=>{
    return{
        type:"EMPTY_DETAIL",
        payload:{
            game:{},
            screen:{}
        }
    }
}