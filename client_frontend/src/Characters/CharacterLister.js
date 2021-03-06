import React from "react";
import { useEffect, useState } from "react";

import "./CharactersCSS/CharacterLister.css";

const CharacterLister = ({ user, selectedCharacter, setSelectedCharacter }) => {
  const [characterArray, setCharacterArray] = useState([]);
  // const [playerCharName, setPlayerCharName] = useState('')

  useEffect(() => {
    fetch("/api/default-chars")
      .then((resp) => resp.json())
      .then((characters) => setCharacterArray(characters));
  }, []);

  const confirmCharSelection = (charState) => {
    fetch(`/api/characters/${charState.id}`)
      .then((resp) => resp.json())
      .then((character) => console.log(character));
  };

  return (
    <>
      <div id="character-select">
        {characterArray.map((character) => {
          return (
            <div
              id={character.char_name}
              key={character.id}
              className="character"
              onClick={() => {
                setSelectedCharacter(character);
              }}
            >
              <h1>{character.char_name}</h1>
              <div className="character-img">
                <img
                  src={
                    process.env.PUBLIC_URL +
                    `/images/character${character.id}.png`
                  }
                  alt={`character-${character.id}`}
                />
              </div>

              <div id={`${character.char_name}-desc`} className="description">
                <p>{character.char_desc}</p>
                <label>Character Skills</label>
                <ul>
                  {character.skills.map((skill) => {
                    return <li key={skill.id}>{skill.skill_name}</li>;
                  })}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
      <div id='confirm-class'>
        <h3>Selected Class: </h3>
        <p>
          {selectedCharacter.char_class
            ? selectedCharacter.char_class
            : "No Character Selected"}
        </p>
        <button onClick={() => confirmCharSelection(selectedCharacter)}>
          Confirm Character Selection
        </button>
      </div>
    </>
  );
};

export default CharacterLister;
