import './comp_css/Header.css';
import { ReactComponent as Logo } from '../../img/brandlogo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Offcanvas from 'react-bootstrap/Offcanvas';
// import OffcanvasHeader from 'react-bootstrap/OffcanvasHeader';
import { useEffect, useState } from 'react';

function Header() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const NavItem = (props) => {
        return (
            <ul className={props.className} >
                <li>My Account</li>
                <li>HOME</li>
                <li>ABOUT US</li>
                <li>PARTNERS</li>
                <li>BLOGS</li>
                <li>CONTACT US</li>
            </ul>
        );
    }

    return (
        <div className="header">
            <div className="brand-logo">
                <Logo />
            </div>
            <div className="navigation">
                <NavItem className="nav-items outside" />
                <button className='menu' onClick={handleShow}><FontAwesomeIcon icon={faBars} size="xl" /></button>
            </div>
            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>
                    <div className="brand-logo">
                        <Logo />
                    </div>
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <NavItem className="nav-items sidebar-items" />
                </Offcanvas.Body>
            </Offcanvas>
        </div >
    )
}

export default Header;