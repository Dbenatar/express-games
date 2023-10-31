import axios from "axios";
import './App.css'

function App() {

async function getGames(event) {
  event.preventDefault();
  const API = `http://lovalhost:8080/games`;
  const res = await axios.get(API)
 console.log(res)
}
  return (
    <><form onSubmit={getGames}></form>
    <button>Git Gud</button>
    </>
  )
}

export default App
