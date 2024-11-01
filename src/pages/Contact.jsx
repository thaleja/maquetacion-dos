import React from 'react';
import './Contact.css';
import Menu from '../components/Menu';
import Footer from '../components/Footer';

const Contact = () => {
    return (
        <div>
            <Menu />
            <div className="contact-container">
                <h1>Contacto</h1>
                <form>
                    <div className="form-group">
                        <label htmlFor="name">Nombre:</label>
                        <input type="text" id="name" name="name" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="select">Seleccion una opción:</label>
                        <select id="select" name="select">
                            <option value="opcion1">Selecciona una opción</option>
                            <option value="opcion2">Opción 2</option>
                            <option value="opcion3">Opción 3</option>
                        </select>
                    </div>
                    <button type="submit">Enviar</button>
                </form>
            </div>
            <Footer />
        </div>
    );
};

export default Contact;