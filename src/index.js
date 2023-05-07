import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import Home from './pages/Home';
import Header from './components/Header';
import Banner from './components/Banner'
import Footer from './components/Footer';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Header />
      <main className='main'>
        <Banner />
        <Home />
      </main>
      <Footer />
    
  </React.StrictMode>
);
