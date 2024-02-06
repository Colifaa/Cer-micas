// Navbar.js
import { useState } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [showProductsDropdown, setShowProductsDropdown] = useState(false);

  const toggleProductsDropdown = () => {
    setShowProductsDropdown(!showProductsDropdown);
  };

  return (
    <div className={styles.mix}>
      <nav className={styles.nav} >
      <div className={styles.left}>
        <div className={styles.logo}>
          <Link href="/">
            <img src="/images/logo.png"></img>
          </Link>
        </div>
        <div className={styles.menu}>
          <Link href="/">Home</Link>
          <div
            className={styles.dropdown}
            onMouseEnter={toggleProductsDropdown}
            onMouseLeave={toggleProductsDropdown}
          >
            <a>Productos</a>
            {showProductsDropdown && (
              <div className={styles['dropdown-content']}>
                <Link href="/category1">Categoría 1</Link>
                <Link href="/category2">Categoría 2</Link>
                {/* Agrega más enlaces según sea necesario */}
              </div>
            )}
          </div>
          <Link href="/about">About</Link>
          <Link href="/login">Login</Link>
        </div>
      </div>
      <div className={styles.right}>
        <input className={styles.input} type="text" placeholder="Buscar" />
      </div>
    </nav>
    <div className="w-screen h-screen overflow-hidden relative before:block before:absolute before:h-full before:w-full before:top-0 before:left-0 before:z-10 before:opacity-30">
        
        <div className="relative z-20 max-w-screen-lg mx-auto grid grid-cols-12 h-full items-center">
          <div className="col-span-6">
            <span className="uppercase text-white text-xs font-bold mb-2 block">WE ARE EXPERTS</span>
            <h1 className="text-white font-extrabold text-5xl mb-8">Somos expertos en Ceramicas, y tenemos todo para equipar en tu Hogar!</h1>
            <p className="text-stone-100 text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <button className="mt-8 text-white uppercase py-4 text-base font-light px-10 border border-white hover:bg-white hover:bg-opacity-10">Get started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
