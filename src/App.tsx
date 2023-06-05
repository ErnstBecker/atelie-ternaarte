import React from 'react';
import './App.css'
import './index.css'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// * Components
import BackgroundImage from './components/BackgroundImage';
import Navbar from './components/NavBar';

// ! Pages
import HomePage from './pages/Home';
import GalleryPage from './pages/Gallery';
import FAQPage from './pages/FAQ';
import ContactPage from './pages/Contact';
import AboutPage from './pages/About';
import NotFoundPage from './pages/404';

// * My APP
const App: React.FC = () => {

  // Enable Scroll on gallery page.
  const ScrollControlledPage = () => {
    const location = useLocation();
    const shouldEnableScroll = location.pathname === '/galeria';

    useEffect(() => {
      if (shouldEnableScroll) {
        // Enable Scroll for "/galeria"
        document.body.style.overflow = 'auto';
      } else {
        // Disable Scroll
        document.body.style.overflow = 'hidden';
      }
    }, [shouldEnableScroll]);

    return null;
  };

  return (
    <>
    <Router>
    <ScrollControlledPage />
    <BackgroundImage/>
    <Navbar/>
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/galeria' element={<GalleryPage />}></Route>
        <Route path='/faq' element={<FAQPage />}></Route>
        <Route path='/contato' element={<ContactPage />}></Route>
        <Route path='/sobre' element={<AboutPage />}></Route>
        <Route path='/404' element={<NotFoundPage />} />
        <Route path='/*' element={<Navigate to="/404" />} />
      </Routes>
    </Router>
    </>
  );
};

export default App;
