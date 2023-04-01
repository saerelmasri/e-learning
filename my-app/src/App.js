import Dashboard from './Pages/Course_Dashboard/Dashboard';
import Login from './Pages/login/Login';
import Register from './Pages/registration/register';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path='/registration' element={<Register/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
    </Routes>
    
  );
}

export default App;
