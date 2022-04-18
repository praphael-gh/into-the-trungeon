import { useEffect, useState } from "react";
import { Routes, Route, NavLink } from "react-router-dom";

import Login from "./Login/Login";
import CharacterLister from "./Characters/CharacterLister";
import CaveEncounter from "./Encounters/CaveEncounter";

import NavBar from "./NavBar";

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
        <NavBar user={user} logout={setUser} />
        <Routes>
          <Route
            path="/"
            element={
              <div id="select-character">
                <header className="App-header">
                  <h1>Welcome to Trungeon</h1>
                </header>
                <CharacterLister
                  user={user}
                  selectedCharacter={selectedCharacter}
                  setSelectedCharacter={setSelectedCharacter}
                />
              </div>
            }
          />
          <Route
            path="/encounter-1"
            element={
              <div id="encounter-1">
                <CaveEncounter user={user} />
              </div>
            }
          />
        </Routes>
        <br />
        <NavLink
          to="/encounter-1"
          exact
          style={{
            borderRadius: "5%",
            padding: "12px",
            margin: "30px 20px",
            background: "grey",
            textDecoration: "none",
            color: "black",
            fontSize: 20,
          }}
        >
          Into The Trungeon!
        </NavLink>
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
