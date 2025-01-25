import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadGames } from "./actions/gameActions";
import styled from "styled-components";
import { motion } from "framer-motion";
import GameCard from "./components/GameCard";
import './main.css'
import GameDetail from "./components/GameDetail";
import Nav from "./components/Nav";
import { div } from "framer-motion/client";
import { fadeIn } from "./animation";
function App() {
  const dispatch =useDispatch();
  useEffect(()=>{
    dispatch(loadGames());
  },[dispatch])
  const {newGames,popular,upcoming,searched}=useSelector(state=>state.games);
  
  const {game}=useSelector((state)=>state.detail);

  return (
    <>
      <GameList variants={fadeIn} initial="hidden" animate="show">
        <Nav/>
        {game.id&& <GameDetail/>}
        {searched.length?<div>
          <h2>Searched Games</h2>
        <Games>
            {searched.map(game=>(
              <GameCard key={game.id} name={game.name} id={game.id} released={game.released} background={game.background_image} />
            ))}
        </Games>
        </div>:''}
        <h2>Upcoming Games</h2>
        <Games>
            {upcoming.map(game=>(
              <GameCard key={game.id} name={game.name} id={game.id} released={game.released} background={game.background_image} />
            ))}
        </Games>
        <h2>popular</h2>
        <Games>
            {popular.map(game=>(
              <GameCard key={game.id} name={game.name} id={game.id} released={game.released} background={game.background_image}/>
            ))}
        </Games>
        <h2>newGames</h2>
        <Games>
            {newGames.map(game=>(
              <GameCard key={game.id} name={game.name} id={game.id} released={game.released} background={game.background_image}/>
            ))}
        </Games>
      </GameList>
    </>
  );
}
const GameList=styled(motion.div)`
padding:0rem 5rem;
h2{
  padding:5rem 0rem;
}
`
const Games = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 5rem 3rem;
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 2rem 1rem;
  }
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 1rem 0.5rem;
  }
`;
export default App;
