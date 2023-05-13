import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Apropos from './pages/Apropos';
import Logement from './pages/Logement';
import Error404 from './components/Error';
import Header from './components/Header';
import Footer from './components/Footer';
import './styles/index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Router>
            <Header />
            <main className="main">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/accueil" element={<Home />} />
                    <Route path="/apropos" element={<Apropos />} />
                    <Route path="/logement/:id" element={<Logement />} />
                    <Route path="/error" element={<Error404 />} />
                    <Route path="*" element={<Error404 />} />
                </Routes>
            </main>
            <Footer />
        </Router>
    </React.StrictMode>
);
