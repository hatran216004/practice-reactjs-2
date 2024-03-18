import './Breadcumb.scss';
import arrow_icon from '../assets/breadcrum_arrow.png';

const Breadcumb = ({ product }) => {
    return (
        <div className="breadcrum">
            HOME
            <img src={arrow_icon} alt="arrow" />
            SHOP
            <img src={arrow_icon} alt="arrow" />
            {product.category}
            <img src={arrow_icon} alt="arrow" />
            {product.name}
        </div>
    );
};

export default Breadcumb;
