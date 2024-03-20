import './RelatedProducts.scss';
import data_product from '../assets/data';
import Item from '../Item';

const RelatedProducts = () => {
    return (
        <div className="relatedProducts">
            <h1>Related Products</h1>
            <hr />
            <div className="relatedProducts-item">
                {data_product.map((item, index) => (
                    <Item
                        key={index}
                        id={item.id}
                        image={item.image}
                        name={item.name}
                        new_price={item.new_price}
                        old_price={item.old_price}
                    />
                ))}
            </div>
        </div>
    );
};

export default RelatedProducts;
