//BOOTSTRAP V-5.3
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

//Custom CSS file
import './css/task2.css';

//packages
import { BrowserRouter, Route, Routes } from 'react-router-dom';

//Components
import { Tech } from './components/task7/Technology';
import { Login } from './components/task6/login';
import { Congrats } from './components/task-2/task-2';
import { Super } from './components/task3/task3';
import { Buttons } from './components/task4/SocialButton';
import { Notificatoin } from './components/task5/Notification';
import { Menu } from './components/task8/menu';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={[<Menu/>,<Congrats />]}></Route>
          <Route path="/Super" element={[<Menu/>,<Super />]}></Route>
          <Route path="/Buttons" element={[<Menu/>,<Buttons />]}></Route>
          <Route path="/Notificatoin" element={[<Menu/>,<Notificatoin />]}></Route>
          <Route path="/Login" element={[<Menu/>,<Login />]}></Route>
          <Route path="/Tech" element={[<Menu/>,<Tech />]}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
