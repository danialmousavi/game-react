import { h3, img } from "framer-motion/client";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { emptyDetail } from "../actions/detailAction";
const GameDetail=()=>{
    const {game,screen}=useSelector((state)=>state.detail);
    const dispatch=useDispatch()
    const exitHandler=(e)=>{
        const element=e.target;
        if(element.classList.contains('card-shadow')){
            dispatch(emptyDetail())
        }
        
    }
    return(
        <>
        <div className="card-shadow" onClick={exitHandler}>
            <div className="detail">
                <div className="status">
                    <div className="rating">
                        <h3>{game.name}</h3>
                        <p>Rating:{game.rating}</p>
                    </div>
                    
                    <div className="info">
                        <h3>platforms</h3>
                        <div className="platforms">
                            {game.platforms.map(data=>(
                                <h3 key={data.platform.id}>{data.platform.name}</h3>
                            ))}
                        </div>
                    </div>
                </div>
            <div className="media">
                <img src={game.background_image} alt="" />
            </div>
            <div className="description">
                <p>{game.description_raw}</p>
            </div>
            <div className="gallery">
                {screen.results.map(screen=>(
                    <img src={screen.image} key={screen.id} alt="" />
                ))}
            </div>
            </div>
        </div>
        </>
    )
}
export default GameDetail