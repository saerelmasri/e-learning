import Login from './Pages/login/Login';
import Register from './Pages/registration/register';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path='/registration' element={<Register/>}/>
      <Route path='/login' element={<Login/>}/>
    </Routes>
    
  );
}

export default App;
