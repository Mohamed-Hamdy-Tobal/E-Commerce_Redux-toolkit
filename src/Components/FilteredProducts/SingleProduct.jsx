/* eslint-disable react/prop-types */

import { Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';


const SingleProduct = () => {

    const params = useParams()
    console.log(params)

    const {singlePro} = useSelector((state) => state.filterProducts)
    console.log('singlePro Here', singlePro)


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
                                <p>{product.text}</p>
                                <p>{product.price}</p>
                            </div>
                        </div>
                    )
                })}
            </Container>
        </div>
    )
}

export default SingleProduct
