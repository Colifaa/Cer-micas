import { useState } from 'react';
import { useRouter } from 'next/router';
import { Heading, Box, Input, Button, Text } from '@chakra-ui/react';
import supabase from '../../../lib/supabaseClient';

function ResetPasswordForm() {
  const router = useRouter();
  const [newPassword, setNewPassword] = useState('');
  const [confirmation, setConfirmation] = useState('');
  const [error, setError] = useState(null);

  const handlePasswordUpdate = async (e) => {
    e.preventDefault();
    if (newPassword !== confirmation) {
      setError('Passwords do not match');
      return;
    }

    try {
      const { error } = await supabase.auth.updateUser({
        password: newPassword
      });

      if (error) {
        throw error;
      }

      // Contraseña actualizada con éxito
      console.log('Password updated successfully');
      router.push('/'); // Redirigir al usuario a la página de inicio de sesión después de actualizar la contraseña
    } catch (error) {
      console.error('Error updating password:', error.message);
      // Manejar el error de actualización de contraseña aquí
      setError(error.message);
    }
  };

  return (
    <Box maxW="lg" mx="auto" my={10} bg="white" p={8} rounded="xl" boxShadow="md">
      <Heading as="h1" size="xl" mb={6}>Set New Password</Heading>
      <form onSubmit={handlePasswordUpdate}>
        <Box>
          <Text fontWeight="medium" color="slate.700" pb={2}>New Password</Text>
          <Input
            id="newPassword"
            name="newPassword"
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            variant="outline"
            borderWidth="1px"
            borderColor="slate.200"
            rounded="lg"
            px={3}
            py={2}
            focusBorderColor="slate.500"
            placeholder="Enter new password"
          />
        </Box>
        <Box mt={4}>
          <Text fontWeight="medium" color="slate.700" pb={2}>Confirm Password</Text>
          <Input
            id="confirmation"
            name="confirmation"
            type="password"
            value={confirmation}
            onChange={(e) => setConfirmation(e.target.value)}
            variant="outline"
            borderWidth="1px"
            borderColor="slate.200"
            rounded="lg"
            px={3}
            py={2}
            focusBorderColor="slate.500"
            placeholder="Confirm new password"
          />
        </Box>
        {error && <Text color="red.500">{error}</Text>}
        <Button
          type="submit"
          colorScheme="blue"
          mt={6}
          rounded="lg"
          px={8}
          py={3}
          fontWeight="medium"
          _hover={{ bg: "indigo.500" }}
        >
          Update Password
        </Button>
      </form>
    </Box>
  );
}

export default ResetPasswordForm;
