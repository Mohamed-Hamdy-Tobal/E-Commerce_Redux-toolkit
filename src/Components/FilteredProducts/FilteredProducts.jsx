import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"

const FilteredProducts = () => {

    const {filterProducts} = useSelector((state) => state.filterProducts)
    const {type} = useParams()
    console.log('params :', type)
    console.log(filterProducts)

    return (
        <div>
            <div className="pt-3">
                <div className="ps-2">
                    <h1>{type}</h1>
                    <div className="d-flex justify-content-center align-items-center gap-2">
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FilteredProducts