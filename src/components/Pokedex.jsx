import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom"
import Red from './Red';



const Pokedex = () => {

    const navigate = useNavigate()

    const [red, setRed] = useState(true);
    
    

    const namee = useSelector(state => state.userName)
    const { name } = useParams()
    const [charactersList, setCharactersList] = useState([]);
    const [locationsList, setLocationsList] = useState([]);

    const [nameInput, setNameInput] = useState("")

    useEffect(() => {
        axios.get("https://pokeapi.co/api/v2/pokemon/")
            .then(res => {
                 setCharactersList(res.data.results)
                 
                 //setRed()
                
                });

    }, [])

    useEffect(() => {

        axios.get("https://pokeapi.co/api/v2/type/")
            .then(res => setLocationsList(res.data.results));
    }, [])

    const searchLocations = (locationName) => {
        setRed(false)
        axios.get(`https://pokeapi.co/api/v2/type/${locationName}`)
            .then(res => {
                setCharactersList(res.data.pokemon)

                console.log(res.data.pokemon)
            });

    }


    const searchName = (e) => {
        e.preventDefault();
        //  const hey = charactersList.findIndex(fild  => fild.name === nameInput)
        //  const index = hey+1
        navigate(`/pokedexx/${nameInput}`)

        // console.log(nameInput)
    }

    return (
        <div>
            <div className='poke'>
                <h1>Pokedex</h1>

                <form onSubmit={searchName}>
                    <input type="text"
                        placeholder='buscar por nombre'
                        value={nameInput}
                        onChange={e => setNameInput(e.target.value)}


                    />
                    <button>Search</button>
                </form>

                <p>Welcome {name} , here you can find your fav orite pokemon
                </p>

                <select onChange={e => searchLocations(e.target.value)}>
                    {locationsList?.map(location => (

                        console.log(location),
                        <option value={location.name} key={location.name}>
                            {location.name}</option>

                    ))}
                </select>


            </div>
            <ul>
                {
                red?(
                    charactersList?.map(nsoe => (
                      //  console.log(nsoe),
                        < li key = { nsoe?.name } >
                        {
                                < Red info = { nsoe.url } />
                            }
            </li>
            ))

                ):( 
                    charactersList?.map(nsoe => (
                  //  console.log(nsoe),
                    < li key = { nsoe.pokemon?.name } >
                    {
                            < Red info = { nsoe.pokemon?.url } />
                        }
        </li>
        )))

                }
        </ul>
        </div >
    );
};

export default Pokedex;