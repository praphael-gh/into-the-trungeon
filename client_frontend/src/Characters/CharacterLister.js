import React from "react";
import { useEffect, useState } from "react";

const CharacterLister = ({ user, selectedCharacter, setSelectedCharacter }) => {
  const [characterArray, setCharacterArray] = useState([]);
  const [playerCharName, setPlayerCharName] = useState('')

  useEffect(() => {
    fetch("/api/default-chars")
      .then((resp) => resp.json())
      .then((characters) => setCharacterArray(characters));
  }, []);

  const confirmCharSelection = (charState) => {
    setSelectedCharacter({
      ...charState.char_name = playerCharName,
      ...charState
    })
    console.log(selectedCharacter)
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
      <h3>Selected Class: </h3>
      <p>{selectedCharacter.char_class ? selectedCharacter.char_class : "No Character Selected"}</p>
      <label>Character Name:</label>
      <input type="text" onChange={e => setPlayerCharName(e.target.value)}/>
      <button onClick={() => confirmCharSelection(selectedCharacter)}>Confirm Character Selection</button>
    </div>
  );
};

export default CharacterLister;
