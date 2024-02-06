import React from 'react';
import logo from '../../assets/logos/logo.png';
import '../style.css'
import { Container, LogoutBtn } from '../Index';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Header() {
    const authStatus = useSelector((state) => state.auth.status);
    const navigate = useNavigate();

    const navItems = [
        {
            name: 'Login',
            path: '/',
            active: !authStatus,
        },
        {
            name: 'Registration',
            path: '/register',
            active: !authStatus
        },
        {
            name: 'Home',
            path: '/',
            active: authStatus
        },
        {
            name: 'About',
            path: '/',
            active: authStatus
        }
    ]

    return (
        <nav>
            <div className="container">
                <div style={{ display: 'flex' }}>
                    <img src={logo} alt="" style={{ width: '100%', height: '100%' }} />
                    <h3>Nexcent</h3>
                </div>
                <div>
                    <ul>
                        {/* <li>Home</li>
                        <li>Features</li>
                        <li>Community</li>
                        <li>Blog</li>
                        <li>Pricing</li>
                        <li style={{ backgroundColor: '#4CAF4F', textAlign: 'center' }}>Register Now <img src="./images/Right.png" alt="" /></li> */}
                        {
                            navItems.map((items) => (
                                items.active ?
                                    <li key={items.name}>
                                        <button
                                            onClick={() => navigate(items.path)}
                                        >{items.name}</button>
                                    </li>
                                    : null
                            ))
                        }
                        {authStatus && <li>
                            <LogoutBtn />
                        </li>}
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Header;
