import { useState } from 'react';
import './Header.css';
import { MdMenu, MdClose } from 'react-icons/md';

export const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="header">
            <div className="container header-content">
                {/* Logo */}
                <div className="logo-container">
                    <div className="logo-icon">
                        <span>🚀</span>
                    </div>
                    <span className="logo-text">
                        Funnel<span className="logo-highlight">Core</span>
                    </span>
                </div>

                {/* Desktop Navigation */}
                <nav className="nav-links">
                    <a href="#services" className="nav-link">Serviços</a>
                    <a href="#methodology" className="nav-link">Metodologia</a>
                    <a href="#results" className="nav-link">Resultados</a>
                </nav>

                {/* CTA Button */}
                <button className="cta-button">
                    Consultoria Grátis
                </button>

                {/* Mobile Menu Button */}
                <button
                    className="mobile-menu-btn"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? <MdClose /> : <MdMenu />}
                </button>
            </div>

            {/* Mobile Menu Dropdown */}
            {menuOpen && (
                <div className="mobile-menu">
                    <a href="#services" className="mobile-nav-item" onClick={() => setMenuOpen(false)}>Serviços</a>
                    <a href="#methodology" className="mobile-nav-item" onClick={() => setMenuOpen(false)}>Metodologia</a>
                    <a href="#contact" className="mobile-nav-item" onClick={() => setMenuOpen(false)}>Contato</a>
                </div>
            )}
        </header>
    );
};
