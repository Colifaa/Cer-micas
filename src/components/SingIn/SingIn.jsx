import { useRouter } from 'next/router';
import { useEffect, useState } from "react";
import supabase from "../../../lib/supabaseClient";
import SideBar from "../SideBar/SideBar"
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
} from "@chakra-ui/react";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userId, setUserId] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false); 
  const router = useRouter();
  
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
  
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const { data: { user } } = await supabase.auth.getUser();

        if (user) {
          setUserId(user.id);

          const { data: userRolesData } = await supabase
            .from('user_roles')
            .select('*')
            .eq('user_id', user.id);

          const adminRole = userRolesData.find(role => role.role_id === 1);

          if (adminRole) {
            setIsAdmin(true); 
          }
        }
      } catch (error) {
        console.error("Error fetching user data:", error.message);
      }
    };

    fetchUserData();
  }, []);


  return (
    <div>
      {isAdmin ? ( // Renderiza SideBar si isAdmin es true
        <SideBar />
      ) : (
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
      )}
    </div>
  );
}

export default SignIn;
