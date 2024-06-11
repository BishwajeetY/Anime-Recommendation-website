import React from 'react';


const Footer = (props) => {
    return (
        <footer className="footer">

            <button className="footer-button"  id="btn1"onClick={e=>props.GenreHandler(e.target.id)}>Action</button>
            <button className="footer-button"id="btn2" onClick={e=>props.GenreHandler(e.target.id)}>Mystery</button>
            <button className="footer-button"id="btn3" onClick={e=>props.GenreHandler(e.target.id)}>Horror</button>
            <button className="footer-button"id="btn4" onClick={e=>props.GenreHandler(e.target.id)}>Shonen</button>
            <button className="footer-button"id="btn5" onClick={e=>props.GenreHandler(e.target.id)}>Comedy</button>
        </footer>
    );
};

export default Footer;