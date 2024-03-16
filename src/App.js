import Navbar from './Components/Navbar';
import { Routes, Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import LoginSignup from './Pages/LoginSignup';
import Cart from './Pages/Cart';

const App = () => {
    return (
        <div className="app">
            <Navbar />
            <Routes>
                <Route path="/" element={<Shop />} />
                <Route path="/mens" element={<ShopCategory category="mens" />} />
                <Route path="/womans" element={<ShopCategory category="womans" />} />
                <Route path="/kids" element={<ShopCategory category="kids" />} />
                <Route path="/product" element={<Product />}>
                    <Route path=":productId" element={<Product />} />
                </Route>
                <Route path="/cart" element={<Cart />} />
                <Route path="/loginSignup" element={<LoginSignup />} />
            </Routes>
        </div>
    );
};

export default App;
