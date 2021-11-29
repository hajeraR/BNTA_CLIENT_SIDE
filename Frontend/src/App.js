import Navbar from "./components/Navbar";
import Player from "./components/Player";
import GameBoard from "./containers/GameBoard";

function App() {
  return (
    <>
      <Navbar />
      <h1>Player Tracker!</h1>
      <Player />
      <GameBoard />
    </>
  );
}

export default App;
