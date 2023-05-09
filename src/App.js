// worked with Kevin
import { useState } from 'react';
import './App.css';

function App() {

  // state var
  const [pokemons, setPokemons] = useState([])
  const fetchPokemons = () => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=807&offset=0")
      .then( (serverResponse) => {
        console.log(serverResponse)
        return serverResponse.json()
      })
      .then((jsonResponse) => {
        console.log(jsonResponse)

        // SET STATE HERE
        setPokemons(jsonResponse.results)
      })
      .catch( (errObj) => console.log("ERROR!!!", errObj))
  }

  return (
    <>
    <div className="App">
      <h1>Pokemon API</h1>
      <button onClick={fetchPokemons}>Fetch Pokemon</button>
      {/* <p>{JSON.stringify(pokemons)}</p> */}
      {pokemons.map((poke, idx) => {
        return (
        <p key={idx}><li>{poke.name}</li></p>
        )
      })
      }
    </div>
    </>
  );
}

export default App;