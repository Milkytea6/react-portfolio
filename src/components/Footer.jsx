import { useState } from 'react';

function Footer() {
    return (
        <div className='footer-container'>

            <div className="container">
                <h4>Created by me using React</h4>
                <a href="https://react.dev/">
                    <img src='assets/react.svg'></img>
                </a>
                <h4>Email: chrisgcpg@gmail.com</h4>
                <h4>Phone: 609-314-1094</h4>
            </div>
        </div>
    )
}

export default Footer;