import { useEffect, useState } from "react";
import { Routes, Route, NavLink } from "react-router-dom";

import Login from "./Login/Login";
import CharacterLister from "./Characters/CharacterLister";

import CaveEncounter from "./Encounters/CaveEncounter";
import LoneGoblinEncounter from "./Encounters/LoneGoblinEncounter";

import NavBar from "./NavBar";

import "./AppCSS/App.css";

function App() {
  const [user, setUser] = useState(null);
  const [selectedCharacter, setSelectedCharacter] = useState({});

  const [charAlive, setCharAlive] = useState(true);
  const [passedRoom, setPassedRoom] = useState(false);

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
                <CaveEncounter
                  user={user}
                  charAlive={charAlive}
                  setCharAlive={setCharAlive}
                  passedRoom={passedRoom}
                  setPassedRoom={setPassedRoom}
                />
              </div>
            }
          />
          <Route
            path="/encounter-2"
            element={
              <div id="encounter-2">
                <LoneGoblinEncounter
                  charAlive={charAlive}
                  setCharAlive={setCharAlive}
                  passedRoom={passedRoom}
                  setPassedRoom={setPassedRoom}
                />
              </div>
            }
          />
        </Routes>
        <br />
        <div className="into-trungeon">
          <NavLink
            id="into-encounter"
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
