import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeName } from '../store/slices/UserName.slice';

import { useEffect } from 'react';
import axios from "axios";

import { useNavigate } from 'react-router-dom';

const Users = () => {
  
    const dispatch = useDispatch();
    const [ userName, setUserName ] = useState("");

    const [usersPant,setUsersPant] = useState({});
    const navigate = useNavigate()
    
    const rambo = (name) => {
    
    console.log(name)
    navigate(`/pokedex/${name}`)
    }

 useEffect(() =>{
    axios.get("https://pokeapi.co/api/v2/pokemon/")
    .then(res => {setUsersPant(res.data)
  console.log(res.data)
  });
   }, [])
 
    const dispatchUserName = (name) => {
        dispatch(changeName(userName));
        const index = usersPant.fintindex(filter => filter.name === name)
        const index1 = index+1
        navigate(`/pokedex/${index1}`)
    }
    

    return (

        <div className='texto__2'>
            <div className="text2">
            <h1>Hello trainer!</h1>
            <form >
                <img className='img__2' alt="" src="https://www.seekpng.com/png/full/201-2011786_red-by-xous-54-red-pokemon-trainer-png.png"></img>
            <p className="texto-4">
            Give me your name to start
            </p>
            <input className='input__search' type="text"
             value={userName} 
             onChange={e => setUserName(e.target.value)}
             
             />


            </form>
            </div>

          <div className="parrafo">
            <button className='btn__last' onClick={() => rambo(userName)}>Submit </button>
          </div>
            
        </div>

    );
};

export default Users;