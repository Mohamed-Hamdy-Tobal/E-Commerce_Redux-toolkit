import { useDispatch, useSelector } from "react-redux"
import { nextSlide, prevSlide } from "../Store/Reducers/sliderSlice"

export const Slider = () => {

    const dispatch = useDispatch()

    const {value} = useSelector(state => state.slider)

    return (
        <div className="slider">
            <div className="btn btn-primary" onClick={() => {dispatch(nextSlide(value + 1))}}>Next</div>
            <div className="btn btn-danger" onClick={() => {dispatch(prevSlide(value - 1))}}>Prev</div>
            <div>{value}</div>
        </div>
    )
}

// 3 => 13