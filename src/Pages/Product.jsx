import './scss/Product.scss';
import { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import { useParams } from 'react-router-dom';
import Breadcumb from '../Components/Breadcumbs';
import ProductDisplay from '../Components/ProductDisplay';

const Product = () => {
    const { all_product } = useContext(ShopContext);
    const { productId } = useParams();
    const product = all_product.find((item) => item.id === Number(productId));

    return (
        <div className="container">
            <div className="product">
                <Breadcumb product={product} />
                <ProductDisplay product={product} />
            </div>
        </div>
    );
};

export default Product;
