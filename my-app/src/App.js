import Dashboard from './Pages/Course_Dashboard/Dashboard';
import EnrolledCourse from './Pages/Course_Enrolled/EnrolledCourses';
import Files from './Pages/Files/FileDashboard';
import Landing from './Pages/Landing/Landing';
import Login from './Pages/login/Login';
import Register from './Pages/registration/register';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path='/registration' element={<Register/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/enrolled_courses' element={<EnrolledCourse/>}/>
      <Route path='/files' element={<Files/>}/>
      <Route path='/home' element={<Landing/>}/>
      <Route path='*' element={404}/>
    </Routes>
    
  );
}

export default App;
