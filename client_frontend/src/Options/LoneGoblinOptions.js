import React from "react";
import { useState } from "react";

const LoneGoblinOptions = (
  setCharAlive,
  goblinEncounterLog,
  setGoblinEncounterLog,
  passedRoom,
  setPassedRoom
) => {
  const [searched, setSearched] = useState(false);

  const traverseRoom = () => {
    if (searched) {
      setGoblinEncounterLog([
        ...goblinEncounterLog,
        "You look to see the sobbing goblin turn its head towards you, but it seems to pay you no mind. You cross the room without issue.",
      ]);
      setPassedRoom(true);
    } else {
      setGoblinEncounterLog([
        ...goblinEncounterLog,
        "You walk into the room without a second glance. You suddenly hear the small pitter-patter of bare feet- CLONK! You are knocked out cold. A goblin has gotten the better of you.",
      ]);
      setCharAlive(false);
    }
  };

  const searchRoom = () => {
    fetch("/api/searches/3")
      .then((resp) => resp.json())
      .then((search) =>
        setGoblinEncounterLog([...goblinEncounterLog, search.search_desc])
      )
      .then(() => setSearched(true));
  };

  const sneakRoom = () => {};

  return (
    <div id="goblin-options">
      <button onClick={() => traverseRoom()}>Traverse</button>
      <br />
      <button onClick={() => searchRoom()}>Search</button>
      <br />
      <button onClick={() => sneakRoom()}>Sneak</button>
    </div>
  );
};

export default LoneGoblinOptions;
