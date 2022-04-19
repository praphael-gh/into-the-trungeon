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
    fetch("/api/searches/2")
      .then((resp) => resp.json())
      .then((search) =>
        setCaveEncounterLog([...caveEncounterLog, search.search_desc])
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
