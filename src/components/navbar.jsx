import { useState } from "react";

const NavBar = () => {
    const [active, setActive] = useState('Home');
    return (
        <nav>
            <ul>
                <li className={active === 'Home' ? 'active' : ''}>Home</li>
                <li className={active === 'About' ? 'active' : ''}>About</li>
                <li className={active === 'Portfolios' ? 'active' : ''}>Portfolios</li>
                <li className={active === 'Contact' ? 'active' : ''}>Contact</li>
            </ul>
        </nav>
    );
};

export default NavBar;