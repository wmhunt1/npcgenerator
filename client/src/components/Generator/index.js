import React, { useState, } from "react";
import "./index.css";
import ageArray from "../../arrays/ageArray.js";
import genderArray from "../../arrays/genderArray.js";
import raceArray from "../../arrays/raceArray.js";
import jobArray from "../../arrays/jobArray.js";
import personalityArray from "../../arrays/personalityArray.js";
import motivationArray from "../../arrays/motivationArray.js";

function Generator() {
    const [age, setAge] = useState(ageArray[Math.floor((Math.random() * ageArray.length))]);
    const [gender, setGender] = useState(genderArray[Math.floor((Math.random() * genderArray.length))]);
    const [race, setRace] = useState(raceArray[0]);
    const [subRace, setSubRace] = useState(raceArray[0].subRace[Math.floor((Math.random() * raceArray[0].subRace.length))]);
    const [job, setJob] = useState(jobArray[Math.floor((Math.random() * jobArray.length))]);
    const [personality, setPersonality] = useState(personalityArray[Math.floor((Math.random() * personalityArray.length))]);
    const [motivation, setMotivation] = useState(motivationArray[Math.floor((Math.random() * motivationArray.length))]);
    const [npc, setNPC] = useState(age + " " + gender + " " + subRace + " " + race.raceName + " the " + job.jobName);
    const randomNPC = () => {
        const randomAge = Math.floor((Math.random() * ageArray.length));
        setAge(ageArray[randomAge]);
        const randomGender = Math.floor((Math.random() * genderArray.length));
        setGender(genderArray[randomGender]);
        const randomRace = Math.floor((Math.random() * raceArray.length));
        setRace(raceArray[randomRace]);
        const randomSubRace = raceArray[randomRace].subRace[Math.floor((Math.random() * raceArray[randomRace].subRace.length))]
        setSubRace(randomSubRace);
        const randomJob = Math.floor((Math.random() * jobArray.length));
        setJob(jobArray[randomJob]);
        const randomPersonality = Math.floor((Math.random() * personalityArray.length));
        setPersonality(personalityArray[randomPersonality]);
        const randomMotivation = Math.floor((Math.random() * motivationArray.length));
        setMotivation(motivationArray[randomMotivation]);
        setNPC(age + " " + gender + " " + subRace + " " + race.raceName + " the " + job.jobName);
    };
    return (
        <div>
            {/* {age}
            {gender}
            {subRace}
            {race.raceName} 
            {job}*/}
            {/* first time is always undefined */}
            <h2>Character Sheet</h2>
            <p>{npc}</p>
            <h3>Description</h3>
            <p></p>
            <h3>Personality</h3>
            <p>{personality.name} - {personality.description}</p>
            <h3>Motivation</h3>
            <p>{motivation.name} - {motivation.description}</p>
            <button onClick={() => randomNPC()}>Generate New NPC</button>
        </div>
    );
}
export default Generator;