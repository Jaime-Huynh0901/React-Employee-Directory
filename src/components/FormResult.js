import React from "react"
import {Card, ListGroup} from "react-bootstrap";



const FormResult = (props) => {
    const {id,firstName, lastName, title, gender,age, img } = props

    return (
            <Card 
            style={{ width: '18rem'}} 
            className="mb-3"
            bg="info"
            >
                <Card.Img variant="top" src= {img} />
                <Card.Body>
                    <Card.Title>{title} {firstName} {lastName}</Card.Title>
                    <Card.Text>
                    <ListGroup variant="flush">
                        <ListGroup.Item>Employee ID: {id}</ListGroup.Item>
                        <ListGroup.Item>Employee Age: {age}</ListGroup.Item>
                        <ListGroup.Item>Employee Gender: {gender}</ListGroup.Item>
                    </ListGroup>
                    </Card.Text>
                </Card.Body>
            </Card>
    )
}


export default FormResult;