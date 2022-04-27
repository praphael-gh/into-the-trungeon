import React from "react";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import CharacterEncounterInfo from "../Characters/CharacterEncounterInfo";
import LoneGoblinOptions from "../Options/LoneGoblinOptions";

const LoneGoblinEncounter = ({
  charAlive,
  setCharAlive,
  passedRoom,
  setPassedRoom,
}) => {
  const [goblinEncounter, setGoblinEncounter] = useState({});
  const [goblinEncounterLog, setGoblinEncounterLog] = useState([]);
  

  useEffect((setPassedRoom) => {
    fetch("/api/encounters/3")
      .then((resp) => resp.json())
      .then((encounter) => {
        setGoblinEncounter(encounter)
        setPassedRoom(false)
      });
  }, []);

  return (
    <div id="encounter-one">
      <h1>{goblinEncounter.encounter_name}</h1>
      <p>{goblinEncounter.encounter_desc}</p>
      <br />
      {goblinEncounterLog &&
        goblinEncounterLog.map((log) => {
          return <p>{log}</p>;
        })}
      <LoneGoblinOptions
        setCharAlive={setCharAlive}
        goblinEncounterLog={goblinEncounterLog}
        setGoblinEncounterLog={setGoblinEncounterLog}
        setPassedRoom={setPassedRoom}
      />
      {charAlive ? (
        passedRoom ? (
          <NavLink to="/encounter-2" exact>
            Next Room
          </NavLink>
        ) : (
          <p>Make a choice</p>
        )
      ) : (
        <NavLink to="/" exact>
          You are dead
        </NavLink>
      )}
      <CharacterEncounterInfo />
    </div>
  );
};

export default LoneGoblinEncounter;
