import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Phone, Globe } from 'lucide-react'
import './Navbar.css'

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const location = useLocation()

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    useEffect(() => {
        setIsOpen(false)
    }, [location])

    const navLinks = [
        { name: 'Bosh sahifa', path: '/' },
        { name: 'Maktab haqida', path: '/haqida' },
        { name: 'Dasturlar', path: '/dasturlar' },
        { name: 'O\'qituvchilar', path: '/oqituvchilar' },
        { name: 'Yangiliklar', path: '/yangiliklar' },
    ]

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container navbar-container">
                <Link to="/" className="navbar-logo">
                    <img src="/logo school.jpg" alt="BM Maktab Logo" className="navbar-logo-img" />
                    <div className="logo-text">
                        <span className="logo-main">BM Maktab</span>
                        <span className="logo-sub">Xususiy Ta'lim Markazi</span>
                    </div>
                </Link>

                <div className="navbar-links">
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                <div className="navbar-cta">
                    <a href="tel:+998770572500" className="navbar-phone">
                        <Phone size={14} />
                        +998 77 057 25 00
                    </a>
                    <Link to="/boglanish" className="btn btn-primary navbar-btn">
                        Qabul 2026
                    </Link>
                </div>

                <button className="navbar-toggle" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
                {navLinks.map((link) => (
                    <Link
                        key={link.path}
                        to={link.path}
                        className={`mobile-link ${location.pathname === link.path ? 'active' : ''}`}
                    >
                        {link.name}
                    </Link>
                ))}
                <Link to="/boglanish" className="btn btn-primary mobile-cta-btn">
                    Hoziroq bog'lanish
                </Link>
            </div>
        </nav>
    )
}
