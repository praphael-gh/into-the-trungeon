import { useState } from 'react'

const CaveEntranceOptions = ({caveEncounter}) => {
  const [searched, setSearched] = useState(false);
  const [traverseDesc, setTraverseDesc] = useState()

  let searchObject = caveEncounter && caveEncounter.searches
  
  const traverseRoom = () => {
    if (searched) {
      return (
        console.log('You carefully cross the small path.')
      )
    } else {
      return (
        console.log('You foolhardedly charge forward into the chasm, sending yourself to death')
      )
    }
  };

  const searchRoom = () => {
    fetch("/api/searches/2")
        .then(resp => resp.json())
        .then(search => console.log(search.search_desc))
        .then(() => setSearched(true))
  };
    
  return (
    <div id="terrain-options">
      <button onClick={() => traverseRoom()}>Traverse</button>
      <br/>
      <button onClick={() => searchRoom()}>Search</button>
    </div>
  );
};

export default CaveEntranceOptions;
