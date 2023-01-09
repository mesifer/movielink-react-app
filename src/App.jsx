import { useState } from 'react';
import reactLogo from './assets/react.svg';
import Navbar from './components/Navbar';
import Slider from './components/Slider';

function App() {
    return (
        <div className='App'>
            <div className='bg-slate-900  min-h-screen'>
                <Navbar />
                <Slider />
            </div>
        </div>
    );
}

export default App;
