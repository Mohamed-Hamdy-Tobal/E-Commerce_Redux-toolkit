import { useDispatch, useSelector } from "react-redux"
import { dottedSlide, nextSlide, prevSlide } from "../Store/Reducers/sliderSlice"
import {sliderData} from '../assets/data/dummyData'

export const Slider = () => {

    const dispatch = useDispatch()

    const {value} = useSelector(state => state.slider)

    return (
        <div className="slider position-relative">
            <div className="imgs-container h-100">
                {sliderData.map((item, idx) => {
                    return (
                        <div key={idx} className={`img-group ${parseInt(item.id) == value? 'show-img-slider h-100': 'hide-img-slider'}`}>
                            {parseInt(item.id) == value && (<div className="slider-img h-100" ><img src={item.img} alt="img" className="h-100 w-100 object-fit-cover"/></div>)}
                            {parseInt(item.id) == value && (<div className="img-txt"><p>{item.text}</p></div>)}
                        </div>
                    )
                })}
                <div className="d-flex justify-content-center mb-3 main-dots">
                    {sliderData.map((item, idx) => {
                        return (
                            <div className="dots-container" key={idx}>
                            <div key={idx} className={`dooted ${idx == value? 'show-img-dot': 'hide-img-dot'}`} onClick={() => dispatch(dottedSlide(idx))}></div>
                            </div>
                        )
                    })}
                </div>
                <div className="arrows-btn d-flex justify-content-between w-100 position-absolute top-50 start-50 translate-middle-x">
                    <div className="arrow ms-3" onClick={() => {dispatch(prevSlide(value - 1))}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-caret-left" viewBox="0 0 16 16">
                            <path d="M10 12.796V3.204L4.519 8zm-.659.753-5.48-4.796a1 1 0 0 1 0-1.506l5.48-4.796A1 1 0 0 1 11 3.204v9.592a1 1 0 0 1-1.659.753z"/>
                        </svg>
                    </div>
                    <div className="arrow me-3" onClick={() => {dispatch(nextSlide(value + 1))}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-caret-right" viewBox="0 0 16 16">
                            <path d="M6 12.796V3.204L11.481 8zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753z"/>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    )
}