
import React from 'react';
import Image from 'next/image';


const About = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col items-center">
        <div className="mb-4">
          <Image
            src="/images/local.png"
            alt="Profile Picture"
            width={200}
            height={200}
            className="rounded-full"
          />
        </div>
        <div className="mb-4">
          <h1 className="text-2xl font-bold">Bruno Oscar Ambrosini</h1>
          <p className="text-gray-600">Dueño</p>
        </div>
      </div>
      
      <div className="my-8">
        <h2 className="text-xl font-semibold mb-4">Sobre Mí</h2>
        <p className="text-gray-700">
          Aquí puedes escribir un breve párrafo sobre ti, tus habilidades, experiencia y lo que te apasiona en tu trabajo.
        </p>
      </div>
      
      <div className="my-8">
        <h2 className="text-xl font-semibold mb-4">Video de Presentación</h2>
        <div className="relative h-0" style={{ paddingBottom: '56.25%' }}>
          <iframe
            src="https://www.youtube.com/embed/VIDEO_ID"
            className="absolute top-0 left-0 w-full h-full"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default About;
