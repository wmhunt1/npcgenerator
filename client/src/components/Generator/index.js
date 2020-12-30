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
    // {
    //     raceName: "Aasimar",
    //     subRace:
    //         []
    // },
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
    // {
    //     raceName: "Eladrin",
    //     subRace:
    //         ["Autumn", "Spring", "Summer", "Winter"]
    // },
    {
        raceName: "Elf",
        subRace:
            ["Dark", "High", "Sea", "Wood"]
    },
    // {
    //     raceName: "Genasi",
    //     subRace:
    //         ["Air", "Earth", "Fire", "Water"]
    // },
    // {
    //     raceName: "Goliath",
    //     subRace:
    //         ["Cloud", "Fire", "Frost", "Hill", "Stone", "Storm"]
    // },
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
    const [age, setAge] = useState(ageArray[Math.floor((Math.random() * ageArray.length))]);
    const [gender, setGender] = useState(genderArray[Math.floor((Math.random() * genderArray.length))]);
    const [race, setRace] = useState(raceArray[0]);
    //const [race, setRace] = useState(raceArray[Math.floor((Math.random() * raceArray.length))]);
    //need to get the starting sub race to work
    //const [subRace, setSubRace] = useState("");
    const [subRace, setSubRace] = useState(raceArray[0].subRace[Math.floor((Math.random() * raceArray[0].subRace.length))]);
    const [npc, setNPC] = useState(age + " " + gender + " " + subRace + " " + race.raceName);
    const randomNPC = () => {
        const randomAge = Math.floor((Math.random() * ageArray.length));
        setAge(ageArray[randomAge]);
        const randomGender = Math.floor((Math.random() * genderArray.length));
        setGender(genderArray[randomGender]);
        const randomRace = Math.floor((Math.random() * raceArray.length));
        setRace(raceArray[randomRace]);
        const randomSubRace = raceArray[randomRace].subRace[Math.floor((Math.random() * raceArray[randomRace].subRace.length))]
        setSubRace(randomSubRace);
        setNPC(age + " " + gender + " " + subRace + " " + race.raceName);
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