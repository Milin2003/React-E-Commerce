import logo from './logo.svg';
import './App.css';
import Navbar from './Components/navbar/navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Shop from './Components/Pages/Shop';
import Shopcategory from './Components/Pages/Shopcategory';
import Product from './Components/Pages/Product';
import Cart from './Components/Pages/Cart';
import LoginSignup from './Components/Pages/LoginSignup';
import Footer from './Components/Footer/Footer';
import Men_Banner from './Components/assets/banner_mens.png'
import Women_Banner from './Components/assets/banner_women.png'
import Kids_Banner from './Components/assets/banner_kids.png'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/mens' element={<Shopcategory banner={Men_Banner} category="men" />} />
          <Route path='/womens' element={<Shopcategory banner={Women_Banner} category="women" />} />
          <Route path='/kids' element={<Shopcategory banner={Kids_Banner} category="kid" />} />
          <Route path='/product' element={<Product />}>
            <Route path=':productId' element={<Product />} />
          </Route>
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<LoginSignup />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
