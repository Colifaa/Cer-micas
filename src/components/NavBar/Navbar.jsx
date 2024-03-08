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


function Navbar() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const [user, setUser] = useState("")

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




    return (
        <nav className="bg-white border-gray-200 dark:border-gray-600 dark:bg-gray-900 relative z-10">
            <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
                <a href="https://flowbite.com" className="flex items-center space-x-3 rtl:space-x-reverse">
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
                            <a href="/" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-
                            0 dark:text-white md:dark:hover:text-blue-
                            500 dark:hover:bg-gray-
                            700 dark:hover:text-blue-
                            500 md:dark:hover:bg-transparent dark:border-
                            gray-
                            700"
                                aria-current="
                            page">Inicio</a>
                        </li>
                        <li>
                            <button
                                id="
                                mega-menu-full-dropdown-button"
                                data-collapse-toggle="
                                mega-menu-full-dropdown"
                                onClick={toggleDropdown}
                                className="
                                flex items-center  py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-
                            0 dark:text-white md:dark:hover:text-blue-
                            500 dark:hover:bg-gray-
                            700 dark:hover:text-blue-
                            500 md:dark:hover:bg-transparent dark:border-
                            gray-
                            700"
                            >
                                Productos
                                <svg className="
                                w-
                                2.5 h-
                                2.5 ms-
                                2.5" aria-hidden="
                                true" xmlns="
                                http://www.w3.org/2000/svg" fill="
                                none" viewBox="
                                0 0 10 6">
                                    <path stroke="
                                    currentColor" strokeLinecap="
                                    round" strokeLinejoin="
                                    round" strokeWidth="
                                    2" d="
                                    m1
                                    1
                                    4
                                    4
                                    4-
                                    4"/>
                                </svg>
                            </button>
                            {isDropdownOpen && (
                                <div id="
                                mega-menu-full-dropdown"
                                    className="
                                     absolute mt-
                                     1 border-gray-
                                     200 shadow-sm bg-
                                     gray-
                                     50 md:bg-white border-y dark:bg-gray-
                                     800 dark:border-gray-
                                     600"
                                >
                                    <div className="grid max-w-screen-xl px-4 py-5 mx-auto text-gray-900 dark:text-white sm:grid-cols-2 md:px-6">
                                        <ul>
                                            <li>
                                                <a href="#" className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                                                    <div className="font-semibold">Online Stores</div>
                                                    <span className="text-sm text-gray-500 dark:text-gray-400">Connect with third-party tools that you're already using.</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                                                    <div className="font-semibold">Segmentation</div>
                                                    <span className="text-sm text-gray-500 dark:text-gray-400">Connect with third-party tools that you're already using.</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                                                    <div className="font-semibold">Marketing CRM</div>
                                                    <span className="text-sm text-gray-500 dark:text-gray-400">Connect with third-party tools that you're already using.</span>
                                                </a>
                                            </li>
                                        </ul>
                                        <ul>
                                            <li>
                                                <a href="#" className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                                                    <div className="font-semibold">Online Stores</div>
                                                    <span className="text-sm text-gray-500 dark:text-gray-400">Connect with third-party tools that you're already using.</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                                                    <div className="font-semibold">Segmentation</div>
                                                    <span className="text-sm text-gray-500 dark:text-gray-400">Connect with third-party tools that you're already using.</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                                                    <div className="font-semibold">Marketing CRM</div>
                                                    <span className="text-sm text-gray-500 dark:text-gray-400">Connect with third-party tools that you're already using.</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            )}
                        </li>
                        <li>
                            <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-
                            0 dark:text-white md:dark:hover:text-blue-
                            500 dark:hover:bg-gray-
                            700 dark:hover:text-blue-
                            500 md:dark:hover:bg-transparent dark:border-
                            gray-
                            700">Ambientes</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-
                            0 dark:text-white md:dark:hover:text-blue-
                            500 dark:hover:bg-gray-
                            700 dark:hover:text-blue-
                            500 md:dark:hover:bg-transparent dark:border-
                            gray-
                            700">Empresa</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-
                            0 dark:text-white md:dark:hover:text-blue-
                            500 dark:hover:bg-gray-
                            700 dark:hover:text-blue-
                            500 md:dark:hover:bg-transparent dark:border-
                            gray-
                            700">Contacto</a>
                        </li>

                        {user ? (

                            <Flex alignContent="flex-end" bgColor="red">
                                <Stack direction="row" spacing={4} alignItems="center">


                                    <Menu>
                                        <MenuButton as={isOpen} >
                                            <Avatar onClick={handleOpen} name={user?.user?.email} src='https://bit.ly/broken-link'>
                                                <AvatarBadge boxSize="1.25em" bg="green.500" />
                                            </Avatar>
                                        </MenuButton>
                                        <MenuList>
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
