import { useState } from "react";

import data from "./starwarsdata";

import styled from "styled-components";

import Character from "./Components/Molocules/ShopSelect.js";

const AppBody = styled.div`
	text-align: center;
`;

function App() {
	const [characters, setCharacters] = useState(data);

	// in case anyone is still having trouble with list management, this should help
	const deleteCharacter = (i) => {
		const trimmedList = characters.filter((character, index) => i !== index);
		setCharacters(trimmedList);
	};

	const resetCharacterList = () => setCharacters(data);

	return (
		<AppBody>
			<header className="App-header">
				{characters.map((character, i) => (
					<Character key={`${i}-character`} deleteCharacter={() => deleteCharacter(i)} {...character} />
				))}
			</header>
			<button onClick={resetCharacterList}>Reset</button>
		</AppBody>
	);
}

export default App;
