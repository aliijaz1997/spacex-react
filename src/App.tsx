import React from 'react';
// import logo from './logo.svg';
import './App.css';
import LaunchedMissionsss from './components/LaunchedMissions/index'
import Missions from './components/MissionDetail/index'
function App() {
  return (
    <div className="App">
      <LaunchedMissionsss/>
      <Missions/>
    </div>
  );
}

export default App;
