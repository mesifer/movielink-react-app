import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { BrowserRouter, Route, createBrowserRouter, RouterProvider } from 'react-router-dom';
import MovieDetail from './components/MovieDetail';
import SeriesDetail from './components/SeriesDetail';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
    },
    {
        path: '/movie/:id',
        element: <MovieDetail />,
    },
    {
        path: '/tv/:id',
        element: <SeriesDetail />,
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(<RouterProvider router={router} />);
