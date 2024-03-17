import './Popular.scss';
import data_product from '../assets/data';
import Item from '../Item';

const Popular = () => {
    return (
        <div className="container">
            <div className="popular">
                <h1>POPULAR IN WOMEN</h1>
                <hr />
                <div className="popular-item">
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
        </div>
    );
};

export default Popular;
