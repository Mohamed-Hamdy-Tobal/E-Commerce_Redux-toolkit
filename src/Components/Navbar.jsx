import { Container } from "react-bootstrap"
import { Link } from "react-router-dom"
import logo from '../assets/images/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { getTotals } from "../Store/Reducers/cartSlice";
import { logout } from "../Store/Reducers/authSlice";

export const NavBar = () => {

    const [isHeaderOpen, setIsHeaderOpen] = useState(false)

    const toggleHeader = () => {
        setIsHeaderOpen(!isHeaderOpen);
    };

    const dispatch = useDispatch()

    const {cartItems, cartTotalQuantity} = useSelector((state) => state.cart)
    const { user } = useSelector((state) => state.auth);


    useEffect(() => {
        dispatch(getTotals())
    }, [dispatch, cartTotalQuantity, cartItems])


    return (
        <Navbar expand="lg" className="bg-white">
            <Container>
                <Link to='/' className="navbar-brand"><div className='image-logo'><img src={logo} alt='img' className="logo"/></div></Link>
                {!user.name ? <Link to='/signin' className="nav-link user-small d-flex d-lg-none"><span className="m-0 ms-1 nav-item text-black">Hi {user.name}</span></Link> : ''}
                <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => {
                        return(
                            toggleHeader()
                        )
                    }} />
                <Navbar.Collapse id="basic-navbar-nav" className={`${isHeaderOpen ? '' : 'closed'}`}>
                    <button className="close-button d-lg-none" onClick={() => {
                        return(
                            toggleHeader()
                        )
                    }}>
                        <FontAwesomeIcon icon={faTimes} />
                    </button>
                    <Nav className="ms-lg-auto">
                        {!user.authUser ? <Link to='/signin' className="nav-link user d-none d-lg-block"><span className="m-0 ms-1 nav-item">Hi {user.name}</span></Link> : <Link to='/signin' className="nav-link"><span className="m-0 ms-1 nav-item">Login</span></Link>}
                        {!user.authUser ? <Link to='/signin' className="nav-link"><span className="m-0 ms-1 nav-item" onClick={() => {dispatch(logout())}}>Logout</span></Link> : ''}
                        <Link to="/" className="nav-link" >
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-heart nav-item" viewBox="0 0 16 16">
                                <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
                            </svg>
                            <span className="m-0 ms-1 nav-item">Whish List</span>
                        </Link>
                        <Link to="/cart" className={`nav-link position-relative ${isHeaderOpen ? 'closed-special' : ''}`} onClick={(e) => {
                            if (Array(e.target.className)[0].length > 26) {
                                return(
                                    toggleHeader()
                                )
                            }
                        }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-handbag nav-item" viewBox="0 0 16 16">
                                <path d="M8 1a2 2 0 0 1 2 2v2H6V3a2 2 0 0 1 2-2m3 4V3a3 3 0 1 0-6 0v2H3.36a1.5 1.5 0 0 0-1.483 1.277L.85 13.13A2.5 2.5 0 0 0 3.322 16h9.355a2.5 2.5 0 0 0 2.473-2.87l-1.028-6.853A1.5 1.5 0 0 0 12.64 5zm-1 1v1.5a.5.5 0 0 0 1 0V6h1.639a.5.5 0 0 1 .494.426l1.028 6.851A1.5 1.5 0 0 1 12.678 15H3.322a1.5 1.5 0 0 1-1.483-1.723l1.028-6.851A.5.5 0 0 1 3.36 6H5v1.5a.5.5 0 1 0 1 0V6z"/>
                            </svg>
                            <span className="m-0 ms-1 nav-item">Shopping Bag</span>
                            {cartTotalQuantity? (<span className=" position-absolute top-50 start-100 translate-middle text-center text-light rounded-circle" style={{ width: '25px',height: '25px',lineHeight: '25px',marginLeft: '18px', backgroundColor: 'var(--main-color)'}}>{cartTotalQuantity}</span>): ''}
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

{/* <Container>
    <Link to='/' className="head">OnlineShop</Link>
    <Link to='/cart'>
        <div className="nav-bag position-relative">
            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="bi bi-handbag-fill" viewBox="0 0 16 16">
                <path d="M8 1a2 2 0 0 0-2 2v2H5V3a3 3 0 1 1 6 0v2h-1V3a2 2 0 0 0-2-2M5 5H3.36a1.5 1.5 0 0 0-1.483 1.277L.85 13.13A2.5 2.5 0 0 0 3.322 16h9.355a2.5 2.5 0 0 0 2.473-2.87l-1.028-6.853A1.5 1.5 0 0 0 12.64 5H11v1.5a.5.5 0 0 1-1 0V5H6v1.5a.5.5 0 0 1-1 0z"/>
            </svg>
            <span className="bag-quantity">3</span>
        </div>
    </Link>
</Container> */}


