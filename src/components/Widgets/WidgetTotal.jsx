import React, { useState, useEffect } from 'react';
import { Box } from "@chakra-ui/react";
import styles from "../Widgets/WidgetTotal.module.css";

function WidgetTotal() {
  const [currentTime, setCurrentTime] = useState(new Date());
 

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };

  return (
    <Box  w='100%' p={4} color='white' display="flex" flexDirection="column" justifyContent="flex-end" alignItems="flex-end" >
      <div className={styles.card}>
        <p className={styles.time}>
          <span>{currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
          <span className={styles.sub}></span>
        </p>
        <p className={styles.day}>{currentTime.toLocaleDateString("es", options)}</p> 
      </div>
    </Box>
  );
}

export default WidgetTotal;
