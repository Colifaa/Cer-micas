import React from 'react';

const Nuevo = () => {
  return (
    <div className="relative rounded-xl" >
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center text-black" style={{backgroundImage: "url('https://www.floornature.es/media/photos/39/16141/00_iris_ceramica_group_dys_tiles_amb23_bagno_woodland_nature_full.jpg')"}}>
        <h2 className="text-4xl">CERAMICAS SAN RAFAEL</h2>
        <p>Sobre Nosotros</p>
      </div>
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center bg-indigo-600 text-white" style={{backgroundImage: "url('https://www.ariostea-high-tech.com/img/homepage/slide/slide-9/Large+Porcelain+Stoneware+Slabs-desktop.jpg')"}}>
        <h2 className="text-4xl">The Second Title</h2>
        <p>Scroll Down</p>
      </div>
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center bg-purple-600 text-white" style={{backgroundImage: "url('https://www.floornature.es/media/photos/39/17457/00_ariostea_ultra_marmi_white_ocean_blue_tempest_1_full.jpg')"}}>
        <h2 className="text-4xl">The Third Title</h2>
        <p>Scroll Down</p>
      </div>
    </div>
  );
};

export default Nuevo;