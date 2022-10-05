import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as React from 'react';


const Dragon = ({id, name, src}) =>{
    //return <li key={id}><img src={src}/> {name}</li>
    return(

      <Card key={id} style={{ width: '18rem' }}>
      <Card.Img variant="top" src={src} />
      <Card.Body>
        <Card.Title>{name} </Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary" >More</Button>
      </Card.Body>
    </Card>
    )
}

export {Dragon};