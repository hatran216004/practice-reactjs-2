import './ProductDisplay.scss';
import star_icon from '../assets/star_icon.png';
import star_dull_icon from '../assets/star_dull_icon.png';

const ProductDisplay = ({ product }) => {
    return (
        <div className="productDisplay">
            <div className="productDisplay-left">
                <div className="productDisplay-img-list">
                    <img src={product.image} alt={product.name} />
                    <img src={product.image} alt={product.name} />
                    <img src={product.image} alt={product.name} />
                    <img src={product.image} alt={product.name} />
                </div>
                <div className="productDisplay-img">
                    <img className="productDisplay-main-img" src={product.image} alt={product.name} />
                </div>
            </div>

            <div className="productDisplay-right">
                <h1>{product.name}</h1>
                <div className="productDisplay-right-stars">
                    <img src={star_icon} alt="star" />
                    <img src={star_icon} alt="star" />
                    <img src={star_icon} alt="star" />
                    <img src={star_icon} alt="star" />
                    <img src={star_dull_icon} alt="star" />
                    <p>(122)</p>
                </div>
                <div className="productDisplay-right-prices">
                    <div className="productDisplay-right-price-old">${product.old_price}</div>
                    <div className="productDisplay-right-price-new">${product.new_price}</div>
                </div>
                <div className="productDisplay-right-desc">
                    <p className="productDisplay-right-paragraph">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores enim, molestias aperiam ab
                        est deleniti aut earum excepturi eum debitis et nisi magnam vero alias, harum consequatur quis
                        consequuntur quasi!
                    </p>
                    <div className="productDisplay-right-sizes">
                        <h1>Select size:</h1>
                        <div className="productDisplay-right-size">
                            <span>S</span>
                            <span>M</span>
                            <span>L</span>
                            <span>XL</span>
                            <span>XXL</span>
                        </div>
                    </div>
                    <button className="btn-add-to-cart">ADD TO CART</button>
                    <p className="productDisplay-right-category">
                        <span>Category:</span>
                        Women, T-Shirt, Crop Top
                    </p>
                    <p className="productDisplay-right-category">
                        <span>Tags:</span>
                        Modern, Latest
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ProductDisplay;
