import { useNavigate } from 'react-router-dom'
import { useState, useRef} from "react"
import { useSelector } from 'react-redux';
import Input from '../Forms/Input'
import axios from 'axios';
import React from 'react';

function Prueba() {
    const [archivos, setArchivos] = useState(null);
    const SubirArchivos = e => {
        setArchivos(e)
    }
    const pokemon = useSelector(state => state.pokemon)
    const navigate = useNavigate()
    let id = pokemon.id;
    let url='http://localhost:8080/file/pokemon/'+id;
    const InsertarArchivos = async() => {
        const f = new FormData();
        f.append('file', archivos[0])
        await axios.put(url, f)
        .then(response => {
            console.log(response)
            alert('Pokemon creado');
            navigate('/')
            }).catch(error => {console.log(error)})
    } 
    return ( 
        <>
        <div>
            <input type="file" name='file' multiple placeholder='Sube un archivo' onChange={(e)=> SubirArchivos(e.target.files)}></input>
            <button onClick={InsertarArchivos}>Subir imagen</button>
        </div>
        </>
     );
}

export default Prueba;