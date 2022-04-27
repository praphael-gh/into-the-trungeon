import { useState } from "react";

const LoneGoblinOptions = ({
  setCharAlive,
  goblinEncounterLog,
  setGoblinEncounterLog,
  setPassedRoom,
}) => {
  const [searched, setSearched] = useState(false);
  const [sneaked, setSneaked] = useState(false);
  console.log(goblinEncounterLog);

  const traverseRoom = () => {
    if (searched) {
      setGoblinEncounterLog([
        ...goblinEncounterLog,
        "You look to see the chittering goblin turn its head towards you, but it seems to pay you no mind. You cross the room without issue.",
      ]);
      setPassedRoom(true);
    } else if (searched && sneaked) {
      setGoblinEncounterLog([
        ...goblinEncounterLog,
        "Having already snuck across the room, you are able to safely leave."
      ])
      setPassedRoom(true);
    } else {
      setGoblinEncounterLog([
        ...goblinEncounterLog,
        "You walk into the room without a second glance. You suddenly hear the small pitter-patter of bare feet- CLONK! You are knocked out cold. A goblin has gotten the better of you.",
      ]);
      setCharAlive(false);
      console.log(goblinEncounterLog);
    }
  };

  const searchRoom = () => {
    fetch("/api/encounters/3")
      .then((resp) => resp.json())
      .then(encounter => 
        setGoblinEncounterLog([...goblinEncounterLog, `You see something quivering in the darkness. ${encounter.enemies[0].enemy_desc} And something else. ${encounter.searches[0].search_desc}`])
      )
      .then(() => setSearched(true))
      
  };

  const sneakRoom = () => {
    setGoblinEncounterLog([...goblinEncounterLog, 'You creep along the edge of the room, careful not to make any noise, you are able to safely traverse the room.'])
    setSneaked(true)
  };

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
