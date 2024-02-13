import logo from './logo.svg';
import './App.css';
import Navbar from './Components/navbar/navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Shop from './Components/Pages/Shop';
import Shopcategory from './Components/Pages/Shopcategory';
import Product from './Components/Pages/Product';
import Cart from './Components/Pages/Cart';
import LoginSignup from './Components/Pages/LoginSignup';

function App() {
  return (
    <div>
      <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<Shop/>}/>
            <Route path='/mens' element={<Shopcategory category="men" />}/>
            <Route path='/womens' element={<Shopcategory category="women"/>}/>
            <Route path='/kids' element={<Shopcategory category="kid"/>}/>
            <Route path='/product' element={<Product/>}/>
            <Route path=':productId' element={<Product/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/login' element={<LoginSignup/>}/>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
