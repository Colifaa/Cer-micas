import React from 'react';
import supabase from '../../../lib/supabaseClient';
import {
  Avatar,
  HStack,
  Menu,
  MenuButton,
  VStack,
  MenuDivider,
  MenuItem,
  MenuList,
  Box,
  Flex,
  Icon,
  Text,
  Stack,
  Image,
  Button,
  Heading,
  IconButton,
  useColorModeValue,
  Drawer,
  DrawerContent,
  DrawerOverlay,
  useDisclosure
} from '@chakra-ui/react';
import { FaBell } from 'react-icons/fa';
import { FiMenu } from 'react-icons/fi';
import { RiFlashlightFill } from 'react-icons/ri';
import { AiOutlineTeam, AiOutlineHome } from 'react-icons/ai';
import { BsFolder2, BsCalendarCheck } from 'react-icons/bs';
import StockTable from '../Tables/StockTable';
import { useRouter } from 'next/router';
import { FiChevronDown, FiBell } from 'react-icons/fi';
import WidgetTotal from '../Widgets/WidgetTotal';





export default function SideBar() {
  const router = useRouter();
  const { isOpen, onClose, onOpen } = useDisclosure();

  
const handleSignOut = async () => {
  try {
    const { error } = await supabase.auth.signOut();
    if (error) {
      throw error;
    }
    // Redirige al usuario a la página de inicio de sesión u otra página si lo deseas
    window.location.reload()
  } catch (error) {
    console.error("Error signing out:", error.message);
  }
};

  return (
    <Box as="section" bg={useColorModeValue('gray.50', 'gray.700')} minH="100vh">
      {/* Sidebar */}
      <SidebarContent display={{ base: 'none', md: 'unset' }} />
      <Drawer isOpen={isOpen} onClose={onClose} placement="left">
        <DrawerOverlay />
        <DrawerContent>
          <SidebarContent w="full" borderRight="none" />
        </DrawerContent>
      </Drawer>
      
      {/* Main Content */}
      <Box ml={{ base: 0, md: 60 }} transition=".3s ease">
      <Flex
  as="header"
  align="center"
  justifyContent={{ base: 'space-between', md: 'flex-end' }}
  w="full"
  px="4"
  borderBottomWidth="1px"
  borderBottomColor="green"
  borderColor={useColorModeValue('inherit', 'gray.700')}
  bg={useColorModeValue('white', 'gray.800')}
  boxShadow="sm"
  h="24"
>
  <IconButton
    aria-label="Menu"
    display={{ base: 'inline-flex', xl: 'none' }}
    onClick={onOpen}
    icon={<FiMenu />}
    size="xl"
  />
  <Flex align="center">
    {/* Aquí puedes integrar el código proporcionado para el menú desplegable de usuario */}
    <HStack spacing={{ base: '0', md: '6' }}>
      <IconButton size="lg" variant="ghost" aria-label="open menu" icon={<FiBell />} />
      <Flex alignItems={'center'}>
        <Menu>
          <MenuButton py={2} transition="all 0.3s" _focus={{ boxShadow: 'none' }}>
            <HStack>
              <Avatar
                size={'md'}
                src={
                  'https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                }
              />
              <VStack
                display={{ base: 'none', md: 'flex' }}
                alignItems="flex-start"
                spacing="1px"
                ml="2"
              >
                <Text fontSize="xl">Justina Clark</Text>
                <Text fontSize="xl" color="gray.600">
                  Admin
                </Text>
              </VStack>
              <Box display={{ base: 'none', md: 'flex' }}>
                <FiChevronDown />
              </Box>
            </HStack>
          </MenuButton>
          <MenuList
            bg={useColorModeValue('white', 'gray.900')}
            borderColor={useColorModeValue('gray.200', 'gray.700')}
          >
            <MenuItem>Profile</MenuItem>
            <MenuItem>Settings</MenuItem>
            <MenuItem>Billing</MenuItem>
            <MenuDivider />
            <MenuItem onClick={handleSignOut}>Sign out</MenuItem>
          </MenuList>
        </Menu>
      </Flex>
    </HStack>
    {/* Fin del código del menú desplegable de usuario */}
  </Flex>
</Flex>
        <StockTable />
     
     
      </Box>
          


    </Box>
  );
}

const SidebarContent = ({ ...props }) => (
  <Box
    as="nav"
    pos="fixed"
    top="0"
    left="0"
    zIndex="sticky"
    h="full"
    pb="10"
    overflowX="hidden"
    overflowY="auto"
    bg={useColorModeValue('white', 'gray.800')}
    borderColor={useColorModeValue('inherit', 'gray.700')}
    borderRightWidth="1px"
    w="60"
    borderLeftRadius="2"
    borderRightColor="red"

    {...props}
  >
    <Flex px="4" py="5" align="center">
      <Icon as={RiFlashlightFill} h={8} w={8} />
      <Text
        fontSize="2xl"
        ml="2"
        color={useColorModeValue('brand.500', 'white')}
        fontWeight="semibold"
      >
     LOGO CERAMICAS
      </Text>
    </Flex>
    <Flex direction="column" as="nav" fontSize="2xl" color="gray.600" aria-label="Main Navigation">
    <Flex mt="5"> 
      <NavItem icon={AiOutlineHome}>Dashboard</NavItem>
      </Flex>
      <Flex mt="5"> 
      <NavItem icon={AiOutlineTeam}>Team</NavItem>
      </Flex>
      <Flex mt="5"> 
      <NavItem icon={BsFolder2}>Projects</NavItem>
      </Flex>
      <Flex mt="5"> 
      <NavItem icon={BsCalendarCheck}>Calendar</NavItem>
      </Flex>
      <Flex mt="5"> 
      <WidgetTotal/>
    </Flex>
    </Flex>
   
  </Box>
  
);

const NavItem = (props) => {
  const color = useColorModeValue('gray.600', 'blue.300');
  const { icon, children } = props;

  return (
    <Flex
      align="center"
      px="2"
      py="4"
      cursor="pointer"
      role="group"
      fontWeight="semibold"
      transition=".15s ease"
      color={useColorModeValue('inherit', 'green.400')}
      _hover={{
        bg: useColorModeValue('red.100', 'red.900'),
        color: useColorModeValue('gray.900', 'gray.200')
      }}
    >
      {icon && (
        <Icon
          mx="2"
          boxSize="7"
          _groupHover={{
            color: color
          }}
          as={icon}
        />
      )}
      {children}
      
    </Flex>
    
  );
};
