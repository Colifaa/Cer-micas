import React from 'react';
import { AlertDialog, AlertDialogOverlay, AlertDialogContent, AlertDialogHeader, AlertDialogBody, AlertDialogFooter, Button } from '@chakra-ui/react';

function AlertEdit({ isOpen, onClose, title, message }) {
  return (
    <AlertDialog isOpen={isOpen} onClose={onClose}>
      <AlertDialogOverlay>
        <AlertDialogContent>
          <AlertDialogHeader fontSize="lg" fontWeight="bold">
            {title}
          </AlertDialogHeader>
          <AlertDialogBody>
            {message}
          </AlertDialogBody>
          <AlertDialogFooter>
            <Button onClick={onClose} colorScheme="blue">
              Cerrar
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
}

export default AlertEdit;
