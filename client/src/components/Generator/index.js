import React, { useState, } from "react";
import "./index.css";
import ageArray from "../../arrays/ageArray.js";
import genderArray from "../../arrays/genderArray.js";
import raceArray from "../../arrays/raceArray.js";
import jobArray from "../../arrays/jobArray.js";

function Generator() {
    const [age, setAge] = useState(ageArray[Math.floor((Math.random() * ageArray.length))]);
    const [gender, setGender] = useState(genderArray[Math.floor((Math.random() * genderArray.length))]);
    const [race, setRace] = useState(raceArray[0]);
    const [job, setJob] = useState(jobArray[0])
    //const [race, setRace] = useState(raceArray[Math.floor((Math.random() * raceArray.length))]);
    //need to get the starting sub race to work
    //const [subRace, setSubRace] = useState("");
    const [subRace, setSubRace] = useState(raceArray[0].subRace[Math.floor((Math.random() * raceArray[0].subRace.length))]);
    const [npc, setNPC] = useState(age + " " + gender + " " + subRace + " " + race.raceName + " " + job);
    const randomNPC = () => {
        const randomAge = Math.floor((Math.random() * ageArray.length));
        setAge(ageArray[randomAge]);
        const randomGender = Math.floor((Math.random() * genderArray.length));
        setGender(genderArray[randomGender]);
        const randomRace = Math.floor((Math.random() * raceArray.length));
        setRace(raceArray[randomRace]);
        const randomSubRace = raceArray[randomRace].subRace[Math.floor((Math.random() * raceArray[randomRace].subRace.length))]
        setSubRace(randomSubRace);
        const randomJob = Math.floor((Math.random() * jobArray.length))
        setJob(jobArray[randomJob])
        setNPC(age + " " + gender + " " + subRace + " " + race.raceName + " " + job);
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