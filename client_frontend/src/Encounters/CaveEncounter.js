import React from "react";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import CaveEntranceOptions from "../Options/CaveEntranceOptions"

const CaveEncounter = ({ user }) => {
  const [playerChar, setPlayerChar] = useState({});
  const [charAlive, setCharAlive] = useState(true);
  const [caveEncounter, setCaveEncounter] = useState({});
  const [caveEncounterLog, setCaveEncounterLog] = useState([]);

  useEffect(() => {
    fetch("/api/encounters/2")
      .then((resp) => resp.json())
      .then((encounter) => setCaveEncounter(encounter));
  }, []);

  useEffect(() => {
    fetch("/api/char")
      .then((resp) => resp.json())
      .then((char) => setPlayerChar(char));
  }, []);

  let skills = playerChar.skills;
  let items = playerChar.items;
  let spells = playerChar.spells;

  return (
    <div id="encounter-one">
      <h1>{caveEncounter.encounter_name}</h1>
      <p>{caveEncounter.encounter_desc}</p>
      <br />
      {caveEncounterLog && caveEncounterLog.map(log => {
        return (
          <p>{log}</p>
        )
      })}
      <CaveEntranceOptions charAlive={charAlive} setCharAlive={setCharAlive} caveEncounterLog={caveEncounterLog} setCaveEncounterLog={setCaveEncounterLog} />
      {charAlive ? <p>Make a choice</p> : <NavLink to="/" >You are dead</NavLink> }
      <h2>{playerChar.char_name}</h2>
      <p>{playerChar.char_desc}</p>
      <h3>Skills</h3>
      {skills &&
        skills.map((skill) => {
          return (
            <div key={skill.id} id={skill.skill_name}>
              <h4>{skill.skill_name}</h4>
              <p>{skill.skill_desc}</p>
              <br />
            </div>
          );
        })}
      <h3>Items</h3>
      {items &&
        items.map((item) => {
          return (
            <div key={item.id} id={item.item_name}>
              <h4>{item.item_name}</h4>
              <p>{item.item_desc}</p>
              <br/>
            </div>
          );
        })}
      <h3>Spells</h3>
      {spells &&
        spells.map((spell) => {
          return (
            <div key={spell.id} id={spell.item_name}>
              <h4>{spell.spell_name}</h4>
              <p>{spell.spell_desc}</p>
            </div>
          );
        })}
    </div>
  );
};

export default CaveEncounter;
