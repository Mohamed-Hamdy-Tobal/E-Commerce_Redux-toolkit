import logo from '../../assets/images/logo.png'

export const Footer = () => {
    return (
        <div className="footer pt-5">
            <div className="box d-flex justify-content-center justify-content-sm-between align-items-center p-3 flex-wrap"  style={{borderTop: '1px solid #999'}}>
                <div className="image">
                    <img src={logo} alt="logo" style={{width: '80px'}}/>
                </div>
                <div className="copyright">
                    <p>Copyright 2023 By Mohamed Tobal</p>
                </div>
            </div>
        </div>
    )
}
