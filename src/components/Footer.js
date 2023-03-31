import React from 'react';
import github from './icons/github.png';
import insta from './icons/instagram.png';
import linkedin from './icons/linkedin.png';

export default function Footer() {
    return (
        <div style={{ color: "black", backgroundColor: '#E3E6E4' }}>
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                <div className="col-md-4 d-flex align-items-center mx-2">
                    <span className="customf"> Made by - Kushal Goyal </span>
                </div>

                <ul className="nav col-md-4 justify-content-end list-unstyled d-flex mx-3" >
                    <li className="ms-3"><a className="text-muted" rel="noreferrer" target="_blank" href="https://www.instagram.com/__kushal__goyal"><img src={insta} alt="insta" width="24" height="24" /></a></li>
                    <li className="ms-3"><a className="text-muted" rel="noreferrer" target="_blank" href="https://github.com/kushal168"><img src={github} alt="github" width="24" height="24" /></a></li>
                    <li className="ms-3"><a className="text-muted" rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/kushal168/"><img src={linkedin} alt="linkedin" width="24" height="24" /></a></li>
                </ul>
            </footer>
        </div>
    )
}
