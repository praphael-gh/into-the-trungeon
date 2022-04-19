import { useState } from "react";

const CaveEntranceOptions = ({
  setCharAlive,
  caveEncounterLog,
  setCaveEncounterLog,
  setPassedRoom,
}) => {
  const [searched, setSearched] = useState(false);

  const traverseRoom = () => {
    if (searched) {
      setCaveEncounterLog([
        ...caveEncounterLog,
        "You cross the small path to the other side.",
      ]);
      setPassedRoom(true);
    } else {
      setCaveEncounterLog([
        ...caveEncounterLog,
        "You foolhardedly charge forward into the chasm, sending yourself to death",
      ]);
      setCharAlive(false);
      console.log(caveEncounterLog);
    }
  };

  const searchRoom = () => {
    fetch("/api/encounters/2")
      .then((resp) => resp.json())
      .then((encounter) =>
        setCaveEncounterLog([...caveEncounterLog, encounter.searches[0].search_desc])
      )
      .then(() => setSearched(true));
  };

  return (
    <div id="cave-options">
      <button onClick={() => traverseRoom()}>Traverse</button>
      <br />
      <button onClick={() => searchRoom()}>Search</button>
    </div>
  );
};

export default CaveEntranceOptions;
