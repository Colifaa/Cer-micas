import React, { useState } from 'react';
import { useRouter } from 'next/router';
import supabase from "../../../lib/supabaseClient";
import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    Text,
    useColorModeValue,
    Image,
    HStack,
    Container,
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
} from "@chakra-ui/react";
import SignInAlert from "./SignInAlert";

function SignInUser() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const [isAlertOpen, setAlertOpen] = useState(false); // Nuevo estado para controlar la visibilidad del alerta
    const router = useRouter();
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const { user, error } = await supabase.auth.signInWithPassword({
                email,
                password,
            });

            if (error) {
                setError(error.message);
                setAlertOpen(true); // Mostrar el alerta si hay un error
                throw error;
            }

            window.location.reload(); // Refrescar la página después de iniciar sesión
        } catch (error) {
            console.error("Error signing in:", error.message);
        }
    };

    return (
        <div>
            <button className="bg-white border-black rounded-lg p-2 mx-2" ref={btnRef} onClick={onOpen}>
                Iniciar sesión
            </button>
            <Drawer
                size="xl"
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <Container maxW={"5xl"}>
                        <HStack>
                            <Box flex={1}>
                                <Image src="https://images.bewakoof.com/web/group-19-1617704502.png" />
                            </Box>
                            <Flex
                                minH={"100vh"}
                                align={"center"}
                                justify={"center"}
                                bg={useColorModeValue("gray.50", "gray.800")}
                            >
                                <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
                                    <Stack align={"center"}>
                                        <Heading fontSize={"4xl"}>Ingrese a su cuenta</Heading>
                                        <Text fontSize={"lg"} color={"gray.600"}>
                                            Crear una nueva cuenta{" "}
                                            <Link href="/signup" color={"blue.400"}>
                                                Registrar aquí
                                            </Link>
                                        </Text>
                                    </Stack>
                                    <form onSubmit={handleLogin}>
                                        <Box
                                            rounded={"lg"}
                                            bg={useColorModeValue("white", "gray.700")}
                                            boxShadow={"lg"}
                                            p={8}
                                        >
                                            <Stack spacing={4}>
                                                <FormControl id="email">
                                                    <FormLabel>Dirección de correo electrónico</FormLabel>
                                                    <Input
                                                        value={email}
                                                        onChange={(e) => setEmail(e.target.value)}
                                                        type="email"
                                                        required
                                                    />
                                                </FormControl>
                                                <FormControl id="password">
                                                    <FormLabel>Contraseña</FormLabel>
                                                    <Input
                                                        value={password}
                                                        onChange={(e) => setPassword(e.target.value)}
                                                        type="password"
                                                        required
                                                    />
                                                </FormControl>
                                                <Stack spacing={10}>
                                                    <Stack
                                                        direction={{ base: "column", sm: "row" }}
                                                        align={"start"}
                                                        justify={"space-between"}
                                                    >
                                                        <Checkbox>Acuérdate de mí</Checkbox>
                                                        <Link href="/ResetClave" color={"blue.400"}>¿Has olvidado tu contraseña?</Link>
                                                    </Stack>
                                                    <Button
                                                        type="submit"
                                                        bg={"blue.400"}
                                                        color={"white"}
                                                        _hover={{
                                                            bgImage: "linear-gradient(to right, #58aa50 ,#f09e06 )",
                                                        }}
                                                        bgImage={"linear-gradient(to right, #f09e06 , #fc490b )"}
                                                    >
                                                        Iniciar sesión
                                                    </Button>
                                                </Stack>
                                            </Stack>
                                        </Box>
                                    </form>
                                </Stack>
                            </Flex>
                        </HStack>
                    </Container>

                    <DrawerCloseButton />
                    <DrawerHeader>Create your account</DrawerHeader>

                    <DrawerBody>
                        <Input placeholder='Type here...' />
                    </DrawerBody>

                    <DrawerFooter>
                        <Button variant='outline' mr={3} onClick={onClose}>
                            Cancel
                        </Button>
                        <Button colorScheme='blue'>Save</Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>

            {/* Mostrar el alerta de inicio de sesión incorrecto */}
            <SignInAlert
                isOpen={isAlertOpen}
                onClose={() => setAlertOpen(false)}
                title="Contraseña o Mail incorrectos"
                message={error}
            />
        </div>
    );
}

export default SignInUser;
