import { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import dropdown_icon from '../Components/assets/dropdown_icon.png';
import Item from '../Components/Item';
import './scss/ShopCategory.scss';

const ShopCategory = ({ banner, category }) => {
    const { all_product } = useContext(ShopContext);

    return (
        <div className="container">
            <div className="shopcategory">
                <img className="shopcategory-banner" src={banner} alt="" />
                <div className="shopcategory-indexSort">
                    <p>
                        <span>Showing 1-12</span>
                        out of 36 products
                    </p>
                    <div className="shopcategory-sort">
                        Sort by
                        <img src={dropdown_icon} alt="" />
                    </div>
                </div>
                <div className="shopcategory-products">
                    {all_product.map((item, index) => {
                        if (category === item.category) {
                            return (
                                <Item
                                    key={index}
                                    id={item.id}
                                    image={item.image}
                                    name={item.name}
                                    new_price={item.new_price}
                                    old_price={item.old_price}
                                />
                            );
                        }
                    })}
                </div>
                <button className="shopcategory-loadmore">Explore more</button>
            </div>
        </div>
    );
};

export default ShopCategory;
