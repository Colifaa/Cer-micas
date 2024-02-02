// Navbar.js
import { useState } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css'

const Navbar = () => {
  const [showProductsDropdown, setShowProductsDropdown] = useState(false);

  const toggleProductsDropdown = () => {
    setShowProductsDropdown(!showProductsDropdown);
  };

  return (
    <nav>
      <div className="left">
        <div className={styles.logo}>
          <Link href="/">
          <img src="/images/logo.png"></img>
          </Link>
          
        </div>
        <div className="menu">
        <Link href="/">Home</Link>
          <div
            className="dropdown"
            onMouseEnter={toggleProductsDropdown}
            onMouseLeave={toggleProductsDropdown}
          >
            <a>Productos</a>
            {showProductsDropdown && (
              <div className="dropdown-content">
                <Link href="/category1">
                  Categoría 1
                </Link>
                <Link href="/category2">
                  Categoría 2
                </Link>
                {/* Agrega más enlaces según sea necesario */}
              </div>
            )}
          </div>
          <Link href="/about">
            About
          </Link>
          <Link href="/login">
            Login
          </Link>
        </div>
      </div>
      <div className="right">
        <input type="text" placeholder="Buscar" />
      </div>
      <style jsx>{`
        nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem;
          background-color: #333;
          color: white;
        }
        .left {
          display: flex;
          align-items: center;
        }
        .logo {
          font-size: 1.5rem;
        }
        .menu {
          display: flex;
          gap: 1rem;
        }
        .dropdown {
          position: relative;
        }
        .dropdown-content {
          display: none;
          position: absolute;
          top: 100%;
          left: 0;
          background-color: #333;
          padding: 0.5rem;
          border-radius: 4px;
          z-index: 1;
        }
        .dropdown-content a {
          color: white;
          text-decoration: none;
          display: block;
          padding: 0.5rem;
        }
        .dropdown-content a:hover {
          background-color: #555;
        }
        .dropdown:hover .dropdown-content {
          display: block;
        }
        .right {
          display: flex;
          align-items: center;
        }
        input {
          padding: 0.5rem;
          margin-right: 1rem;
          border: none;
          border-radius: 4px;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
