/* eslint-disable react/prop-types */

import { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const SingleProduct = () => {

    const params = useParams()
    console.log(params)

    const {singlePro} = useSelector((state) => state.filterProducts)
    console.log('singlePro Here', singlePro)

    const [size, setSize] = useState('size')
    console.log('size ', size)

    const [color, setColor] = useState('color')
    console.log('color ', color)

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
                                    // value={size}
                                    onChange={(e) => {setSize(e.target.value)}}>
                                        <option selected disabled>Size</option>
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
                                    // value={size}
                                    onChange={(e) => {setColor(e.target.value)}}>
                                        <option selected disabled>Color</option>
                                        {product.color.map((color, idx) => {
                                            return (<option value={color} key={idx}>{color}</option>)
                                        })}
                                    </select>
                                </div>
                                ): ''}
                                <Button 
                                className="selected-add-card" 
                                key={idx} 
                                color="gray" 
                                size="lg" 
                                variant="outline-success" 
                                ripple='true'
                                // onClick={() => dispatch(setFilterProducts(button))}
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
