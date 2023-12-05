/* eslint-disable react/prop-types */

import Card from 'react-bootstrap/Card';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../Store/Reducers/cartSlice';

const ProductSectionItem = ({id, name, img, text, price, colors, size, totalPrice}) => {
    
    const dispatch = useDispatch()
    
    return (
        <Card className='shadow-sm'>
            <div className='main-img'>
                <Card.Img variant="top" src={img} className='img-fluid'/>
            </div>
            <Card.Body>
                <Card.Title className="fw-bold">{name}</Card.Title>
                <Card.Text style={{color: '#777', fontSize: '14px', lineHeight: '1.4'}}>{text}</Card.Text>
                <button className="btn btn-outline-secondary m-auto d-flex mt-4" onClick={() => {
                dispatch(addToCart({
                id,
                name,
                img,
                text,
                price,
                singleSize : size[0],
                singleColor : colors[0],
                totalPrice
                }))
            }}>Add To Cart</button>
            </Card.Body>
            <Card.Footer className="d-flex justify-content-between align-items-center">
                <small className="text-muted fw-bold">{price}$</small>
                <small className="text-muted fw-bold text-opacity-75">{size[0]}</small>
                <div className="colors d-flex gap-1">
                    <i className='fab fa-marker rounded-circle color-icon' style={{backgroundColor: colors[0]}}></i>
                </div>
            </Card.Footer>
            
        </Card>
    )
}

export default ProductSectionItem
