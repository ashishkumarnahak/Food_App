// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { saveDeliveryInfo } from "../../Actions/cartActions";
// import { countries } from "country-list";


// const Delivery = () => {
//     const navigate = useNavigate();
//     const dispatch = useDispatch();
//     const { deliveryInfo } = useSelector((state) => state.cart);

//     const [address, setAddress] = useState(deliveryInfo.address || "");
//     const [city, setCity] = useState(deliveryInfo.city || "");
//     const [postalCode, setPostalCode] = useState(deliveryInfo.postalCode || "");
//     const [phoneNo, setPhoneNo] = useState(deliveryInfo.phoneNo || "");
//     const [country, setCountry] = useState(deliveryInfo.country || "");

//       const countriesList = Object.values(countries);

//     const submitHandler = (e) => {
//         e.preventDefault();
//         dispatch(saveDeliveryInfo({ address, city, postalCode, phoneNo, country }));
//         navigate("/confirm");
//     };

//     return (
//         <div className="row wrapper">
//             <div className="col-10 col-lg-5 cartt">
//                 <form onSubmit={submitHandler}>
//                     <h2>Delivery Address</h2>
//                     <div className="form-group">
//                         <label htmlFor="address_field">Address</label>
//                         <input
//                             type="text"
//                             id="address_field"
//                             className="form-control"
//                             value={address}
//                             onChange={(e) => setAddress(e.target.value)}
//                             required
//                         />
//                     </div>
//                     <div className="form-group">
//                         <label htmlFor="city_field">City</label>
//                         <input
//                             type="text"
//                             id="city_field"
//                             className="form-control"
//                             value={city}
//                             onChange={(e) => setCity(e.target.value)}
//                             required
//                         />
//                     </div>
//                     <div className="form-group">
//                         <label htmlFor="postal_code_field">Postal Code</label>
//                         <input
//                             type="number"
//                             id="postal_code_field"
//                             className="form-control"
//                             value={postalCode}
//                             onChange={(e) => setPostalCode(e.target.value)}
//                             required
//                         />
//                     </div>
//                     <div className="form-group">
//                         <label htmlFor="phone_field">Phone</label>
//                         <input
//                             type="text"
//                             id="phone_field"
//                             className="form-control"
//                             value={phoneNo}
//                             onChange={(e) => setPhoneNo(e.target.value)}
//                             required
//                         />
//                     </div>
//                     <div className="form-group">
//                         <label htmlFor="country_field">Country</label>
//                         <select
//                             id="country_field"
//                             className="form-control"
//                             value={country}
//                             onChange={(e) => setCountry(e.target.value)}
//                             required
//                         >
//                             {countriesList.map((country) => (
//                                 <option key={country.name} value={country.name}>
//                                     {country.name}
//                                 </option>
//                             ))}
//                         </select>
//                     </div>
//                     <button id="shipping_btn" className="btn btn" type="submit">
//                         Continue
//                     </button>
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default Delivery;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { saveDeliveryInfo } from "../../Actions/cartAction";
import CheckoutSteps from "./CheckoutSteps";
// import { countries } from "country-list";

const Delivery = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { deliveryInfo } = useSelector((state) => state.cart);

    // Check if deliveryInfo is defined, otherwise provide default values
    const initialAddress = deliveryInfo ? deliveryInfo.address || "" : "";
    const initialCity = deliveryInfo ? deliveryInfo.city || "" : "";
    const initialPostalCode = deliveryInfo ? deliveryInfo.postalCode || "" : "";
    const initialPhoneNo = deliveryInfo ? deliveryInfo.phoneNo || "" : "";
    const initialCountry = deliveryInfo ? deliveryInfo.country || "" : "";


    const [address, setAddress] = useState(initialAddress);
    const [city, setCity] = useState(initialCity);
    const [postalCode, setPostalCode] = useState(initialPostalCode);
    const [phoneNo, setPhoneNo] = useState(initialPhoneNo);
    const [country, setCountry] = useState(initialCountry);


    const countriesList = [
        "Select Country",
        "India",
        "UAE",
        "USA",
        // Add more countries as needed
    ];
    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(saveDeliveryInfo({ address, city, postalCode, phoneNo, country }));
        navigate("/confirm");
    };

    return (
        <>
        <CheckoutSteps delivery />
            <div className="row wrapper">
                <div className="col-10 col-lg-5 cartt">
                    <form onSubmit={submitHandler}>
                        <h2>Delivery Address</h2>
                        <div className="form-group">
                            <label htmlFor="address_field">Address</label>
                            <input
                                type="text"
                                id="address_field"
                                className="form-control"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="city_field">City</label>
                            <input
                                type="text"
                                id="city_field"
                                className="form-control"
                                value={city}
                                onChange={(e) => setCity(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="postal_code_field">Postal Code</label>
                            <input
                                type="number"
                                id="postal_code_field"
                                className="form-control"
                                value={postalCode}
                                onChange={(e) => setPostalCode(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone_field">Phone</label>
                            <input
                                type="text"
                                id="phone_field"
                                className="form-control"
                                value={phoneNo}
                                onChange={(e) => setPhoneNo(e.target.value)}
                                required
                            />
                        </div>
                        {/* <div className="form-group">
                        <label htmlFor="country_field">Country</label>
                        <select
                            id="country_field"
                            className="form-control"
                            value={country}
                            onChange={(e) => setCountry(e.target.value)}
                            required
                        >
                            {countriesList.map((country) => (
                                <option key={country.name} value={country.name}>
                                    {country.name}
                                </option>
                            ))}
                        </select>
                    </div> */}
                        <div className="form-group">
                            <label htmlFor="country_field">Country</label>
                            <select
                                id="country_field"
                                className="form-control"
                                value={country}
                                onChange={(e) => setCountry(e.target.value)}
                                required
                            >
                                {countriesList.map((countryName) => (
                                    <option key={countryName} value={countryName}>
                                        {countryName}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <button id="shipping_btn" className="btn btn" type="submit">
                            Continue
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Delivery;
