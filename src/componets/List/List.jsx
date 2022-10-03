import { useState, useEffect } from 'react'
import axios from 'axios';


const List = () => {
  const [personajes, setPersonajes] = useState([]);

  useEffect(()=> {
    /*comentario*/ 
    axios.get('https://dragon-ball-super-api.herokuapp.com/api/characters')
      .then(response => {
         /*La llamada es correcta */
         const persoData = response.data;
         setPersonajes(persoData);
        console.log(personajes);
      })
      .catch(error => {
        /*Marca un error en la llamada */
      console.log(error);
      })

  }, []);

  return (
    <ul className="App">
      {
        personajes.map(personaje =>{
          return <li key={personaje.id}><img src={personaje.imageUrl}/> {personaje.name}</li>
        })
      }
    </ul>
  )
}

export { List };
