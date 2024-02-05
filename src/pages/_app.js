// Importa ChakraProvider y CSS Reset
import { ChakraProvider, CSSReset } from "@chakra-ui/react";
import '@/styles/globals.css';

function App({ Component, pageProps }) {
  return (
    <ChakraProvider>
      {/* Incluye CSSReset para normalizar estilos */}
      <CSSReset />
      {/* Renderiza el componente principal */}
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default App;
