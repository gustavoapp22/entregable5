 
import './App.css'
import { HashRouter, Route, Routes } from "react-router-dom";
import Users from './components/Users'
import Pookedexx from './components/Pookedexx';
import Red from './components/Red';
import Pokedex from './components/pokedex';


function App() {


  return (
    <HashRouter>
      <div className='App'>
        <Routes>
          <Route path="/" element={<Users />} />

          <Route path="/pokedex/:name" element={<Pokedex />} />
          <Route path="/pokedexx/:id" element={<Pookedexx />} />
          <Route path="/red" element={<Red/>} />
          
        

        </Routes>
      </div>
    </HashRouter>
  )
}

export default App
