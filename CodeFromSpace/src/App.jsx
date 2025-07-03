import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import ScrollToTop from './components/ScrollToTop';
import './App.css';

const Inicio = lazy(() => import('./pages/Inicio'));
const Proyectos = lazy(() => import('./pages/Proyectos'));

function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <Suspense fallback={<div>Cargando...</div>}>
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/proyectos" element={<Proyectos />} />
          </Routes>
        </Suspense>
      </Router>
    </HelmetProvider>
  )
}

export default App
