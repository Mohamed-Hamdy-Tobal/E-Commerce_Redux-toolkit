import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { ProductCard } from "./ProductCard"
import { Button, Container } from "react-bootstrap"
import Dropdown from 'react-bootstrap/Dropdown';
import { colorFilter, filterGender, setFilterProducts, sizeFilter, sortFilter } from "../../Store/Reducers/productsSlice";
import { Error } from "../Err/Error";

const FilteredProducts = () => {

    const dispatch = useDispatch()

    const {filterProducts, error} = useSelector((state) => state.filterProducts)
    const {type} = useParams()
    console.log(type)
    console.log(filterProducts)

    const genderBtn = ['Male', 'Female']
    const colorBtns = ['red', 'green', 'yellow', 'blue', 'purple', 'orange', 'brown', 'black']
    const sizeBtns = ['S', 'L', 'M', 'XL']

    return (
        <main className="products pb-5">
            <Container>
                <div className="pt-3">
                    <div className="ps-2">
                        <h1 className="p-3 products-title position-relative" style={{width: 'fit-content'}}>{type}</h1>
                        
                        {/* Clear Button */}
                        <div className="clear flex-grow-1 d-flex p-3 main-clear">
                            <Button 
                                className="high-price-btn text-uppercase selected-btn btn btn-outline-secondary btn-lg" 
                                color="gray" 
                                size="lg" 
                                variant="outline-secondary" 
                                ripple='true'
                                onClick={() => {dispatch(setFilterProducts(type))}}
                            >Clear Filter</Button>
                        </div>

                        {/* For Filtering */}
                        <div className="d-flex justify-content-baseline align-items-center pb-5 p-3 gap-3 main-selected flex-wrap">
                            {genderBtn.map((gender, idx) => (
                                <Button 
                                className="gender-btn text-uppercase" 
                                key={idx} 
                                color="gray" 
                                size="lg" 
                                variant="outline-secondary" 
                                ripple='true'
                                onClick={() => {dispatch(filterGender(gender.toLowerCase()))}}
                                >{gender}</Button>
                            ))}
                            <Button 
                                className="high-price-btn text-uppercase" 
                                color="gray" 
                                size="lg" 
                                variant="outline-secondary" 
                                ripple='true'
                                onClick={() => {dispatch(sortFilter())}}
                            >High Price</Button>
                            <Dropdown>
                                <Dropdown.Toggle variant="outline-secondary text-uppercase btn-lg" id="dropdown-basic">
                                    Select A Color
                                </Dropdown.Toggle>

                                <Dropdown.Menu className='w-100'>
                                    {colorBtns.map((colorBtn, idx) => {
                                        return <Dropdown.Item href="#/action-1" key={idx} style={{color: colorBtn}} onClick={() => {dispatch(colorFilter(colorBtn))}}>{colorBtn}</Dropdown.Item>
                                    })}
                                </Dropdown.Menu>
                            </Dropdown>
                            <Dropdown>
                                <Dropdown.Toggle variant="outline-secondary text-uppercase btn-lg" id="dropdown-basic" disabled={type == 'Bags' || type == 'Shoes'}>
                                    Select A Size
                                </Dropdown.Toggle>

                                <Dropdown.Menu className='w-100'>
                                    {sizeBtns.map((sizeBtn, idx) => {
                                        return <Dropdown.Item href="#/action-1" key={idx} onClick={() => {dispatch(sizeFilter(sizeBtn))}}>{sizeBtn}</Dropdown.Item>
                                    })}
                                </Dropdown.Menu>
                            </Dropdown>
                            
                        </div>

                        {error? <Error/> : (
                            <div className="d-flex justify-content-center align-items-center flex-wrap">
                                {filterProducts.map((product, idx) => {
                                    return (
                                        <div className="p-3 card-product" key={idx}>
                                            <ProductCard 
                                            id={product.id} 
                                            name={product.name} 
                                            colors={product.color}
                                            img={product.img}
                                            price={product.price}
                                            text={product.text}/>
                                        </div>
                                    )
                                })}
                            </div>
                        )}
                    </div>
                </div>
            </Container>
        </main>
    )
}

export default FilteredProducts

// 21