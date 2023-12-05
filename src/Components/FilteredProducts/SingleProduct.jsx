/* eslint-disable react/prop-types */

import { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { addToCart } from '../../Store/Reducers/cartSlice';

const SingleProduct = () => {

    const dispatch = useDispatch()

    const navigate = useNavigate()

    const params = useParams()

    const {singlePro} = useSelector((state) => state.filterProducts)
    console.log('singlePro ', singlePro)

    const [size, setSize] = useState('size')
    console.log('size ', size)

    const [color, setColor] = useState('color')
    console.log('color ', color)

    // For Handle Add To Cart
    const handleAddToCart = (product) => {
        console.log('Add to Cart')
        dispatch(addToCart({...product, 
            singleColor:color !== 'color'? color: 'black', 
            singleSize:size !== 'size' ? size: 'M'}))
    }

    return (
        <div className="single-product sec-padd">
            <Container>
                {singlePro.map((product, idx) => {
                    return (
                        <div className="row align-items-center row-gap-4" key={idx}>
                            <div className="col-lg-6 text-center">
                                <img src={product.img} alt={product.name} style={{maxWidth: '70%'}}/>
                            </div>
                            <div className="col-lg-6">
                                <h1 className='fw-bold'>{product.name}</h1>
                                <p className='text-secondary pb-3'>{product.text}</p>
                                {product.size ? (
                                    <div className="main-select pb-2">
                                    <label htmlFor="sizes" className='pb-2'>Pick A Size</label>
                                    <select 
                                    name="sizes" 
                                    id="sizes" 
                                    className="form-select mb-3" 
                                    defaultValue="Size"
                                    onChange={(e) => {setSize(e.target.value)}}>
                                        <option disabled value='Size'>Size</option>
                                        {product.size.map((size, idx) => {
                                            return (<option value={size} key={idx}>{size}</option>)
                                        })}
                                    </select>
                                </div>
                                ): ''}
                                {product.color ? (
                                    <div className="main-select pb-2">
                                    <label htmlFor="colors" className='pb-2'>Pick A Color</label>
                                    <select 
                                    name="colors" 
                                    id="colors" 
                                    className="form-select mb-3" 
                                    defaultValue="Color"
                                    onChange={(e) => {setColor(e.target.value)}}>
                                        <option disabled value='Color'>Color</option>
                                        {product.color.map((color, idx) => {
                                            return (<option value={color} key={idx}>{color}</option>)
                                        })}
                                    </select>
                                </div>
                                ): ''}
                                <p className='fs-5'><span className='fw-bold'>Price : </span><span className='t text-success'>{product.price}$</span></p>
                                <Button 
                                className="selected-add-card" 
                                key={idx} 
                                color="gray" 
                                size="lg" 
                                variant="outline-success" 
                                ripple='true'
                                onClick={() => {
                                    navigate(`/filterProducts/${params.type}`, {replace : true})
                                    handleAddToCart(product)
                                }}
                                >Add To Cart</Button>
                            </div>
                        </div>
                    )
                })}
            </Container>
        </div>
    )
}

export default SingleProduct
