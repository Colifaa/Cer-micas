import React from 'react';
import { Alert, AlertDescription, AlertIcon, AlertTitle, Box } from '@chakra-ui/react';

function AlertCreate({ isOpen, onClose }) {
  return (
    <Box
      position="fixed"
      top="50%"
      left="50%"
      transform="translate(-50%, -50%)"
      zIndex="9999" // Asegura que esté por encima de otros elementos
    >
      <Alert
        status="success"
        variant="subtle"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        borderRadius="lg" // Ajusta la curvatura de las esquinas
        boxShadow="lg" // Añade una sombra
        bg="blue.600" // Cambia el color de fondo
        color="white" // Cambia el color del texto
        onClose={onClose} // Agrega la función para cerrar el alert
      >
        <AlertIcon boxSize="40px" mr={0} />
        <AlertTitle fontSize="lg">Producto Creado Correctamente</AlertTitle>
        <AlertDescription maxWidth="sm">
          Tu producto ya es visible
        </AlertDescription>
      </Alert>
    </Box>
  );
}

export default AlertCreate;
