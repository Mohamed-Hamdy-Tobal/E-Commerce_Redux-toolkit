import { storeData } from "../../assets/data/dummyData"
import ProductSectionItem from "./ProductSectionItem"


const ProductSection = () => {


  return (
    <div className="product-section products mt-5">
      <div className="product-section-info sales p-2 rounded-2 bg-success">
        <h3 className="te text-center m-0">SUMMER T-shirt SALE 30%</h3>
      </div>
      <div className="product-section-items d-flex justify-content-center align-items-center flex-wrap">
        {storeData.slice(0, 6).map((product, idx) => {
          return (
            <div className="pro p-3 card-product" key={idx}>
              <ProductSectionItem 
              id={product.id} 
              name={product.name} 
              colors={product.color}
              img={product.img}
              price={product.price}
              text={product.text}
              size={product.size}
              totalPrice={product.totalPrice}/>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ProductSection