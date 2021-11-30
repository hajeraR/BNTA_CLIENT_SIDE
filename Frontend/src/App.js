import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './containers/Homepage';
import Gameboard from "./containers/GameBoard";
import Player from "./components/track_player/Player";
import RollDice from "./components/dice_roller/RoleDice";

function App() {
  return (

    <BrowserRouter>
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/list-of-spells" element={<Gameboard />} />
  <Route path="/player-tracker" element={<Player/>}/>
</Routes>
    </BrowserRouter>

  );
}

export default App;
