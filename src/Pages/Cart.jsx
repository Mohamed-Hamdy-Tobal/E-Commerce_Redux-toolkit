import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Container } from "react-bootstrap"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

export const Cart = () => {

    const {cartItems} = useSelector((state) => state.cart)
    console.log('cartItems', cartItems)

    return (
        <div className="main-cart sec-padd">
            <Container>
                <h1 className="text-center pb-4">Shopping Cart</h1>
                {cartItems.length == 0? (
                    <div className="empty-cart text-center">
                        <h3 style={{color: "#777"}}>Your cart is currently empty</h3>
                        <div className="start-shopping">
                            <FontAwesomeIcon icon={faArrowLeft} />
                            <Link to="/" className="start-shopping">Start Shopping</Link>
                        </div>
                    </div>
                ) : (
                    <div className="cart-items">
                        {cartItems.map((item) => {
                            return (
                                <div className="cart-item" key={item.id}>
                                    <div className="cart-item-image">
                                        <img src={item.image} alt={item.name} />
                                    </div>
                                    <div className="cart-item-details">
                                        <h3>{item.name}</h3>
                                        <p>Price: <span className="price">₹{item.price}</span></p>
                                        <p>Quantity: <span className="quantity">{item.cartQuantity}</span></p>
                                    </div>
                                    <div className="cart-item-actions">
                                        <button className="btn btn-primary">Remove</button>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                )}
            </Container>
        </div> 
    )
}

// 7:30