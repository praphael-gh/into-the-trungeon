import React from "react";
import { useEffect, useState } from "react";

const CharacterLister = ({ user, selectedCharacter, setSelectedCharacter }) => {
  const [characterArray, setCharacterArray] = useState([]);

  useEffect(() => {
    fetch("/api/characters")
      .then((resp) => resp.json())
      .then((characters) => setCharacterArray(characters));
  }, []);

  const confirmCharSelection = (e) => {
    console.log(selectedCharacter)
    let userCharacter = new FormData()
    userCharacter.append("char_name", e.target.value)
    fetch("/api/characters", {
      method:"POST",
      body: selectedCharacter
    })
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
      <label>Character Name:</label>
      <br/>
      <input type="text"/>
      <br/>
      <button onClick={(e) => confirmCharSelection(e)}>Confirm Character Selection</button>
    </div>
  );
};

export default CharacterLister;
