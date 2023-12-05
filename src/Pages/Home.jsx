import { Container } from "react-bootstrap"
import { Slider } from "../Components/Slider"
import { NavigateBtns } from "../Components/NavigateBtns/NavigateBtns"
import { Footer } from "../Components/Footer/Footer"
import ProductSection from "../Components/ProductSection/ProductSection"
// import { useSelector } from "react-redux"
// import { useNavigate } from "react-router-dom"
// import { useEffect } from "react"

export const Home = () => {

    // const { user } = useSelector((state) => state.auth);
    // const navigate = useNavigate();

    // useEffect(() => {
    //     // Check if the user is not authenticated, then navigate to the SignIn page
    //     if (!user.authUser) {
    //         console.log('Please', user.authUser)
    //         navigate('/signin');
    //     } else {
    //         console.log('Please', user.authUser)
    //         navigate('/');
    //     }
    // }, [navigate, user.authUser]);

    return (
        <div className="home">
            <Slider/>
            <Container>
                <NavigateBtns/>
                <ProductSection/>
                <Footer/>
            </Container>
        </div>
    )
}
