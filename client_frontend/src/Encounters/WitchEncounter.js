import React from "react";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import CharacterEncounterInfo from "../Characters/CharacterEncounterInfo";

const WitchEncounter = ({
    charAlive,
    setCharAlive,
    passedRoom,
    setPassedRoom,
  }) => {

    const [witchEncounter, setWitchEncounter] = useState({})
    const [witchEncounterLog, setWitchEncounterLog] = useState([])

    useEffect(() => {
        setPassedRoom(false)
        fetch("/api/encounters/4")
          .then((resp) => resp.json())
          .then((encounter) => {
            setWitchEncounter(encounter)
          });
      }, []);
    
      return (
        <div id="encounter-two">
          <h1>{witchEncounter.encounter_name}</h1>
          <p>{witchEncounter.encounter_desc}</p>
          <br />
          {witchEncounterLog &&
            witchEncounterLog.map((log) => {
              return <p key={log}>{log}</p>;
            })}
        </div>
      )

}

export default WitchEncounter;