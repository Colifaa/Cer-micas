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
import React, { useState } from 'react';

function SignInUser() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();
    const [error, setError] = useState(null);
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
                throw error;
            }

            window.location.reload(); // Refrescar la página después de iniciar sesión
        } catch (error) {
            console.error("Error signing in:", error.message);
        }
    };

    return (
        <div>
            <button className="bg-white border-black rounded-lg p-2 mx-2" ref={btnRef} colorScheme='teal' onClick={onOpen}>
                Sign In
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
                                        <Heading fontSize={"4xl"}>Login to your account</Heading>
                                        <Text fontSize={"lg"} color={"gray.600"}>
                                            Create New Account{" "}
                                            <Link href="/signup" color={"blue.400"}>
                                                Register Here
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
                                                    <FormLabel>Email address</FormLabel>
                                                    <Input
                                                        value={email}
                                                        onChange={(e) => setEmail(e.target.value)}
                                                        type="email"
                                                        required
                                                    />
                                                </FormControl>
                                                <FormControl id="password">
                                                    <FormLabel>Password</FormLabel>
                                                    <Input
                                                        value={password}
                                                        onChange={(e) => setPassword(e.target.value)}
                                                        type="password"
                                                        required
                                                    />
                                                </FormControl>
                                                {error && <Text color="red.500">{error}</Text>}
                                                <Stack spacing={10}>
                                                    <Stack
                                                        direction={{ base: "column", sm: "row" }}
                                                        align={"start"}
                                                        justify={"space-between"}
                                                    >
                                                        <Checkbox>Remember me</Checkbox>
                                                        <Link color={"blue.400"}>Forgot password?</Link>
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
                                                        Sign in
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

        </div>

    );
}

export default SignInUser;
