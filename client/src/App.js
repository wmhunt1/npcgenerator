import React from "react";
import "./App.css";
import Generator from './components/Generator/'
import CharacterSheet from './components/CharacterSheet'

function App() {
  return (
    <div className="App">
      <h1>NPC Generator</h1>
      <Generator />
      <CharacterSheet />
    </div>
  );
}


export default App;
