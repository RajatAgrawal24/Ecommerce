import React from 'react'
import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { logout } from '../../redux/actions/UserAction'

function Header() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { user, loading } = useSelector(state => state.auth)
    console.log(user , loading)
    const { cartItems } = useSelector(state => state.cart)
    const alert = useAlert()

    const handleLogout = () => {
        dispatch(logout())
        alert.success('Logged out successfully!')
        navigate('/')
    }

    return (
        <>
            {/* <!-- Topbar Start --> */}
            <div className="container-fluid">
                <div className="row bg-dark py-1 px-xl-5">
                    <div className="col-lg-6 d-none d-lg-block">
                        <div className="d-inline-flex align-items-center h-100">
                            <Link className="text-light mr-3" to="">About</Link>
                            <Link className="text-light mr-3" to="">Contact</Link>
                            <Link className="text-light mr-3" to="">Help</Link>
                            <Link className="text-light mr-3" to="">FAQs</Link>
                        </div>
                    </div>
                    <div className="col-lg-6 text-center text-lg-right">
                        <div className="d-inline-flex align-items-center">
                            {
                                user ? (
                                    <div className="btn-group">
                                        <button type="button" className="btn btn-sm btn-light dropdown-toggle" data-toggle="dropdown">{user.name}</button>
                                        <div className="dropdown-menu dropdown-menu-right">
                                            <div style={{ display: "flex", flexWrap: "nowrap", alignItems: "center", justifyContent: "center" }}>
                                                <img style={{ height: "18px", width: "18px", borderRadius: "100%", marginLeft: "20px" }} src={user.image?.url} className='rounded-circle' alt={user.name} />
                                                <span className="dropdown-item">{user.name}</span>
                                            </div>
                                            {
                                                user.role !== 'admin' ? (
                                                    <Link className="dropdown-item" to='/orders/me'>Orders</Link>
                                                ) : (
                                                    <Link className="dropdown-item" to='/dashboard'>Dashboard</Link>
                                                )
                                            }
                                            <Link className="dropdown-item" to='/profile'>Profile</Link>
                                            <Link to="/" className="dropdown-item" onClick={handleLogout}>Logout</Link>
                                        </div>
                                    </div>
                                ) : (!loading && <Link className='dropdown-item' to='/login'>Sign In</Link>)
                            }
                            <div className="btn-group mx-2">
                                <button type="button" className="btn btn-sm btn-light dropdown-toggle" data-toggle="dropdown">USD</button>
                                <div className="dropdown-menu dropdown-menu-right">
                                    <button className="dropdown-item" type="button">EUR</button>
                                    <button className="dropdown-item" type="button">GBP</button>
                                    <button className="dropdown-item" type="button">CAD</button>
                                </div>
                            </div>
                            <div className="btn-group">
                                <button type="button" className="btn btn-sm btn-light dropdown-toggle" data-toggle="dropdown">EN</button>
                                <div className="dropdown-menu dropdown-menu-right">
                                    <button className="dropdown-item" type="button">FR</button>
                                    <button className="dropdown-item" type="button">AR</button>
                                    <button className="dropdown-item" type="button">RU</button>
                                </div>
                            </div>
                        </div>
                        <div className="d-inline-flex align-items-center d-block d-lg-none">
                            <Link to="" className="btn px-0 ml-2">
                                <i className="fas fa-heart text-dark"></i>
                                <span className="badge text-dark border border-dark rounded-circle" style={{ paddingBottom: '2px' }}>0</span>
                            </Link>
                            <Link to="" className="btn px-0 ml-2">
                                <i className="fas fa-shopping-cart text-dark"></i>
                                <span className="badge text-dark border border-dark rounded-circle" style={{ paddingBottom: '2px' }}>0</span>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="row align-items-center bg-dark py-3 px-xl-5 d-none d-lg-flex">
                    <div className="col-lg-4">
                        <Link to="" className="text-decoration-none">
                            <span className="h1 text-uppercase text-primary bg-dark px-2">Jewel</span>
                            <span className="h1 text-uppercase text-dark bg-primary px-2 ml-n1">Shop</span>
                        </Link>
                    </div>
                    <div className="col-lg-4 col-6 text-left">
                        <form action="">
                            <div className="input-group">
                                <input type="text" className="form-control" placeholder="Search for products" />
                                <div className="input-group-append">
                                    <span className="input-group-text bg-transparent text-primary">
                                        <i className="fa fa-search"></i>
                                    </span>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="col-lg-4 col-6 text-right">
                        <p className="m-0 text-white">Customer Service</p>
                        <h5 className="m-0 text-white">+9185643720</h5>
                    </div>
                </div>
            </div>
            {/* <!-- Topbar End --> */}

            {/* <!-- Navbar Start --> */}
            <div className="container-fluid bg-dark mb-30">
                <div className="row px-xl-5">
                    <div className="col-lg-3 d-none d-lg-block">
                        <button className="btn d-flex align-items-center justify-content-between bg-primary w-100" data-toggle="collapse" data-target="#navbar-vertical" style={{ height: '65px', padding: '0 30px' }}>
                            <h6 className="text-dark m-0"><i className="fa fa-bars mr-2"></i>Jewelry Items</h6>
                            <i className="fa fa-angle-down text-dark"></i>
                        </button>
                        <nav className="collapse position-absolute navbar navbar-vertical navbar-light align-items-start p-0 bg-light" id="navbar-vertical" style={{ width: 'calc(100% - 30px)', zIndex: '999' }}>
                            <div className="navbar-nav w-100">
                                <div className="nav-item dropdown dropright">
                                    <Link to="#" className="nav-link dropdown-toggle" data-toggle="dropdown">Necklaces <i className="fa fa-angle-right float-right mt-1"></i></Link>
                                    <div className="dropdown-menu position-absolute rounded-0 border-0 m-0">
                                        <Link to="/category/necklaces/gold" className="dropdown-item">Gold Necklaces</Link>
                                        <Link to="/category/necklaces/silver" className="dropdown-item">Silver Necklaces</Link>
                                        <Link to="/category/necklaces/diamond" className="dropdown-item">Diamond Necklaces</Link>
                                    </div>
                                </div>
                                <Link to="/category/rings" className="nav-item nav-link">Rings</Link>
                                <Link to="/category/earrings" className="nav-item nav-link">Earrings</Link>
                                <Link to="/category/bracelets" className="nav-item nav-link">Bracelets</Link>
                                <Link to="/category/watches" className="nav-item nav-link">Watches</Link>
                                <Link to="/category/anklets" className="nav-item nav-link">Anklets</Link>
                                <Link to="/category/brooches" className="nav-item nav-link">Brooches</Link>
                                <Link to="/category/pendants" className="nav-item nav-link">Pendants</Link>
                                <Link to="/category/bangles" className="nav-item nav-link">Bangles</Link>
                            </div>
                        </nav>
                    </div>
                    <div className="col-lg-9">
                        <nav className="navbar navbar-expand-lg bg-dark navbar-dark py-3 py-lg-0 px-0">
                            <Link to="" className="text-decoration-none d-block d-lg-none">
                                <span className="h1 text-uppercase text-dark bg-light px-2">Multi</span>
                                <span className="h1 text-uppercase text-light bg-primary px-2 ml-n1">Shop</span>
                            </Link>
                            <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                                <div className="navbar-nav mr-auto py-0">
                                    <Link className='nav-item nav-link active' to='/'>Home</Link>
                                    <Link className='nav-item nav-link' to='/shop'>Shop</Link>
                                    <Link className='nav-item nav-link' to='/detail'>Shop Detail</Link>
                                    <div className="nav-item dropdown">
                                        <Link to="#" className="nav-link dropdown-toggle" data-toggle="dropdown">Pages <i className="fa fa-angle-down mt-1"></i></Link>
                                        <div className="dropdown-menu bg-primary rounded-0 border-0 m-0">
                                            <Link to="/cart" className="dropdown-item">Shopping Cart</Link>
                                            <Link to="/checkout" className="dropdown-item">Checkout</Link>
                                        </div>
                                    </div>
                                    <Link className='nav-item nav-link' to='/contact'>Contact</Link>
                                </div>
                                <div className="navbar-nav ml-auto py-0 d-none d-lg-block">
                                    <Link to="" className="btn px-0">
                                        <i className="fas fa-heart text-primary"></i>
                                        <span className="badge text-secondary border border-secondary rounded-circle" style={{ paddingBottom: '2px' }}>0</span>
                                    </Link>
                                    <Link to="/cart" className="btn px-0 ml-3">
                                        <i className="fas fa-shopping-cart text-primary"></i>
                                        <span className="badge text-secondary border border-secondary rounded-circle" style={{ paddingBottom: '2px' }}>{cartItems.length}</span>
                                    </Link>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
            {/* <!-- Navbar End --> */}
        </>
    )
}

export default Header
