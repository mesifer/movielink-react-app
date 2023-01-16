import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { BrowserRouter, Route, createBrowserRouter, RouterProvider } from 'react-router-dom';
import MovieDetail from './components/MovieDetail';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
    },
    {
        path: '/movie/:id',
        element: <MovieDetail />,
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(<RouterProvider router={router} />);
