import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import * as React from "react";
import "../../styles.scss";

const Dragon = ({ id, name, src, specie, role }) => {
  //return <li key={id}><img src={src}/> {name}</li>
  return (
    <div className="col-3">
      <Card key={id}>
        <Card.Img variant="top" className="imagen-personaje" src={src} />
        <Card.Body>
          <Card.Title>{name} </Card.Title>
          <Card.Text>
            <div>
              <b> Especie:</b> {specie}
            </div>
            <div>
              <b> Rol: </b> {role}
            </div>
          </Card.Text>
          <Button className="azul" variant="primary">
            More Info
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export { Dragon };
