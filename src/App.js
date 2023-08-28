import './App.css';
import Profile from './Profile';
import Dashboard from './Routes/Dashboard';
import Schedule from './Routes/Schedule';
import Preparation from './Routes/Preparation';
import Playback from './Routes/Playback';
import Account from './Routes/Account';
import Schedule2 from './Routes/Schedule2';
import Sidebar from './Sidbar';

import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Profile />
      <Sidebar />
      <Routes>
        <Route path={"/Dashboard"} element={<Dashboard />}/>
        <Route path={"/"} element={<Dashboard />}/>
        <Route path={"/Schedule"} element={<Schedule />} />
        <Route path={"/Preparation"} element={<Preparation />} />
        <Route path={"/Playback"} element={<Playback />} />
        <Route path={"/Account"} element={<Account />} />
        <Route path={"Schedule/Schedule2.js"} element={<Schedule2 />} />

      
      </Routes>
    </div>
  );
}

export default App;
