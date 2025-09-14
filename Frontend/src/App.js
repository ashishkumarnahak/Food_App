import React, { useEffect, useState } from "react";
import "./App.css";
import Home from "./Component/Home"
import Footer from "./Component/layout/Footer";
import Header from "./Component/layout/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Menu from "./Component/Menu";
import Cart from "./Component/Cart/Cart";
import Delivery from "./Component/Cart/Delivery";
import Login from "./Component/user/Login";
import Register from "./Component/user/Register";
import { loadUser } from "./Actions/userActions";
import store from "./store";
import Profile from "./Component/user/Profile";
import UpdateProfile from "./Component/user/UpdateProfile";
import ForgotPassword from "./Component/user/ForgotPassword";
import NewPassword from "./Component/user/NewPassword";
import ConfirmOrder from "./Component/Cart/ConfirmOrder";
import Payment from "./Component/Cart/Payment";
import OrderSuccess from "./Component/Cart/OrderSuccess";
import OrderDetails from "./Component/order/OrderDetails";


//payment
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import ListOrders from "./Component/order/ListOrders";


function App() {

  const [stripeApiKey, setStripeApiKey] = useState("");

  useEffect(() => {
    store.dispatch(loadUser());

    async function getStripeApiKey() {
      const { data } = await axios.get("/api/v1/stripeapi");
      setStripeApiKey(data.stripeApiKey);
    }
    getStripeApiKey();
  }, []);
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="container container-fluid">
          <Routes>
            <Route path="/forntend/src/Component/Home.js" element={<Home />} exact></Route>
            <Route path="/" element={<Home />} exact />
            <Route path="/eats/stores/search/:keyword" element={<Home/>} exact/>
            <Route path="/eats/stores/:id/menus" element={<Menu />} exact />
            <Route path="/cart" element={<Cart />} exact />
            <Route path="/delivery" element={<Delivery />} exact></Route>

            <Route path="/users/login" element={<Login />} exact></Route>
            <Route path="/users/signup" element={<Register />} exact></Route>
            <Route path="/users/me" element={<Profile />} exact />
            <Route path="/users/me/update" element={<UpdateProfile />} exact />
            <Route path="/users/forgetPassword" element={<ForgotPassword />} exact></Route>
            <Route path="/users/resetPassword/:token" element={<NewPassword />} exact></Route>
            <Route path="/confirm" element={<ConfirmOrder />} exact></Route>


            {/* payment */}
            {
              stripeApiKey && (
                <Route
                  path="/payment"
                  element={
                    <Elements stripe={loadStripe(stripeApiKey)}>
                      <Payment />
                    </Elements>
                  }

                />
              )
            }

            <Route path="/success" element={<OrderSuccess/>} exact/>
            <Route path="/eats/orders/me/myOrders" element={<ListOrders/>} exact/>
            <Route path="/eats/orders/:id" element={<OrderDetails/>} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
