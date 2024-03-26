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
    bgImage="repeating-linear-gradient(45deg, hsla(64,83%,54%,0.05) 0px, hsla(64,83%,54%,0.05) 1px,transparent 1px, transparent 11px,hsla(64,83%,54%,0.05) 11px, hsla(64,83%,54%,0.05) 12px,transparent 12px, transparent 32px),repeating-linear-gradient(90deg, hsla(64,83%,54%,0.05) 0px, hsla(64,83%,54%,0.05) 1px,transparent 1px, transparent 11px,hsla(64,83%,54%,0.05) 11px, hsla(64,83%,54%,0.05) 12px,transparent 12px, transparent 32px),repeating-linear-gradient(0deg, hsla(64,83%,54%,0.05) 0px, hsla(64,83%,54%,0.05) 1px,transparent 1px, transparent 11px,hsla(64,83%,54%,0.05) 11px, hsla(64,83%,54%,0.05) 12px,transparent 12px, transparent 32px),repeating-linear-gradient(135deg, hsla(64,83%,54%,0.05) 0px, hsla(64,83%,54%,0.05) 1px,transparent 1px, transparent 11px,hsla(64,83%,54%,0.05) 11px, hsla(64,83%,54%,0.05) 12px,transparent 12px, transparent 32px),linear-gradient(90deg, rgb(41, 27, 158),rgb(249, 77, 212))"

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
      
   
          <Modal   size="4xl" isCentered isOpen={isOpen} onClose={onClose}>
            {overlay}
            <ModalContent   bgImage="linear-gradient(306deg, rgba(54, 54, 54, 0.05) 0%, rgba(54, 54, 54, 0.05) 33.333%,rgba(85, 85, 85, 0.05) 33.333%, rgba(85, 85, 85, 0.05) 66.666%,rgba(255, 255, 255, 0.05) 66.666%, rgba(255, 255, 255, 0.05) 99.999%),linear-gradient(353deg, rgba(81, 81, 81, 0.05) 0%, rgba(81, 81, 81, 0.05) 33.333%,rgba(238, 238, 238, 0.05) 33.333%, rgba(238, 238, 238, 0.05) 66.666%,rgba(32, 32, 32, 0.05) 66.666%, rgba(32, 32, 32, 0.05) 99.999%),linear-gradient(140deg, rgba(192, 192, 192, 0.05) 0%, rgba(192, 192, 192, 0.05) 33.333%,rgba(109, 109, 109, 0.05) 33.333%, rgba(109, 109, 109, 0.05) 66.666%,rgba(30, 30, 30, 0.05) 66.666%, rgba(30, 30, 30, 0.05) 99.999%),linear-gradient(189deg, rgba(77, 77, 77, 0.05) 0%, rgba(77, 77, 77, 0.05) 33.333%,rgba(55, 55, 55, 0.05) 33.333%, rgba(55, 55, 55, 0.05) 66.666%,rgba(145, 145, 145, 0.05) 66.666%, rgba(145, 145, 145, 0.05) 99.999%),linear-gradient(90deg, rgb(9, 201, 186),rgb(18, 131, 221))">
              <ModalHeader>Subir Producto</ModalHeader>
              <ModalCloseButton />
              <ModalBody >
          <CreateProductForm/>
              </ModalBody>
              <ModalFooter>
                <Button bgColor="red.400" onClick={onClose}>Close</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
          
        </>
      )
    }

export default ModalCreateProduct
