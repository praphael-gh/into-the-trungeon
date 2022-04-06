import { useEffect, useState } from "react";

import Login from "./Login/Login";
import Logout from "./Login/Logout";
import CharacterLister from "./characters/CharacterLister";


function App() {
  const [user, setUser] = useState(null);
  const [selectedCharacter, setSelectedCharacter] = useState({});

  useEffect(() => {
    fetch("/api/me").then((response) => {
      if (response.ok) {
        response.json().then((newUser) => setUser(newUser));
      }
    });
  }, []);

  if (user) {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Welcome to Trungeon</h1>
        </header>
        <div id="select-character">
          <CharacterLister
          user={user}
            selectedCharacter={selectedCharacter}
            setSelectedCharacter={setSelectedCharacter}
          />
        </div>
        <Logout user={user} logout={setUser}/>
        <p>Logged In: {user.username
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        }</p>
      </div>
    );
  } else {
    return (
      <div id="app-login">
        <Login setUser={setUser} />
      </div>
    );
  }
}

export default App;
