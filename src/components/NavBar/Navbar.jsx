import {
  Box,
  Flex,
  Avatar,
  HStack,
  Button,
  Text,
  Link,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Stack,
  Icon,
  IconButton,
  useDisclosure,
  useColorModeValue,
} from '@chakra-ui/react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose, AiTwotoneThunderbolt } from 'react-icons/ai';
import { BiChevronDown } from 'react-icons/bi';
import { MdTimeline } from 'react-icons/md';
import { BsBook } from 'react-icons/bs';
import { FiSun } from 'react-icons/fi';

const navLinks = [
  { name: 'About', path: '#' },
  { name: 'Blog', path: '#' },
  { name: 'Features', path: '#' },
];

const dropdownLinks = [
  {
    name: 'Projects',
    path: '#',
    icon: MdTimeline,
  },
  {
    name: 'Tech Stack',
    path: '#',
    icon: AiTwotoneThunderbolt,
  },
  {
    name: 'Open Source',
    path: '#',
    icon: BsBook,
  },
];

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const menuProps = {
    bg: useColorModeValue('gray.200', 'gray.700'),
    color: useColorModeValue('blue.500', 'blue.200'),
  };

  return (
    <Box px={4} boxShadow="lg" width="100%">
      <Flex h={16} alignItems="center" justifyContent="space-between" maxW={800} mx="auto">
        <IconButton
          size="md"
          icon={isOpen ? <AiOutlineClose /> : <GiHamburgerMenu />}
          aria-label="Open Menu"
          display={['inherit', 'inherit', 'none']}
          onClick={isOpen ? onClose : onOpen}
        />
        <HStack spacing={8} alignItems="center">
          <Avatar
            href="#"
            as={Link}
            size="sm"
            showBorder={true}
            borderColor="blue.400"
            rounded="full"
            src="https://avatars2.githubusercontent.com/u/37842853?v=4"
          />
          <HStack as="nav" spacing={1} display={{ base: 'none', md: 'flex' }} alignItems="center">
            {navLinks.map((link, index) => (
              <NavLink key={index} {...link} onClose={onClose} />
            ))}
            <Menu autoSelect={false} isLazy>
              {({ isOpen, onClose }) => (
                <>
                  <MenuButton
                    as={Button}
                    variant="ghost"
                    size="sm"
                    px={3}
                    py={1}
                    lineHeight="inherit"
                    fontSize="1em"
                    fontWeight="normal"
                    rounded="md"
                    height="auto"
                    _hover={{ color: 'blue.400', bg: menuProps.bg }}
                  >
                    <Flex alignItems="center">
                      <Text>Links</Text>
                      <Icon
                        as={BiChevronDown}
                        h={5}
                        w={5}
                        ml={1}
                        transition="all .25s ease-in-out"
                        transform={isOpen ? 'rotate(180deg)' : ''}
                      />
                    </Flex>
                  </MenuButton>
                  <MenuList
                    zIndex={5}
                    bg={useColorModeValue('rgb(255, 255, 255)', 'rgb(26, 32, 44)')}
                    border="none"
                    boxShadow={useColorModeValue(
                      '2px 4px 6px 2px rgba(160, 174, 192, 0.6)',
                      '2px 4px 6px 2px rgba(9, 17, 28, 0.6)'
                    )}
                  >
                    {dropdownLinks.map((link, index) => (
                      <MenuLink key={index} {...link} onClose={onClose} />
                    ))}
                  </MenuList>
                </>
              )}
            </Menu>
          </HStack>
        </HStack>

        <IconButton aria-label="Color Switcher" icon={<FiSun />} />
      </Flex>

      {isOpen ? (
        <Box pb={4} display={['inherit', 'inherit', 'none']}>
          <Stack as="nav" spacing={2}>
            {navLinks.map((link, index) => (
              <NavLink key={index} {...link} onClose={onClose} />
            ))}
          </Stack>
        </Box>
      ) : null}
      
    </Box>
    
  );
}

const NavLink = ({ name, path, onClose }) => {
  const link = {
    bg: useColorModeValue('gray.200', 'gray.700'),
    color: useColorModeValue('blue.500', 'blue.200'),
  };

  return (
    <Link
      href={path}
      px={3}
      py={1}
      lineHeight="inherit"
      rounded="md"
      _hover={{
        textDecoration: 'none',
        bg: link.bg,
        color: link.color,
      }}
      onClick={() => onClose()}
    >
      {name}
    </Link>
  );
};

const MenuLink = ({ name, path, icon: Icon, onClose }) => {
  return (
    <Link href={path} onClick={() => onClose()}>
      <MenuItem _hover={{ color: 'blue.400', bg: useColorModeValue('gray.200', 'gray.700') }}>
        <HStack>
          <Icon size={18} color="blue.400" />
          <Text>{name}</Text>
        </HStack>
      </MenuItem>
      <Box pos="relative" w="100vw" h="100vh" overflow="hidden">
      <Box
        pos="absolute"
        top="0"
        left="0"
        minH="full"
        w="full"
        bg="black"
        opacity="0.3"
        zIndex="10"
        _before={{
          content: '""',
          position: "absolute",
          top: "0",
          left: "0",
          minH: "full",
          w: "full",
          bg: "black",
          opacity: "0.3",
          zIndex: "10",
        }}
      />
      <Image
        src="https://i.pinimg.com/originals/80/55/4f/80554f712f15b26081910aa3e3765b81.jpg"
        pos="absolute"
        top="0"
        left="0"
        minH="full"
        className="ob"
        alt=""
      />
      <Flex
        pos="relative"
        zIndex="20"
        maxW="screen-lg"
        mx="auto"
        gridTemplateColumns="repeat(12, 1fr)"
        h="full"
        alignItems="center"
      >
        <Box gridColumn="span 6">
          <Text
            textTransform="uppercase"
            color="white"
            fontSize="xs"
            fontWeight="bold"
            mb="2"
            display="block"
          >
            WE ARE EXPERTS
          </Text>
          <Text color="white" fontWeight="extrabold" fontSize="5xl" mb="8">
            Finpoint provides Financial Consulting in different ways
          </Text>
          <Text color="stone.100" fontSize="base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Text>
          <Button
            mt="8"
            color="white"
            textTransform="uppercase"
            py="4"
            fontSize="base"
            fontWeight="light"
            px="10"
            border="1px"
            borderColor="white"
            _hover={{
              bg: "white",
              bgOpacity: "0.1",
            }}
          >
            Get started
          </Button>
        </Box>
      </Flex>
    </Box>
    </Link>
  );
};