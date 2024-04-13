import React, { useEffect, useState } from "react";
import { initFlowbite } from 'flowbite';
import SignInUser from "../SignInUser/SignInUser";
import supabase from "../../../lib/supabaseClient";
import {
    Avatar, AvatarBadge, Stack,
    Popover, PopoverTrigger, PopoverContent,
    PopoverArrow, PopoverCloseButton, PopoverHeader,
    PopoverBody,
    Menu, MenuButton,
    MenuList, MenuItem,
    MenuDivider,
    useColorModeValue,
    Button,
    Flex

} from "@chakra-ui/react";
import CartAlert from "../Cart/CartAlert";
import { useRouter } from 'next/router';

function Navbar() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [showAlert, setShowAlert] = useState(null); // Estado para mostrar el alert
    const [user, setUser] = useState("")
    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = () => {
        setIsOpen(true);
    };

    const handleClose = () => {
        setIsOpen(false);
    };

    const handleSignOut = async () => {
        try {
            const { error } = await supabase.auth.signOut();
            if (error) {
                throw error;
            }
            // Redirige al usuario al dashboard después de cerrar sesión
            window.location.reload();
        } catch (error) {
            console.error("Error signing out:", error.message);
        }
    };


    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };


    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const { data: user, error } = await supabase.auth.getUser(); // Obtener información del usuario actual
                if (error) {
                    throw error;
                }
                setUser(user);
            } catch (error) {
                console.error("Error fetching user data:", error.message);
            }
        };
        fetchUserData(); // Llamar a la función para obtener información del usuario al cargar el componente
    }, []);


    const handleClick = () => {
        // Verificar si el usuario no ha iniciado sesión
        if (!user.user?.id) {
          console.log("user", user);
          // Mostrar el alert si el usuario no ha iniciado sesión
          setShowAlert(true);
    
        } else {
          // Redirigir al carrito si el usuario ha iniciado sesión
          router.push('/carrito');
        }
      };

      const handleCloseAlert = () => {
        // Manejador para cerrar el alert
        setShowAlert(false);
      };
    

    return (
        <nav className="bg-white border-gray-200 dark:border-gray-600 dark:bg-gray-900 relative z-10">
            <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
                <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src="/images/logo.png" className="h-16" alt="Flowbite Logo" />
                </a>
                <button
                    data-collapse-toggle="mega-menu-full"
                    type="button"
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    aria-controls="mega-menu-full"
                    aria-expanded="false"
                >
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
                <div id="mega-menu-full" className="items-center justify-between font-medium hidden w-full md:flex md:w-auto md:order-1">
                    <ul className="flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">

                    <li>
                            <a href="/allProducts" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-
                            0 dark:text-white md:dark:hover:text-blue-
                            500 dark:hover:bg-gray-
                            700 dark:hover:text-blue-
                            500 md:dark:hover:bg-transparent dark:border-
                            gray-
                            700">Productos</a>
                        </li>
                        <li>
                            <a href="/ambientes" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-
                            0 dark:text-white md:dark:hover:text-blue-
                            500 dark:hover:bg-gray-
                            700 dark:hover:text-blue-
                            500 md:dark:hover:bg-transparent dark:border-
                            gray-
                            700">Ambientes</a>
                        </li>
                        <li>
                            <a href="/nosotros" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-
                            0 dark:text-white md:dark:hover:text-blue-
                            500 dark:hover:bg-gray-
                            700 dark:hover:text-blue-
                            500 md:dark:hover:bg-transparent dark:border-
                            gray-
                            700">Empresa</a>
                        </li>
                        <li>
                            <a href="/contacto" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-
                            0 dark:text-white md:dark:hover:text-blue-
                            500 dark:hover:bg-gray-
                            700 dark:hover:text-blue-
                            500 md:dark:hover:bg-transparent dark:border-
                            gray-
                            700">Contacto</a>
                        </li>
                        <li>
                        <Button
    
  variant="unstyled"
  border="none"
  borderRadius="50%" // Para hacer el botón redondo
  display="flex"
  justifyContent="center"
  alignItems="center"
  width="1.5em" // Ajusta el tamaño del botón aquí
  height="1.5em" // Ajusta el tamaño del botón aquí
  bg="#e62d31"
  color="#e62d31"
  fontWeight="600"
  fontSize="2em" // Ajustar el tamaño del icono aquí
  cursor="pointer"
  transition="background 450ms ease-in-out"
  _hover={{
    bgGradient: "linear(to-r, #D9693B, #E0012F)",
    boxShadow: "inset 0px 1px 0px 0px rgba(255, 255, 255, 0.4), inset 0px -4px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 4px rgba(255, 255, 255, 0.2), 0px 0px 180px 0px red",
    transform: "translateY(-2px)",
    "& .text": {
      color: "white",
    },
    "& .sparkle": {
      fill: "white",
      transform: "scale(1.2)",
    },
  }}
  onClick={handleClick}
>
  🛒
</Button>
                <CartAlert
        isOpen={showAlert}
        onClose={handleCloseAlert}
        title="Alerta"
        message="Debes iniciar sesión para ver tu carrito de compras."
      />
                </li>

                        {user ? (

                            <Flex alignContent="flex-end" >
                                <Stack direction="row" spacing={4} alignItems="center">
                            

                                    <Menu>
                                        <MenuButton as={isOpen} >
                                            <Avatar onClick={handleOpen} name={user?.user?.email} src='https://bit.ly/broken-link'>
                                                <AvatarBadge boxSize="1.25em" bg="green.500" />
                                            </Avatar>
                                        </MenuButton>
                                        <MenuList>
                                        <MenuItem><Button onClick={() => window.location.href = '/dashboard'}>Panel de control</Button></MenuItem>
                                            <MenuItem><Button onClick={handleSignOut}> Cerrar Sesion </Button></MenuItem>
                                        </MenuList>
                                    </Menu>
                                </Stack>
                            </Flex>

                        ) : (
                            <>
     
                                <SignInUser />
                         

                            </>
                        )}
                    </ul>



                </div>

            </div>

        </nav>
    );
}

export default Navbar;
