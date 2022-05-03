import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './layouts/layouts';
import Home from './views/Home/bazargam'
import Login from './views/login/login'
import Register from './views/register/register'

// import Bazargam from './09-practiceEshop/bazargam';
// import Layout from './09-practiceEshop/Layouts/Layouts';
// import Login from './09-practiceEshop/Login/login';
// import Register from './09-practiceEshop/Register/Register';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='' element={<Layout />} >
          <Route index element={<Home />} />
          <Route path='login' element={<Login />} />
          <Route path='register' element={<Register />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
