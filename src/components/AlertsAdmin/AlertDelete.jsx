import React from 'react';
import { AlertDialog, AlertDialogOverlay, AlertDialogContent, AlertDialogHeader, AlertDialogBody, AlertDialogFooter, Button } from '@chakra-ui/react';

function AlertDelete({ isOpen, onClose, onConfirm, title, message }) {
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
            <Button onClick={onConfirm} colorScheme="red">
              Sí
            </Button>
            <Button onClick={onClose} ml={3}>
              Cancelar
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
}

export default AlertDelete;
