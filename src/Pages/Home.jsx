import { Container } from "react-bootstrap"
import { Slider } from "../Components/Slider"
import { NavigateBtns } from "../Components/NavigateBtns/NavigateBtns"

export const Home = () => {

    return (
        <div className="home">
            <Slider/>
            <Container>
                <NavigateBtns/>
            </Container>
        </div>
    )
}
