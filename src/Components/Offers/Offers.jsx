import './Offers.scss';
import exclusive_image from '../assets/exclusive_image.png';

const Offers = () => {
    return (
        <div className="container">
            <div className="offers">
                <div className="offers-left">
                    <h1>Exclusive</h1>
                    <h1>Offers For You</h1>
                    <p>ONLY ON BEST SELLERS PRODUCT</p>
                    <button>Check now</button>
                </div>
                <div className="offers-right">
                    <img src={exclusive_image} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Offers;