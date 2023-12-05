import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../../Store/Reducers/authSlice'
// import { useNavigate } from 'react-router-dom'
// import { useSelector } from 'react-redux'


const userInfo = {name:'', password: ''}

const SignIn = () => {

    // const navigate = useNavigate()
    
    const dispatch = useDispatch()

    const [user, setUser] = useState(userInfo)

    const handleUser = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
        console.log(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(login(user))
        console.log(user)
        setUser(userInfo)
        console.log(userInfo)
    }

    return (
        <div className="sign-page sec-padd">
            {/* {error && <Alert variant='danger' style={{position: 'absolute',width: '80%',top: '72.75px',left: '50%',transform:' translateX(-50%)'}}>{error}</Alert>} */}
            <div className='container'>
                <form action="" className="white" onSubmit={handleSubmit}>
                    <h5 className="grey-text text-darken-3 page-head">Sign In</h5>
                    <div className="input-field">
                        <label htmlFor="name" className={`active`}>Name: </label>
                        <input type="text" name="name" id="name" onChange={handleUser} value={user.name}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="password" className={`active`}>Password: </label>
                        <input type="password" name="password" id="password" onChange={handleUser} value={user.password}/>
                    </div>
                    <div className="input-field">
                        <button className='btn btn-primary'>Login</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignIn