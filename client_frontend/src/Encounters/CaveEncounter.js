import React from "react";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import CharacterEncounterInfo from "../Characters/CharacterEncounterInfo";
import CaveEntranceOptions from "../Options/CaveEntranceOptions";

const CaveEncounter = ({
  user,
  charAlive,
  setCharAlive,
  passedRoom,
  setPassedRoom,
}) => {
  const [caveEncounter, setCaveEncounter] = useState({});
  const [caveEncounterLog, setCaveEncounterLog] = useState([]);

  useEffect(() => {
    fetch("/api/encounters/2")
      .then((resp) => resp.json())
      .then((encounter) => setCaveEncounter(encounter));
  }, []);

  return (
    <div id="encounter-one">
      <h1>{caveEncounter.encounter_name}</h1>
      <p>{caveEncounter.encounter_desc}</p>
      <br />
      {caveEncounterLog &&
        caveEncounterLog.map((log) => {
          return <p>{log}</p>;
        })}
      <CaveEntranceOptions
        setCharAlive={setCharAlive}
        caveEncounterLog={caveEncounterLog}
        setCaveEncounterLog={setCaveEncounterLog}
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

export default CaveEncounter;
