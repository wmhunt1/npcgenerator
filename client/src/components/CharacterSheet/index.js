import React, { useState, } from "react";
import "./index.css";
import npc from "../Generator"

function CharacterSheet(){
return (
    <div>
        <h1>Character</h1>
        <p>{npc}</p>
    </div>
)
}
export default CharacterSheet;