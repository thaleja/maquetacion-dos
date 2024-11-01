import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Menu from '../components/Menu';
import Footer from '../components/Footer';
import Home from '../pages/Home';
import Services from '../pages/Services';
import Contact from '../pages/Contact';
import About from '../pages/About';
import Products from '../pages/Products';

export const routes =[
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '/services',
        element: <Services />,
    },
    {
        path: '/contact',
        element: <Contact />,
    },
    {
        path: '/about',
        element: <About />,
    },
    {
        path: '/products',
        element: <Products />
    }
];

