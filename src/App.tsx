import { useState } from 'react';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import './App.css';
import { CartContext } from './components/CartContext';
import { MyCart } from './components/MyCart';
import MainPage from './MainPage';
import { OrderType } from './types/OrderType';

function App() {
  const [coffeList, setCoffeeList] = useState<OrderType[]>([]);
  return (
    <BrowserRouter>
      <CartContext.Provider value={{ coffeList, setCoffeeList }}>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='cart' element={<MyCart />} />
        </Routes>
      </CartContext.Provider>
    </BrowserRouter>
  );
}
export default App;
