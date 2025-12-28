import { useState } from "react";
import "./../styles/navbar.css";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <nav className="navbar">
            <div className="logo">My Portfolio</div>

            <div className="menu-icon" onClick={() => setOpen(!open)}>
            </div>

            <ul className={`nav-links ${open ? "open" : ""}`}>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    );
};