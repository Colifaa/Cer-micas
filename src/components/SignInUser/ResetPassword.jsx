import React, { useState } from 'react';
import { Heading, Box, Input, Button, Text } from '@chakra-ui/react';
import supabase from '../../../lib/supabaseClient';
import EmailAlert from './EmailAlert'; // Importa tu componente EmailAlert

function ResetPassword() {
  const [email, setEmail] = useState('');
  const [recoveryStatus, setRecoveryStatus] = useState(null); // Para almacenar el estado de la recuperación de contraseña
  const [emailError, setEmailError] = useState('');

  const validateEmail = () => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      setEmailError('Email is required');
    } else if (!emailPattern.test(email)) {
      setEmailError('Invalid email format');
    } else {
      setEmailError('');
    }
  };

  const handlePasswordRecovery = async (e) => {
    e.preventDefault(); // Evita que la página se recargue al enviar el formulario

    // Validar el correo electrónico antes de enviar la solicitud
    validateEmail();

    if (emailError) {
      return; // Si hay un error en el correo electrónico, no continuar con la solicitud
    }

    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email);
      if (error) {
        throw error;
      }

      // La recuperación de contraseña fue exitosa
      setRecoveryStatus('success');
    } catch (error) {
      console.error('Error resetting password:', error.message);
      // Manejar el error de recuperación de contraseña aquí
      setRecoveryStatus('error');
    }
  };

  return (
    <Box className="antialiased bg-slate-200" p={10}>
      <Box maxW="lg" mx="auto" my={10} bg="white" p={8} rounded="xl" boxShadow="md">
        <Heading as="h1" size="xl" mb={6}>Reset password</Heading>
        <Text color="slate.500" mb={6}>Fill up the form to reset the password</Text>

        <form onSubmit={handlePasswordRecovery} className="my-10">
          <Box>
            <Text fontWeight="medium" color="slate.700" pb={2}>Email address</Text>
            <Input
              id="email"
              name="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onBlur={validateEmail} // Validar el correo electrónico cuando el usuario deja el campo
              isInvalid={!!emailError} // Marcar el campo como inválido si hay un error
              errorBorderColor="red.500" // Color de borde para indicar un error
              variant="outline"
              rounded="lg"
              px={3}
              py={2}
              focusBorderColor="slate.500"
              placeholder="Enter email address"
            />
            {emailError && <Text color="red.500" fontSize="sm">{emailError}</Text>}
          </Box>

          <Button
            type="submit"
            colorScheme="blue"
            mt={6}
            rounded="lg"
            px={8}
            py={3}
            fontWeight="medium"
            _hover={{ bg: "indigo.500" }}
            disabled={!!emailError} // Deshabilitar el botón si hay un error en el correo electrónico
          >
            Reset password
          </Button>
        </form>

        {/* Mostrar el alerta cuando la recuperación de contraseña sea exitosa */}
        {recoveryStatus === 'success' && (
          <EmailAlert
            isOpen={true}
            onClose={() => setRecoveryStatus(null)}
            title="Check your email"
            message="Please check your email to reset your password."
          />
        )}

        {recoveryStatus === 'error' && <Text color="red.500">Error resetting password. Please try again later.</Text>}
      </Box>
    </Box>
  );
}

export default ResetPassword;
