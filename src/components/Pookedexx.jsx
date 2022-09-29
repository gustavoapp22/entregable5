import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from "react-router-dom"
import axios from "axios";

const Pookedexx = () => {

    const { id } = useParams();
    

    const [nose, setNose] = useState({})

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then(res => {setNose(res.data)
            
            console.log(res.data)
            })
            
    }, [id])
    return (
        <div>

    
     <div className='nose2'>
           
           
            
            <img className='img2' src={nose.sprites?.other["official-artwork"].front_default} alt="" />

           <div className="texto__1">
            <h2 className='nose3'>{nose.weight} <br /><b>Weight</b> </h2>
            <h3 className='nose3'>{nose.height} <br /><b>Height</b></h3>

           </div>
           
            <h1 className='text-1' >  <br />{nose.name}</h1>
           <br /> 
        </div>
        
        </div>
    );
};

export default Pookedexx;