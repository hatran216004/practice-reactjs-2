import './NewCollections.scss';
import new_collections from '../assets/new_collections';
import Item from '../Item';

const NewCollections = () => {
    return (
        <div className="container">
            <div className="new-collections">
                <h1>NEW COLLECTIONS</h1>
                <hr />
                <div className="collections">
                    {new_collections.map((item, index) => (
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

export default NewCollections;
