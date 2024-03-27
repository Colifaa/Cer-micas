import React, { useState } from 'react';
import styles from './ScrollingMenu.module.css'; // Importa tus estilos CSS aquí


const ScrollingMenu = () => {
  const [hoveredOption, setHoveredOption] = useState(null);

  console.log(hoveredOption,"hoveredOption");

  const handleMouseOver = (option) => {
    setHoveredOption(option);
  };

  const handleMouseOut = () => {
    setHoveredOption(null);
  };

  return (
    <div className={styles.menuContainer} style={{backgroundImage: `url('/images/amb.jpg')`}}>
      <div className={styles.optionsContainer}>
        <h1></h1>
        <div className={styles.row}>
          <div className={`${styles.option} ${hoveredOption === 'dormitorio' ? styles.zoomedOption : ''}`} onMouseOver={() => handleMouseOver('dormitorio')} onMouseOut={handleMouseOut}>
            <a href="/dormitorio" className={styles.option}>
              <img src="/images/dormitorio.jpg" alt="Dormitorio" />
              <span className={styles.optionName}>Dormitorio</span>
            </a>
          </div>
          <div className={`${styles.option} ${hoveredOption === 'cocina' ? styles.zoomedOption : ''}`} onMouseOver={() => handleMouseOver('cocina')} onMouseOut={handleMouseOut}>
            <a href="/cocina" className={styles.option}>
              <img src="/images/cocina.jpg" alt="Cocina" />
              <span className={styles.optionName}>Cocina</span>
            </a>
          </div>
          <div className={`${styles.option} ${hoveredOption === 'comedor' ? styles.zoomedOption : ''}`} onMouseOver={() => handleMouseOver('comedor')} onMouseOut={handleMouseOut}>
            <a href="/comedor" className={styles.option}>
              <img src="/images/comedor.jpg" alt="Comedor" />
              <span className={styles.optionName}>Comedor</span>
            </a>
          </div>
        </div>
        <div className={styles.row}>
          <div className={`${styles.option} ${hoveredOption === 'bano' ? styles.zoomedOption : ''}`} onMouseOver={() => handleMouseOver('bano')} onMouseOut={handleMouseOut}>
            <a href="/bano" className={styles.option}>
              <img src="/images/bano.jpg" alt="Baño" />
              <span className={styles.optionName}>Baño</span>
            </a>
          </div>
          <div className={`${styles.option} ${hoveredOption === 'living' ? styles.zoomedOption : ''}`} onMouseOver={() => handleMouseOver('living')} onMouseOut={handleMouseOut}>
            <a href="/living" className={styles.option}>
              <img src="/images/living.jpg" alt="Living" />
              <span className={styles.optionName}>Living</span>
            </a>
          </div>
          <div className={`${styles.option} ${hoveredOption === 'exterior' ? styles.zoomedOption : ''}`} onMouseOver={() => handleMouseOver('exterior')} onMouseOut={handleMouseOut}>
            <a href="/exterior" className={styles.option}>
              <img src="/images/exterior.jpg" alt="Exterior" />
              <span className={styles.optionName}>Exterior</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScrollingMenu;
