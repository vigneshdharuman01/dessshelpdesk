
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes,Route } from 'react-router-dom';
import Loginform from './components/Login Folder/Loginform';
import Clint from './components/Clint Folder/Clint';
import Admin from './components/Admin Folder/Admin';
import Worker from './components/Worker Folder/Worker';
import Profile from './components/subComponent/profile/Profile';




function App() {
  return (
    <div className="App">
     <Routes>
          <Route path="/" element={<Loginform/>} />
          <Route path="/client" element={<Clint/>} />
          <Route path="/admin" element={<Admin/>} />
          <Route path='/worker' element={<Worker/>}/>
          <Route path='/profile' element={<Profile/>}/>
     </Routes>
    </div>
  );
}

export default App;
