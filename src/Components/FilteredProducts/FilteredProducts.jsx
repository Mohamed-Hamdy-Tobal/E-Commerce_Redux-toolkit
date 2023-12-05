import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { ProductCard } from "./ProductCard"
import { Container } from "react-bootstrap"

const FilteredProducts = () => {

    const {filterProducts} = useSelector((state) => state.filterProducts)
    const {type} = useParams()
    console.log('params :', type)
    console.log(filterProducts)

    return (
        <main className="products pb-5">
            <Container>
                <div className="pt-3">
                    <div className="ps-2">
                        <h1 className="p-3 products-title position-relative" style={{width: 'fit-content'}}>{type}</h1>
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
                    </div>
                </div>
            </Container>
        </main>
    )
}

export default FilteredProducts

// 21