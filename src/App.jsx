import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import {StoreProvider} from './store';
import HomePage from './pages/HomePage';
import ProductListingPage from './pages/ProductListingPage';
import ProductViewPage from './pages/ProductViewPage';
import {CategoriesPage,OrdersPage,LoginPage,RegisterPage,CartPage,CheckoutPage,InfoPage} from './pages/InteractivePages';
export default function App(){return <StoreProvider><BrowserRouter><Routes>
<Route path="/" element={<HomePage/>}/><Route path="/products" element={<ProductListingPage/>}/><Route path="/produtos" element={<ProductListingPage/>}/><Route path="/product/:id" element={<ProductViewPage/>}/>
<Route path="/categorias" element={<CategoriesPage/>}/><Route path="/pedidos" element={<OrdersPage/>}/><Route path="/login" element={<LoginPage/>}/><Route path="/cadastro" element={<RegisterPage/>}/><Route path="/carrinho" element={<CartPage/>}/><Route path="/checkout" element={<CheckoutPage/>}/><Route path="*" element={<InfoPage/>}/>
</Routes></BrowserRouter></StoreProvider>}
