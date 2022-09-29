import React from 'react';
import { useEffect } from 'react';
import axios from "axios"
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../App.css"

const Red = ({ info }) => {
  const [blue, setBlue] = useState({})
  const navigate = useNavigate()
  useEffect(() => {
    axios.get(info)
      .then(res => setBlue(res.data))
  }, [info])

  const leo = (id) => {
    navigate(`/pokedexx/${id}`)
  }
  return (
    <div id='primero' className="padre" onClick={() => leo(blue.id)}>
      <div className='nose1'>

        <h1><br />{blue.name}</h1>


        <img src={blue.sprites?.other["official-artwork"].front_default} alt="" />

        <h1 className='letra1'>type:{blue.types?.[0].type.name}</h1>
        <h2 className='letra1'>hp: {blue.stats?.[0].base_stat}</h2>
        <h3 className='letra1'>attack: {blue.stats?.[1].base_stat}</h3>
        <h3 className='letra1'>defense: {blue.stats?.[2].base_stat}</h3>
        <h3 className='letra1'>speed: {blue.stats?.[5].base_stat}</h3>

      </div>
    </div>
  );
};

export default Red;