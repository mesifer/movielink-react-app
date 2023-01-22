import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import reactLogo from './assets/react.svg';
import Footer from './components/Footer';
import ListMovie from './components/ListMovie';
import MovieDetail from './components/MovieDetail';
import MovieWrapper from './components/MovieWrapper';
import Navbar from './components/Navbar';
import Slider from './components/Slider';

function App() {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <div className="App">
            <div className="bg-slate-900  min-h-[200vh]">
                <Navbar />
                <Slider />
                <MovieWrapper />
                <ListMovie />
                <Footer />
            </div>
        </div>
    );
}

export default App;
