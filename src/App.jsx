import { useEffect, useState } from 'react';
import Footer from './components/Footer';
import ListMovie from './components/ListMovie';
import MovieWrapper from './components/movies/MovieWrapper';
import Navbar from './components/Navbar';
import Slider from './components/Slider';

function App() {
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
