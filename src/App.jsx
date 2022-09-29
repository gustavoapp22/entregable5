 
import './App.css'
import { HashRouter, Route, Routes } from "react-router-dom";
import Users from './components/Users'
import Pookedexx from './components/Pookedexx';
import Pokedex from './components/pokedex';
 import ProtectedRoutes from './components/ProtectedRoutes';
import Red from './components/Red';


function App() {


  return (
    <HashRouter>
      <div className='App'>
        <Routes>
          <Route path="/" element={<Users />} />
           <Route element={<ProtectedRoutes/>}>

          <Route path="/pokedex/:name" element={<Pokedex />} />
          <Route path="/pokedexx/:id" element={<Pookedexx />} />
          <Route path="/red" element={<Red/>} />
          
           </Route>
        

        </Routes>
      </div>
    </HashRouter>
  )
}

export default App
