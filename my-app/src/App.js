import Register from './Pages/registration/register';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path='/registration' element={<Register/>}/>
    </Routes>
    
  );
}

export default App;
