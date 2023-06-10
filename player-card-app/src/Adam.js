import React from "react";
import Card from "react-bootstrap/Card";

const Adam = ({ player }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={player.imageUrl} />
      <Card.Body>
        <Card.Title>{player.name}</Card.Title>
        <Card.Text>
          Team: {player.team}<br/>
          Nationality: {player.nationality}<br/>
          Jersey Number: {player.jerseyNumber}<br/>
          Age: {player.age}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Adam;