import React from 'react'

import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
    Stack,
    Box,
    Text,
  } from '@chakra-ui/react'
import CreateProductForm from './CreateProductForm'
  

function ModalCreateProduct() {

    const OverlayOne = () => (
        <ModalOverlay
          bg='blackAlpha.300'
          backdropFilter='blur(10px) hue-rotate(90deg)'
        />
      )
    
      const { isOpen, onOpen, onClose } = useDisclosure()
      const [overlay, setOverlay] = React.useState(<OverlayOne />)


    return (
        <>
        <Stack direction='column'>
  <Box
    display='flex'
    alignItems='center'
    justifyContent='center'
    width='100%'
    bgSize="cover"
    py={12}
    bgImage="url('https://bit.ly/2Z4KKcF')"
    bgPosition='center'
    bgRepeat='no-repeat'
    mb={2}
  >
    
 
          <Button
            onClick={() => {
              setOverlay(<OverlayOne />)
              onOpen()
            }}
            variant="unstyled"
            border="none"
            width="15em"
            height="5em"
            borderRadius="3em"
            display="flex"
            justifyContent="center"
            alignItems="center"
            gap="12px"
            bg="#1C1A1C"
            color="#AAAAAA"
            fontWeight="600"
            fontSize="medium"
            cursor="pointer"
            transition="background 450ms ease-in-out"
            _hover={{
              bgGradient: "linear(to-r, #A47CF3, #683FEA)",
              boxShadow: "inset 0px 1px 0px 0px rgba(255, 255, 255, 0.4), inset 0px -4px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 4px rgba(255, 255, 255, 0.2), 0px 0px 180px 0px #9917FF",
              transform: "translateY(-2px)",
              "& .text": {
                color: "white",
              },
              "& .sparkle": {
                fill: "white",
                transform: "scale(1.2)",
              },
            }}
          >
           Crear Producto
          </Button>
          </Box>
          </Stack>
      
          <Modal size="6xl" isCentered isOpen={isOpen} onClose={onClose}>
            {overlay}
            <ModalContent>
              <ModalHeader>Modal Title</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
          <CreateProductForm/>
              </ModalBody>
              <ModalFooter>
                <Button onClick={onClose}>Close</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </>
      )
    }

export default ModalCreateProduct
