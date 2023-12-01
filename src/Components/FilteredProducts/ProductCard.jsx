import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

/* eslint-disable react/prop-types */
export const ProductCard = ({name, img, text}) => {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={img}/>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>{text}</Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    )
}