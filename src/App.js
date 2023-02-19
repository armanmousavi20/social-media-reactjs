
import Home from "./pages/home/Home";
 import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
 import Register from "./pages/register/Register";
 import { Route , Routes } from 'react-router-dom';

function App() {
  return(<div> 
              <Routes>
                     <Route  path="/" element={ <Login /> } />
                     <Route path="/register" element={ <Register /> } />
                     <Route path="/profile" element={ <Profile /> } />
                     <Route path="/home" element={ <Home /> } />
              </Routes>
         </div>);
}

export default App;
