import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Bazargam from './body/bazargam'
import Layout from './layouts/layouts';
import Login from './login/login'
import Register from './register/register'

// import Bazargam from './09-practiceEshop/bazargam';
// import Layout from './09-practiceEshop/Layouts/Layouts';
// import Login from './09-practiceEshop/Login/login';
// import Register from './09-practiceEshop/Register/Register';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='' element={<Layout />} >
          <Route index element={<Bazargam />} />
          <Route path='login' element={<Login />} />
          <Route path='register' element={<Register />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
