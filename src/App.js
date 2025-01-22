import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadGames } from "./actions/gameActions";
import styled from "styled-components";
import { motion } from "framer-motion";
import GameCard from "./components/GameCard";
import './main.css'
function App() {
  const dispatch =useDispatch();
  useEffect(()=>{
    dispatch(loadGames());
  },[dispatch])
  const {newGames,popular,upcoming}=useSelector(state=>state.games);
  console.log(newGames,popular,upcoming);
  
  return (
    <>
      <GameList>
        <h2>Upcomig Games</h2>
        <Games>
            {upcoming.map(game=>(
              <GameCard name={game.name} id={game.id} released={game.released} background={game.background_image} />
            ))}
        </Games>
        <h2>popular</h2>
        <Games>
            {popular.map(game=>(
              <GameCard name={game.name} id={game.id} released={game.released} background={game.background_image}/>
            ))}
        </Games>
        <h2>newGames</h2>
        <Games>
            {newGames.map(game=>(
              <GameCard name={game.name} id={game.id} released={game.released} background={game.background_image}/>
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
const Games=styled(motion.div)`
min-height:80vh;
display:grid;
grid-template-columns:repeat(auto-fit,minmax(250px,1fr));
gap:5rem 3rem
`
export default App;
