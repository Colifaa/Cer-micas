import { Heading, Box, Input, Button, Text } from '@chakra-ui/react';
import { useState } from 'react';
import supabase from '../../../lib/supabaseClient';

function ResetPassword() {
  const [email, setEmail] = useState('');
  console.log(email,"email");
  const [recoveryStatus, setRecoveryStatus] = useState(null); // Para almacenar el estado de la recuperación de contraseña
  const [newPassword, setNewPassword] = useState('');

  const handlePasswordRecovery = async () => {
    try {
      const { data, error } = await supabase.auth.resetPasswordForEmail(email);
      console.log(data,"data");

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
              variant="outline"
              borderWidth="1px"
              borderColor="slate.200"
              rounded="lg"
              px={3}
              py={2}
              focusBorderColor="slate.500"
              placeholder="Enter email address"
            />
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
          >
            Reset password
          </Button>
        </form>

        {recoveryStatus === 'success' && (
          <form onSubmit={handlePasswordUpdate}>
            <Box mt={6}>
              <Text fontWeight="medium" color="slate.700" pb={2}>New password</Text>
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
         
          </form>
        )}
        
        {recoveryStatus === 'error' && <Text color="red.500">Error resetting password. Please try again later.</Text>}
      </Box>
    </Box>
  );
}

export default ResetPassword;
