import { useState } from "react";
import './App.css';

import data from "./starwarsdata";

function App() {
  const [characters, setCharacters] = useState(data);

  // in case anyone is still having trouble with list management, this should help
  const deleteCharacter = i => {
    const trimmedList = characters.filter((character, index) => i !== index);
    setCharacters(trimmedList);
  }

  const resetCharacterList = () => setCharacters(data);

  return (
    <div className="App">
      <header className="App-header">
        {characters.map((character, i) => (
          <Character 
            key={`${i}-character`}
            deleteCharacter={() => deleteCharacter(i)}
            {...character}
          />
        ))}
      </header>
      <button onClick={resetCharacterList}>Reset</button>
    </div>
  );
}

export default App;

const Character = ({ title, age, homeworld, destiny, url, worldColor, deleteCharacter }) => (
  <div>
    {title}
    <button onClick={deleteCharacter}>Delete</button>
  </div>
);


