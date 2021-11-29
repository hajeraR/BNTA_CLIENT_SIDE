import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './containers/Homepage';
import Gameboard from "./containers/GameBoard";
import RollDice from "./components/RoleDice";

function App() {
  return (
    <BrowserRouter>
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/list-of-spells" element={<Gameboard />} />
</Routes>
    </BrowserRouter>
  );
}

export default App;
