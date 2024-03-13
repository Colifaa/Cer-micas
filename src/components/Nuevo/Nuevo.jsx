import React from 'react';
import { Heading } from "@chakra-ui/react";

const Nuevo = () => {
  return (
    <Heading fontFamily="Black Han Sans" size="xl">
    <div className="relative rounded-xl" >
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center text-black" style={{backgroundImage: "url('https://www.floornature.es/media/photos/39/16141/00_iris_ceramica_group_dys_tiles_amb23_bagno_woodland_nature_full.jpg')"}}>
        <img src='/images/logo.png'></img>
        <p></p>
      </div>
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center bg-indigo-600 text-white" style={{backgroundImage: "url('https://www.ariostea-high-tech.com/img/homepage/slide/slide-9/Large+Porcelain+Stoneware+Slabs-desktop.jpg')"}}>
        <h2 className="text-4xl">Sobre Nosotros</h2>
       
      </div>

    </div>
    </Heading>
  );
};

export default Nuevo;