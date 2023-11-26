import { Button } from "react-bootstrap";
import salesimg from '../../assets/images/clothes.jpg';

export const NavigateBtns = () => {

    const buttons = ['Hoodies', 'T-Shirts', 'Shoes', 'Dresses', 'Suits', 'Jeans', 'Jackets', 'Bags'];

    console.log(buttons)

    return (
        <div className="main-navigate">
            <div className="d-flex justify-content-center align-items-center p-lg-5 p-3 gap-3 main-selected flex-wrap">
                {buttons.map((button, idx) => (
                    <Button className="selected-btn" key={idx} color="gray" size="lg" variant="outline-secondary" ripple='true'>{button}</Button>
                ))}
            </div>
            <div className="sales p-2 rounded-2 bg-success">
                <h3 className="te text-center m-0">SALES UP TO 50%</h3>
            </div>
            <div className="sale-img d-flex justify-content-center align-items-center mt-4 mb-4">
                <img src={salesimg} alt='img' className="f rounded-3 shadow-lg w-75"/>
            </div>
        </div>
    )
}
