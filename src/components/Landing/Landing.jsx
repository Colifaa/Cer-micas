import React from 'react';

function Landing() {
  return (
    <>


      <div className="bg-[#f7d0b6] py-20">
        <div className="max-w-screen-lg mx-auto flex justify-between items-center">
          <div className="max-w-xl">
            <h2 className="font-black text-sky-950 text-3xl mb-4">CON MAS DE 12 AÑOS AL SERVICIO DEL CLIENTE</h2>
            <p className="text-base text-sky-950">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          <button className="text-sky-950 uppercase py-3 text-base px-10 border border-sky-950 hover:bg-sky-950 hover:bg-opacity-10">Get started</button>
        </div>
      </div>

      <div className="py-12 relative overflow-hidden bg-white">
        <div className="grid grid-cols-2 max-w-screen-lg mx-auto">
          <div className="w-full flex flex-col items-end pr-16">
            <h2 className="text-[#64618C] font-bold text-2xl max-w-xs text-right mb-12 mt-10">Ultimos ingresos!</h2>
            <div className="h-full mt-auto overflow-hidden relative">
              <img src="https://ceramicasanlorenzo.com.ar/wp-content/uploads/2023/11/Ceramica-San-Lorenzo-Volta-Tiza-453x453-1.jpg.webp" className="h-full w-full object-contain" alt="" />
            </div>
          </div>

          <div className="py-20 bg-slate-100 relative before:absolute before:h-full before:w-screen before:bg-sky-950 before:top-0 before:left-0">
            <div className="relative z-20 pl-12">
              <h2 className="text-[#f7d0b6] font-black text-5xl leading-snug mb-10">VOLTA <br />TIZA</h2>
              <p className="text-white text-sm">
              Añádele a tus ambientes un toque único y particular con nuestros calcáreos Volta Tiza. Su diseño original y acabado satinado lo hacen ideal para brindar autenticidad a tus ambientes. Disponible en 45,3×45,3, el cerámico Volta Tiza ofrece muchas opciones creativas para tu hogar. Gracias a su color neutro y su diseño original, te ofrece un sinfín de opciones para darle diseño y creatividad a tu entorno.
              </p>
              <button className="mt-8 text-white uppercase py-3 text-sm px-10 border border-white hover:bg-white hover:bg-opacity-10">Talk with expert</button>
            </div>
          </div>
        </div>
      </div>

      <div className="py-4 relative overflow-hidden bg-white">
        <div className="grid grid-cols-2 max-w-screen-lg mx-auto">
          <div className="py-20 bg-slate-100 relative before:absolute before:h-full before:w-screen before:bg-[#f7d0b6] before:top-0 before:right-0">
            <div className="relative z-20 pl-12">
              <h2 className="text-sky-950 font-black text-5xl leading-snug mb-10">WALL<br />PETROLEO</h2>
              <p className="text-sky-950 text-sm">
              Con un diseño realista, Wall Petróleo fue pensada para aplicarse en ambientes modernos y despojados. Su terminación simil cemento se caracteriza por su acabado brillante y su color petróleo. Esta cerámica está disponible en 33×45,3 y es ideal para un estilo contemporáneo, ideal para ser instalado en el interior de tu hogar.
              </p>
              <button className="mt-8 text-sky-950 uppercase py-3 text-sm px-10 border border-sky-950 hover:bg-white hover:bg-opacity-10">Talk with expert</button>
            </div>
          </div>
          <div className="w-full flex flex-col pl-16">
            <h2 className="text-[#64618C] font-bold text-2xl max-w-xs text-left mb-12 mt-10">Ultimos ingresos!</h2>
            <div className="h-full mt-auto overflow-hidden relative">
              <img src="https://ceramicasanlorenzo.com.ar/wp-content/uploads/2021/01/CSL-WALL-PETROLEO-IMAGEN.jpg.webp" className="h-full w-full object-contain" alt="" />
            </div>
          </div>
          </div>
        </div>
      
    </>
  );
}

export default Landing;
