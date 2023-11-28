import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"

const FilteredProducts = () => {

    const {filterProducts} = useSelector((state) => state.filterProducts)
    console.log(filterProducts)
    const {type} = useParams()
    console.log('params :', type)

    return (
        <div>
            <div className="">
                <h1>{type}</h1>
            </div>
        </div>
    )
}

export default FilteredProducts