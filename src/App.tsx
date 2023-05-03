import React from 'react';
import './App.css'
import './index.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from './components/NavBar';

// ! Pages
import HomePage from './pages/Home';
import ProductsPage from './pages/Products';
import SocialPage from './pages/Social';
import ContactPage from './pages/Contact';
import AboutPage from './pages/About';
import NotFoundPage from './pages/404';

// * My APP
const App: React.FC = () => {
  return (
    <>
    <Router>
    <Navbar/>
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/produtos' element={<ProductsPage />}></Route>
        <Route path='/redes' element={<SocialPage />}></Route>
        <Route path='/contato' element={<ContactPage />}></Route>
        <Route path='/sobre' element={<AboutPage />}></Route>
        <Route path='/*' element={<NotFoundPage />} />
      </Routes>
    </Router>
    </>
  )
};

export default App;
