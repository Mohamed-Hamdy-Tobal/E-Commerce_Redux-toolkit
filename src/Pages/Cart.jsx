import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { Container } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { addToCart, clearCart, decreaseIndex, removeFromCart, getTotals, CheckCart } from '../Store/Reducers/cartSlice';

export const Cart = () => {

    const dispatch = useDispatch()

    const {cartItems, cartTotalAmount} = useSelector((state) => state.cart)

    const handleRemoveFromCart = (item) => {
        dispatch(removeFromCart(item))
    }
    const handleDecrease = (item) => {
        dispatch(decreaseIndex(item))
    }
    const handleIncrease = (item) => {
        dispatch(addToCart(item))
    }
    const handleClear = () => {
        dispatch(clearCart())
    }
    const handleCheck = () => {
        dispatch(CheckCart())
    }

    useEffect(() => {
        dispatch(getTotals())
    }, [dispatch, cartTotalAmount, cartItems])

    return (
        <div className="cart-container sec-padd">
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
                    // Main Cart
                    <div className="cart-items-table">
                        <div className="table-titles">
                            <h3 className="product-title">Product</h3>
                            <h3 className="product-size-color d-none d-md-block">Size / Color</h3>
                            <h3 className="price">price</h3>
                            <h3 className="quantity">Quantity</h3>
                            <h3 className="total">Total</h3>
                        </div>
                        {/* Cart Table */}
                        <div className="cart-item-list pb-3">
                            {cartItems.map((item) => {
                                return (
                                    <div className="cart-item position-relative" key={item.id}>
                                        <div className="cart-product d-flex">
                                            <img src={item.img} alt={item.name} className='me-1' style={{width: "80px", maxWidth: "100%"}} />
                                            <div className="cart-item-details ps-3">
                                                <h3>{item.type}</h3>
                                                <p>{item.name}</p>
                                                <button className='remove' onClick={() => {handleRemoveFromCart(item)}}>Remove <FontAwesomeIcon icon={faTrash} /></button>
                                            </div>
                                        </div>
                                        <div className="cart-product-color-size d-flex flex-md-column justify-content-center gap-md-2">
                                            <span className='single-size'>{item.singleSize}</span>
                                            <span className='single-color'>{item.singleColor}</span>
                                        </div>
                                        <div className="cart-product-price"><span className='pro-price'>{item.price}</span></div>
                                        <div className="cart-product-quantity d-flex align-items-center justify-content-center gap-3 p-2 pt-0 pb-0">
                                            <button className='decrement' onClick={() => {handleDecrease(item)}}>-</button>
                                            <div className="count">{item.cartQuantity}</div>
                                            <button className='increment' onClick={() => {handleIncrease(item)}}>+</button>
                                        </div>
                                        <div className="cart-product-total">{item.price * item.cartQuantity}</div>
                                    </div>
                                )
                            })}
                        </div>
                        <div className="cart-summary d-flex justify-content-between align-items-baseline pt-4 flex-wrap row-gap-3">
                            <button className="clear-cart btn btn btn-outline-secondary" onClick={() => {handleClear()}}>Clear Cart</button>
                            <div className="check-out">
                                <div className="subtotal d-flex justify-content-between align-items-baseline fs-5">
                                    <span className='fw-bolder fs-4'>Subtotal</span>
                                    <span className="amount">${cartTotalAmount}</span>
                                </div>
                                <p>Taxes and shipping calculated at checkout</p>
                                <button className='btn btn-success check' onClick={() => {handleCheck()}}>Check Out</button>
                                <div className="start-shopping" style={{fontSize: "16px"}}>
                                    <FontAwesomeIcon icon={faArrowLeft} />
                                    <Link to="/" className="start-shopping" style={{fontSize: "16px"}}>Continue Shopping</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </Container>
        </div> 
    )
}