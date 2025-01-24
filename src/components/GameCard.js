import styled from "styled-components";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { loadDetail } from "../actions/detailAction";
const GameCard=({name,id,released,background})=>{
    const dispatch=useDispatch()
    const loadDetailhandler=()=>{
        dispatch(loadDetail(id))
        
    }
    return(
        <>
            <GameStyled onClick={loadDetailhandler}>
                <h3>{name}</h3>
                <p>{released}</p>
                <img src={background} alt="" />
            </GameStyled>
        </>
    )
}
const GameStyled=styled(motion.div)`
    min-height:30vh;
    box-shadow:0px 5px 20px rgba(0,0,0,0.2);
    text-align:center;
    border-radius:1rem;
    img{
        width:100%;
        height:40vh;
        border-radius:0 0 1rem 1rem;
        display:block;
        object-fit:cover;
    }
`
export default GameCard;