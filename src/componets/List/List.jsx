import { useState, useEffect } from "react";
import { Dragon } from "../Dragon/Dragon";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

const List = () => {
  const [personajes, setPersonajes] = useState([]);

  useEffect(() => {
    /*comentario*/
    axios
      .get("https://dragon-ball-super-api.herokuapp.com/api/characters")
      .then((response) => {
        /*La llamada es correcta */
        const persoData = response.data;
        setPersonajes(persoData);
        //console.log(personajes);
      })
      .catch((error) => {
        /*Marca un error en la llamada */
        console.log(error);
      });
  }, []);

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>
              Dragón Ball Super 
            <input className="input" type="text" placeholder="Buscar" />
          </Navbar.Brand>
        </Container>
      </Navbar>


      <div className="App container ">
        <div className="row">
          {personajes.map((personaje) => {
            return (
              <Dragon
                id={personaje.id}
                key={personaje.id}
                src={personaje.imageUrl}
                name={personaje.name}
                specie={personaje.specie}
                role={personaje.role}
              ></Dragon>
            );
            //return <li key={personaje.id}><img src={personaje.imageUrl}/> {personaje.name}</li>
          })}
        </div>
      </div>
    </>
  );
};

export { List };
