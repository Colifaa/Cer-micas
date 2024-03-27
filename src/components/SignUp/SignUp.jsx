import React, { useState } from 'react';
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import supabase from '../../../lib/supabaseClient';
import { useRouter } from 'next/router';
import Footer from '../Footer/Footer';
import Navbar from '../NavBar/Navbar';
import AlertSignUp from './AlertSignUp';


function SignUp() {

  const [isOpen, setIsOpen] = useState(false);
  const onClose = () => setIsOpen(false);
  const onOpen = () => setIsOpen(true);

  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };
  const handleSignUp = async () => {
    try {
      if (!supabase) {
        console.error('Supabase client is not defined');
        return;
      }

      const { user, error } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
      });

      if (error) {
        console.error('Error during signup:', error);
        return;
      }

      // Si no hay error, mostrar la alerta
      onOpen();
    } catch (error) {
      console.error('Error during signup:', error);
    }
  };


  return (
    <>
    <Navbar/>

    <AlertSignUp
        isOpen={isOpen}
        onClose={onClose}
        title="Confirmación de Registro"
        message="Se ha enviado un correo electrónico a tu dirección. Por favor, verifica tu cuenta haciendo clic en el enlace de confirmación."
      />
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"} textAlign={"center"}>
            Sign up
          </Heading>
          <Text fontSize={"lg"} color={"gray.600"}>
            Registrate aqui para poder realizar tus compras ✌️
          </Text>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <HStack>
              <Box>
                <FormControl id="firstName" isRequired>
                  <FormLabel>Nombre</FormLabel>
                  <Input type="text" id="firstName" onChange={handleInputChange} />
                </FormControl>
              </Box>
              <Box>
                <FormControl id="lastName">
                  <FormLabel>Apellido</FormLabel>
                  <Input type="text" id="lastName" onChange={handleInputChange} />
                </FormControl>
              </Box>
            </HStack>
            <FormControl id="email" isRequired>
              <FormLabel>Email</FormLabel>
              <Input type="email" id="email" onChange={handleInputChange} />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Contraseña</FormLabel>
              <InputGroup>
                <Input type={showPassword ? "text" : "password"} id="password" onChange={handleInputChange} />
                <InputRightElement h={"full"}>
                  <Button
                    variant={"ghost"}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }
                  >
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button
                loadingText="Submitting"
                size="lg"
                bg={"blue.400"}
                color={"white"}
                onClick={handleSignUp}
                _hover={{
                  bg: "blue.500",
                }}
              >
               Registrarse
              </Button>
            </Stack>
            <Stack pt={6}>
            <Text align={"center"}>
            ¿Ya eres usuario? 
  <Button 
    colorScheme="blue" 
    variant="link" 
    onClick={() => router.push("https://ceramicas.vercel.app/")}
  >
    Login
  </Button>
</Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    
    </Flex>
  
       <Footer />
    </>
  );
}

export default SignUp;
