import { useEffect, useState } from 'react';
import Footer from './components/Footer';
import ListMovie from './components/ListMovie';
import Navbar from './components/Navbar';
import Slider from './components/Slider';

function App() {
    return (
        <div className="App">
            <div className="bg-slate-900">
                <Navbar />
                <Slider />
                <ListMovie />
                <Footer />
            </div>
        </div>
    );
}

export default App;
