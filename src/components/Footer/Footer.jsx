import React from 'react'

function Footer() {
  return (
    <footer className="bg-white-100/80 font-sans dark:bg-gray-900">
    <div className="container px-6 py-12 mx-auto">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
            <div className="sm:col-span-2">
                <h1 className="max-w-lg text-xl font-semibold tracking-tight text-gray-800 xl:text-2xl dark:text-white">Subscribite para recibir las ultimas noticias.</h1>

                <div className="flex flex-col mx-auto mt-6 space-y-3 md:space-y-0 md:flex-row">
                    <input id="email" type="text" className="px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300" placeholder="Email Address" />
            
                    <button className="w-full px-6 py-2.5 text-sm font-medium tracking-wider text-white transition-colors duration-300 transform md:w-auto md:mx-4 focus:outline-none bg-gray-800 rounded-lg hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80">
                        Subscribirse
                    </button>
                </div>
            </div>

            <div>
                <p className="font-semibold text-gray-800 dark:text-white">Informacion</p>

                <div className="flex flex-col items-start mt-5 space-y-2">
                    <a href="/" className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500">Inicio</a>
                    <a href="/allProducts" className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500">Productos</a>
                    <a href="/ambientes" className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500">Ambientaciones</a>
                </div>
            </div>

            <div>
                <p className="font-semibold text-gray-800 dark:text-white">Empresa</p>

                <div className="flex flex-col items-start mt-5 space-y-2">
                    <a href='/nosotros' className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500">Sobre nosotros</a>
                    <a href="/contacto" className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500">Contacto</a>
                    <a className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500">Medios de pagos</a>
                </div>
            </div>
        </div>
        
        <hr className="my-6 border-gray-200 md:my-8 dark:border-gray-700 h-2" />
        
        <div className="sm:flex sm:items-center sm:justify-between">
            <div className="flex flex-1 gap-4 hover:cursor-pointer">
                <img src="/images/logo.png" width="130" height="110" alt="" />
            </div>
            
            <div className="flex gap-4 hover:cursor-pointer">
                <img src="https://www.svgrepo.com/show/303114/facebook-3-logo.svg" width="30" height="30" alt="fb" />
                <a href='https://www.instagram.com/ceramicas_sanrafael/' target="_blank" rel="noopener noreferrer">
                    <img src="https://www.svgrepo.com/show/303145/instagram-2-1-logo.svg" width="30" height="30" alt="inst" />
                </a>
                <img src="https://www.svgrepo.com/show/28145/linkedin.svg" width="30" height="30" alt="in" />
                <img src="https://www.svgrepo.com/show/475692/whatsapp-color.svg" className="" width="30" height="30" alt="db" />
            </div>
        </div>
        <p className="font-sans p-8 text-start md:text-center md:text-lg md:p-4">© 2024 CERAMICAS SAN RAFAEL.  Desarrollado por <a href="https://www.instagram.com/web_desweby">DESWEBY</a>. Todos los derechos reservados.</p>
    </div>
</footer>
  )
}

export default Footer