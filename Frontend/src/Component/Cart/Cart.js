import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
    addItemToCart,
    removeItemFromCart,
    updateCartQuantity,
} from '../../Actions/cartAction';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIndianRupee } from '@fortawesome/free-solid-svg-icons';

const Cart = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { cartItems } = useSelector((state) => state.cart);

    const removeCartItemHandler = (id) => {
        dispatch(removeItemFromCart(id));
    };

    const increaseQty = (id, quantity, stock) => {
        const newQty = quantity + 1;

        if (newQty <= stock) {
            dispatch(addItemToCart(id, newQty));
        }
    };

    // const decreaseQty = (id, quantity) => {
    //     if (quantity > 1) {
    //         const newQty = quantity - 1;
    //         dispatch(updateCartQuantity(id, newQty));
    //         return newQty;
    //     }
    // };
    const decreaseQty = (id, quantity, stock) => {
        const newQty = quantity - 1;

        if (newQty <= stock) {
            dispatch(addItemToCart(id, newQty));
            dispatch(updateCartQuantity(id, newQty));
        }
    };
    
  

    const checkoutHandler = () => {
        navigate('/delivery');
    };

    return (
        <>
            {cartItems.length === 0 ? (
                <h2 className="mt-5">Your Cart is empty</h2>
            ) : (
                <div className="row d-flex justify-content-between cartt">
                    <div className="col-12 col-lg-8">
                        <h2 className="mt-5">
                            Your Cart: <b>{cartItems.length} items</b>
                        </h2>
                        {cartItems.map((item) => (
                            <div className="cart-item" key={item.id}>
                                <hr />
                                <div className="d-flex row">
                                    {/* img */}
                                    <div className="col-4 col-lg-3">
                                        <img src={item.image} alt="items" height="90" width="115" />
                                    </div>
                                    {/* item name */}
                                    <div className=" col-8 col-lg-9 ">
                                        <h3>{item.name}</h3>
                                        {/* item price */}
                                        <p id='card_item_price'>
                                            Price: <FontAwesomeIcon icon={faIndianRupee} />
                                            {item.price}
                                        </p>

                                        {/* quantity controls */}
                                        <div className='col-4 col-lg-3 mt-4 mt-lg-0 row'>
                                            <div className='stockCounter d-inline row'>
                                                <span className='btn btn-danger minus' onClick={() => decreaseQty(item.fooditem, item.quantity,item.stock)}>
                                                    -
                                                </span>
                                                {/* Display current Quantity */}
                                                <input type='number' className='ml-1 mr-1 form-control count d-inline' value={item.quantity} readOnly />
                                                <span
                                                    className="btn btn-primary plus"
                                                    onClick={() =>increaseQty(item.fooditem,item.quantity,item.stock)}>
                                                    +
                                                </span>
                                            </div>
                                            {/* Remove item btn */}
                                            <div className='col-4 col-lg-1 mt-4 mt-lg-0' >
                                                <i id='delete_cart_item' className='fa fa-trash btn btn-danger' onClick={() => removeCartItemHandler(item.fooditem)}></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* Oreder Summary */}
                    <div className="col-12 col-lg-3 my-4">
                        <div className="cart-summary">
                            <h3>Order Summary</h3>
                            <hr/>
                            <p>Total Items: {cartItems.reduce((acc, item) => acc + Number(item.quantity), 0)}(Units)</p>
                            <span className='order-summary'>
                                Total Price:{' '}
                                <FontAwesomeIcon icon={faIndianRupee} />
                                {cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2)}
                            </span>
                            <button onClick={checkoutHandler} className="btn btn-primary btn-block" id='checkout_btn'>
                                Proceed to Checkout
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Cart;
