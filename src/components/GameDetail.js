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
    //platform icon
    const platformIcon=(platform)=>{
        switch(platform){
            case 'PlayStation 5':
                return <i key={'playstation'} className="fa-brands fa-playstation"></i>
            case 'PlayStation 4':
                return <i key={'playstation'} className="fa-brands fa-playstation"></i>
            case 'PC':
                return <i key={'desktop'} className="fa-solid fa-desktop"></i>
            case 'Xbox One':    
                return <i key={'xbox'} className="fa-brands fa-xbox"></i>
            case 'Xbox Series S/X':
                return <i key={'xbox'} className="fa-brands fa-xbox"></i>
            default :
                return <i key={'steam'} className="fa-brands fa-steam"></i>
        }
    }
    //platform rating start
    const ratingStar=()=>{
        const stars=[];
        const rating=Math.floor(game.rating);
        for(let i=1;i<=5;i++){
            if(i<=rating){
                stars.push(<i className="fa-solid fa-star"></i>);
            }
            else{
                stars.push(<i className="fa-regular fa-star"></i>)
            }
        }
        return stars;
    }
    return(
        <>
        <div className="card-shadow" onClick={exitHandler}>
            <div className="detail">
                <div className="status">
                    <div className="rating">
                        <h3>{game.name}</h3>
                        <p>Rating:{ratingStar()}</p>
                    </div>
                    
                    <div className="info">
                        <h3>platforms</h3>
                        <div className="platforms">
                            {game.platforms.map(data=>(
                                platformIcon(data.platform.name)
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