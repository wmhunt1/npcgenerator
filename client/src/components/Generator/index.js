import React, { useState, } from "react";
import "./index.css";

const ageArray = ["Adolescent", "Adult", "Middle-Aged", "Old"]
const genderArray = ["Male", "Female"]
const raceArray = [
    // {
    //     raceName: "N",
    //     subRace:
    //     []
    // }
     {
        raceName: "Aasimar",
        subRace:
        []
    },
    {
        raceName: "Dragonborn",
        subRace:
            ["Black", "Blue", "Brass", "Bronze", "Copper", "Gold",
                "Green", "Red", "Silver", "White"]
    },
    {
        raceName: "Dwarf",
        subRace:
            ["Hill", "Dwarf", "Duergar (Gray)"]
    },
    {
        raceName: "Eladrin",
        subRace:
            ["Autumn", "Spring", "Summer", "Winter"]
    },
    {
        raceName: "Elf",
        subRace:
            ["Dark", "High", "Sea", "Wood"]
    },
    {
        raceName: "Genasi",
        subRace:
        ["Air", "Earth", "Fire", "Water"]
    },
    {
        raceName: "Goliath",
        subRace:
        ["Cloud", "Fire", "Frost",  "Hill", "Stone", "Storm" ]
    },
    {
        raceName: "Gnome",
        subRace:
            ["Forest", "Rock", "Svirfneblin (Deep)"]
    },
    {
        raceName: "Half-Elf",
        subRace: [""]
        // subRace:
        //     ["Dark Elf Heritage", "High Elf Heritage", "Sea Elf Heritage", "Wood Elf Heritage"]
    },
    {
        raceName: "Half-Orc",
        subRace:
            [""]
    },
    {
        raceName: "Hafling",
        subRace:
            ["Lightfoot", "Ghostwise", "Stout"]
    },
    {
        raceName: "Human",
        subRace:
            [""]
    },
    {
        raceName: "Tiefling",
        //maybe put color here
        subRace:
            ["Black", "Blue", "Green", "Gray", "Orange", "Pink", "Purple", "Red", "White", "Yellow"]
    }
];
function Generator() {
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("");
    const [race, setRace] = useState("");
    const [subRace, setSubRace] = useState("")
    const [npc, setNPC] = useState("")
    const randomNPC = () => {
        const randomAge = Math.floor((Math.random() * ageArray.length));
        setAge(ageArray[randomAge]);
        const randomGender = Math.floor((Math.random() * genderArray.length));
        setGender(genderArray[randomGender]);
        const randomRace = Math.floor((Math.random() * raceArray.length));
        setRace(raceArray[randomRace]);
        const randomSubRace = raceArray[randomRace].subRace[Math.floor((Math.random() * raceArray[randomRace].subRace.length))]
        setSubRace(randomSubRace);
        setNPC(age + " " +  gender + " " + subRace + " " +  race.raceName);
    };
    return (
        <div>
            {/* {age}
            {gender}
            {subRace}
            {race.raceName} */}
            {npc}
            <br></br>
            {/* first time is always undefined */}
            <button onClick={() => randomNPC()}>Generate NPC</button>
        </div>
    );
}
export default Generator;