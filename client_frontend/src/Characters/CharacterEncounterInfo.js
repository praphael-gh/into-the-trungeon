import React from "react";
import { useEffect, useState } from "react";

const CharacterEncounterInfo = () => {
  const [playerChar, setPlayerChar] = useState({});
  let skills = playerChar.skills;
  let items = playerChar.items;
  let spells = playerChar.spells;

  useEffect(() => {
    fetch("/api/char")
      .then((resp) => resp.json())
      .then((char) => setPlayerChar(char));
  }, []);

  return (
    <div id="character-info">
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
              <br />
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

export default CharacterEncounterInfo;
