import Card from 'react-bootstrap/Card';
import { useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { singleProduct } from '../../Store/Reducers/productsSlice';

/* eslint-disable react/prop-types */
export const ProductCard = ({id, name, img, text, price, colors}) => {

    const dispatch = useDispatch()

    const params = useParams()

    return (
        <Link to={`/filterProducts/${params.type}/${id}`}>
            <Card className='shadow-sm' onClick={() => {dispatch(singleProduct(id))}}>
                <div className='main-img'>
                    <Card.Img variant="top" src={img} className='img-fluid'/>
                </div>
                <Card.Body>
                <Card.Title className="fw-bold">{name}</Card.Title>
                <Card.Text style={{color: '#777', fontSize: '14px', lineHeight: '1.4'}}>{text}</Card.Text>
                </Card.Body>
                <Card.Footer className="d-flex justify-content-between align-items-center">
                    <small className="text-muted fw-bold">{price}$</small>
                    <div className="colors d-flex gap-1">
                        {colors.map((color, idx) => {
                            return(<i className='fab fa-marker rounded-circle color-icon' key={idx} style={{backgroundColor: color}}></i>)
                        })}
                    </div>
                </Card.Footer>
            </Card>
        </Link>
    )
}
