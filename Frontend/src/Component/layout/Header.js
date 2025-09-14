import React from "react";
import logo from "../../asserts/foodlogo2.jpeg";
import "../../App.css";
import { Link, Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";
import { logout } from "../../Actions/userActions";
import Search from "./Search";


const Header = () => {
  const { cartItems } = useSelector((state) => state.cart);

  const alert = useAlert();
  const dispatch = useDispatch();
  const { user, loading } = useSelector((state) => state.auth);

  const logoutHandler = () => {
    dispatch(logout());
    alert.success("Logged out successfully");
  };

  return (
    <>
      <nav className="navbar row sticky-top">
        <div className="col-7 col-md-2">
        <Link to="/">
            <img src={logo} alt="logo" className="logo" />
            {/* <img src="https://www.bing.com/images/search?view=detailV2&ccid=8kuEBgMk&id=C5CA6A2445548434058F7903B80CEF696CFA845E&thid=OIP.8kuEBgMkksdxISAbhul21QHaFT&mediaurl=https%3a%2f%2fcdn6.f-cdn.com%2fcontestentries%2f138969%2f13901059%2f54b67fa240afc_thumb900.jpg&exph=644&expw=900&q=food+ordering+logo&simid=608039487012494336&FORM=IRPRST&ck=100BAF0A6C669D5CB0964CC0A0E83CEE&selectedIndex=2" alt="logo" className="logo" /> */}
          </Link>
        </div>
        {/* Search Bar */}
        <div className="col-12 col-md-6 mt-2-md-0">
          <Routes>
            <Route path="/" element={<Search />} />
            <Route path="/eats/stores/search/:keyword" element={<Search />} />
          </Routes>
        </div>
        {/* Login and Signup Button */}
        <div className="col-12 col-md-3 mt-4 mt-md-0 text-center">
          <Link to={`/forntend/src/Component/Home.js`}> <button className="btn home_btn"  >Home</button></Link>

          <Link to="/cart" style={{ textDecoration: "none" }}>
            <span className="ml-3" id="cart">
              Cart
            </span>
            <span className="ml-1" id="cart_count">
              {cartItems.length}
            </span>
          </Link>

          {user ? (
            <div className="ml-4 dropdown d-inline">
              <Link to="/" className="btn dropdown-toggle text-white mr-4"
                type="button" id="dropDownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false" >
                {/* {loading && (<Spinner animation="border" variant="light"/>)} */}
                <figure className="avatar avatar-nav">
                  <img src={user.avatar && user.avatar.url}
                    alt={user && user.name}
                    className="rounded-circle">
                  </img>
                </figure>
                <span>{user && user.name}</span>
              </Link>

              <div className="dropdown-menu" aria-labelledby="dropDownMenuButton">
                <Link className="dropdown-item" to="/eats/orders/me/myOrders">
                  Orders
                </Link>
                <Link className="dropdown-item" to="/users/me">
                  Profile
                </Link>
                <Link className="dropdown-item text-danger" to="/" onClick={logoutHandler}>
                  Logout
                </Link>
              </div>
            </div>
          ) : (
            !loading && (
              <Link to="/users/login" className="btn ml-4" id="login_btn">
                Login
              </Link>
            )
          )}
        </div>
      </nav>
    </>
  );
};

export default Header;