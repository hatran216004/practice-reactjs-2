import { useContext } from 'react';
import { ShopContext } from '../../Context/ShopContext';
import remove_icon from '../assets/cart_cross_icon.png';
import './CartItems.scss';

const CartItems = () => {
    const { all_product, cartItems, removeFromCart, getTotalCartAmnout } = useContext(ShopContext);

    return (
        <div className="cartItems">
            <div className="cartItems-format-main">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            {all_product.map((product, index) => {
                if (cartItems[product.id] > 0) {
                    return (
                        <div key={index}>
                            <div className="cartItems-format cartItems-format-main">
                                <img src={product.image} alt="" className="cartItems-product-img" />
                                <p className="cartItems-product-name">{product.name}</p>
                                <p>${product.new_price}</p>
                                <button className="cartItems-quantity">{cartItems[product.id]}</button>
                                <p>{product.new_price * cartItems[product.id]}</p>
                                <img
                                    className="cartItems-remove-icon "
                                    src={remove_icon}
                                    alt=""
                                    onClick={() => removeFromCart(product.id)}
                                />
                            </div>
                            <hr />
                        </div>
                    );
                } else {
                    return null;
                }
            })}
            <div className="cartItems-down">
                <div className="cartItems-total">
                    <h1>Cart Totals</h1>
                    <div>
                        <div className="cartItems-total-item">
                            <p>Subtatal</p>
                            <p>${getTotalCartAmnout()}</p>
                        </div>
                        <hr />
                        <div className="cartItems-total-item">
                            <p>Shipping free</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div className="cartItems-total-item">
                            <h3>Total</h3>
                            <h3>${getTotalCartAmnout()}</h3>
                        </div>
                    </div>
                    <button>Proceed to checkout</button>
                </div>
                <div className="cartItems-promocode">
                    <p>If you have a promocode, Enter it here</p>
                    <div className="cartItems-promobox">
                        <input type="text" placeholder="promo code" />
                        <button>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartItems;
