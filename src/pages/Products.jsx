import React from 'react';
import './Products.css';
import Menu from '../components/Menu';
import Footer from '../components/Footer';
import img01 from '/public/img01.jpg';
import img2 from '/public/img2.jpg';
import img3 from '/public/img3.jpg';
import img4 from '/public/img4.jpg';
import img5 from '/public/img5.jpg';

const Products = () => {
    return (
        <div>
            <Menu />
            <section className="products-section">
            <h2 className="products-title">Productos</h2>
            <div className="products-container">
            <img src={img01} alt="img 1" />
                <img src={img2} alt="img 2" />
                <img src={img3} alt="img 3" />
                <img src={img4} alt="img 4" />
                <img src={img5} alt="img 5" />
            </div>
            </section>
            <Footer />
        </div>
    );
};

export default Products;