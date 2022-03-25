import React from "react";
import { useEffect, useState } from "react";

const CharacterLister = ({ selectedCharacter, setSelectedCharacter }) => {
  const [characterArray, setCharacterArray] = useState([]);

  useEffect(() => {
    fetch("/api/characters")
      .then((resp) => resp.json())
      .then((characters) => setCharacterArray(characters));
  }, []);

  const confirmCharSelection = (charSelcted) => {
    fetch("/api")
  }

  return (
    <div id="character_select">
      {characterArray.map((character) => {
        return (
          <div
            id={character.char_name}
            key={character.id}
            onClick={() => {
              setSelectedCharacter(character);
            }}
          >
            <h1>{character.char_name}</h1> 
            <div id={`${character.char_name}-desc`} className="description">
              <p>{character.char_desc}</p>
              <label>Character Skills</label>
              <ul>
                {character.skills.map(skill => {
                  return (
                    <li key={skill.id}>{skill.skill_name}</li>
                  )
                })}
              </ul>
            </div>
            
          </div>
        );
      })}
      <button onClick={() => console.log(selectedCharacter)}>Confirm Character Selection</button>
    </div>
  );
};

export default CharacterLister;
