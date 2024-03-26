import React, { useState } from 'react';
import supabase from '../../../lib/supabaseClient';

import {
    Button,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Stack,
    useColorModeValue,
    HStack,
    Avatar,
    AvatarBadge,
    IconButton,
    Center,
    Text,
    Box
} from '@chakra-ui/react'
import { SmallCloseIcon } from '@chakra-ui/icons'
import Alerta from '../AlertsAdmin/AlertCreate';


function CreateProductForm() {

    const [mostrarAlerta, setMostrarAlerta] = useState(false); // Estado para controlar la visibilidad de la alerta
    const [productData, setProductData] = useState({
        name: '',
        img: '',
        detail: '',
        precio: '',
        medidas: '',
        piezas: '',
        cantCajas: '',
        tono: '',
        material: '',
        ambientacion: '',
        uso: '',
        calidad: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProductData({ ...productData, [name]: value });
    };
   const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data, error } = await supabase.from('products').insert([productData]);
            if (error) {
                throw error;
            }
            console.log('Producto insertado correctamente:', data);
            setMostrarAlerta(true); // Cuando se envíe correctamente el formulario, muestra la alerta
            setTimeout(() => {
                window.location.reload(); // Recargar la página después de 2 segundos
            }, 3000);
            // Aquí podrías redirigir al usuario a otra página o realizar alguna otra acción
        } catch (error) {
            console.error('Error al insertar el producto:', error.message);
        }
    };


    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)

    const handleImageChange = (e) => {
        const file = e.target.files[0]; // Selecciona el primer archivo de la lista
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setProductData({ ...productData, img: reader.result }); // Guarda la URL de la imagen en el estado
            };
            reader.readAsDataURL(file); // Lee el contenido del archivo como una URL
        }
    };

    const handleRemoveImage = () => {
        setProductData({ ...productData, img: '' });
    };

    return (
        <Flex
        
            minH={'100vh'}
            align={'center'}
            justify={'center'}
            bgImage="linear-gradient(306deg, rgba(54, 54, 54, 0.05) 0%, rgba(54, 54, 54, 0.05) 33.333%,rgba(85, 85, 85, 0.05) 33.333%, rgba(85, 85, 85, 0.05) 66.666%,rgba(255, 255, 255, 0.05) 66.666%, rgba(255, 255, 255, 0.05) 99.999%),linear-gradient(353deg, rgba(81, 81, 81, 0.05) 0%, rgba(81, 81, 81, 0.05) 33.333%,rgba(238, 238, 238, 0.05) 33.333%, rgba(238, 238, 238, 0.05) 66.666%,rgba(32, 32, 32, 0.05) 66.666%, rgba(32, 32, 32, 0.05) 99.999%),linear-gradient(140deg, rgba(192, 192, 192, 0.05) 0%, rgba(192, 192, 192, 0.05) 33.333%,rgba(109, 109, 109, 0.05) 33.333%, rgba(109, 109, 109, 0.05) 66.666%,rgba(30, 30, 30, 0.05) 66.666%, rgba(30, 30, 30, 0.05) 99.999%),linear-gradient(189deg, rgba(77, 77, 77, 0.05) 0%, rgba(77, 77, 77, 0.05) 33.333%,rgba(55, 55, 55, 0.05) 33.333%, rgba(55, 55, 55, 0.05) 66.666%,rgba(145, 145, 145, 0.05) 66.666%, rgba(145, 145, 145, 0.05) 99.999%),linear-gradient(90deg, rgb(9, 201, 186),rgb(18, 131, 221))"

        >
            
            <Stack

                spacing={4}
                w="full"
                maxW={'6xl'}
    
                rounded={'xl'}
                boxShadow={'lg'}
                p={6}
                my={12}>
                  
                <Heading textAlign="center" lineHeight={1.1} fontSize={{ base: '2xl', sm: '3xl' }}>
                    Agregar Nuevos Productos
                </Heading>

            

                <FormControl id="userName">
                    
                    <Stack>
                        <Center>
                            
                            <label htmlFor="image-upload" style={{ cursor: 'pointer' }}>
                                <Avatar mt="20px" size="2xl" src={productData.img}>
                                    <AvatarBadge
                                        as={IconButton}
                                        size="md"
                                        rounded="full"
                                        top="-10px"
                                        colorScheme="red"
                                        aria-label="remove Image"
                                        icon={<SmallCloseIcon />}
                                        onClick={handleRemoveImage}
                                    />
                                </Avatar>
                                <input
                                    id="image-upload"
                                    type="file"
                                    accept="image/*"
                                    style={{ display: 'none' }}
                                    onChange={handleImageChange}
                                />
                            </label>
                        </Center>
                        <Text textAlign="center" lineHeight={3.1} fontSize={{ base: 'xl', sm: '3xl' }}>Selecciona una imagen para tu producto</Text>
                     
                    </Stack>
                    <FormControl id="name" isRequired>
                    <FormLabel>Name</FormLabel>
                    <Input
                     color="white"
                     fontSize="0.9rem"
                     backgroundColor="transparent"
                     width="100%"
                     boxSizing="border-box"
                     paddingInline="0.5em"
                     paddingBlock="0.7em"
                     border="none"
                     borderBottom="var(--border-height) solid var(--border-before-color)"
                     boxShadow="0 2px 4px rgba(0, 0, 0, 0.1)"
                        placeholder="Product Name"
                        type="text"
                        name="name"
                        value={productData.name}
                        onChange={handleChange}
                    />
                </FormControl>
                </FormControl>
                <FormControl id="detail" isRequired>
                    <FormLabel>Detail</FormLabel>
                    <Input
                     color="white"
                     fontSize="0.9rem"
                     backgroundColor="transparent"
                     width="100%"
                     boxSizing="border-box"
                     paddingInline="0.5em"
                     paddingBlock="0.7em"
                     border="none"
                     borderBottom="var(--border-height) solid var(--border-before-color)"
                     boxShadow="0 2px 4px rgba(0, 0, 0, 0.1)"
                        placeholder="Product Detail"
                        type="text"
                        name="detail"
                        value={productData.detail}
                        onChange={handleChange}
                    />
                </FormControl>
                <FormControl id="precio" isRequired>
                    <FormLabel>Precio</FormLabel>
                    <Input
                  color="white"
                  fontSize="0.9rem"
                  backgroundColor="transparent"
                  width="100%"
                  boxSizing="border-box"
                  paddingInline="0.5em"
                  paddingBlock="0.7em"
                  border="none"
                  borderBottom="var(--border-height) solid var(--border-before-color)"
                  boxShadow="0 2px 4px rgba(0, 0, 0, 0.1)"
                        placeholder="Precio"
                        type="number"
                        name="precio"
                        value={productData.precio}
                        onChange={handleChange}
                    />
                </FormControl>
                <FormControl id="medidas" isRequired>
                    <FormLabel>Medidas</FormLabel>
                    <Input
                     color="white"
                     fontSize="0.9rem"
                     backgroundColor="transparent"
                     width="100%"
                     boxSizing="border-box"
                     paddingInline="0.5em"
                     paddingBlock="0.7em"
                     border="none"
                     borderBottom="var(--border-height) solid var(--border-before-color)"
                     boxShadow="0 2px 4px rgba(0, 0, 0, 0.1)"
                        placeholder="Medidas"
                        type="text"
                        name="medidas"
                        value={productData.medidas}
                        onChange={handleChange}
                    />
                </FormControl>
                <FormControl id="piezas" isRequired>
                    <FormLabel>Piezas</FormLabel>
                    <Input
                     color="white"
                     fontSize="0.9rem"
                     backgroundColor="transparent"
                     width="100%"
                     boxSizing="border-box"
                     paddingInline="0.5em"
                     paddingBlock="0.7em"
                     border="none"
                     borderBottom="var(--border-height) solid var(--border-before-color)"
                     boxShadow="0 2px 4px rgba(0, 0, 0, 0.1)"
                        placeholder="Piezas"
                        type="number"
                        name="piezas"
                        value={productData.piezas}
                        onChange={handleChange}
                    />
                </FormControl>
                <FormControl id="cantCajas" isRequired>
                    <FormLabel>Cantidad de Cajas</FormLabel>
                    <Input
                     color="white"
                     fontSize="0.9rem"
                     backgroundColor="transparent"
                     width="100%"
                     boxSizing="border-box"
                     paddingInline="0.5em"
                     paddingBlock="0.7em"
                     border="none"
                     borderBottom="var(--border-height) solid var(--border-before-color)"
                     boxShadow="0 2px 4px rgba(0, 0, 0, 0.1)"
                        placeholder="Cantidad de Cajas"
                        type="number"
                        name="cantCajas"
                        value={productData.cantCajas}
                        onChange={handleChange}
                    />
                </FormControl>
                <FormControl id="tono" isRequired>
                    <FormLabel>Tono</FormLabel>
                    <Input
                     color="white"
                     fontSize="0.9rem"
                     backgroundColor="transparent"
                     width="100%"
                     boxSizing="border-box"
                     paddingInline="0.5em"
                     paddingBlock="0.7em"
                     border="none"
                     borderBottom="var(--border-height) solid var(--border-before-color)"
                     boxShadow="0 2px 4px rgba(0, 0, 0, 0.1)"
                        placeholder="Tono"
                        type="text"
                        name="tono"
                        value={productData.tono}
                        onChange={handleChange}
                    />
                </FormControl>
                <FormControl id="material" isRequired>
                    <FormLabel>Material</FormLabel>
                    <Input
                     color="white"
                     fontSize="0.9rem"
                     backgroundColor="transparent"
                     width="100%"
                     boxSizing="border-box"
                     paddingInline="0.5em"
                     paddingBlock="0.7em"
                     border="none"
                     borderBottom="var(--border-height) solid var(--border-before-color)"
                     boxShadow="0 2px 4px rgba(0, 0, 0, 0.1)"
                        placeholder="Material"
                        type="text"
                        name="material"
                        value={productData.material}
                        onChange={handleChange}
                    />
                </FormControl>
                
                <FormControl id="ambientacion" isRequired>
                    <FormLabel>Ambientación</FormLabel>
                    <Input
                     color="white"
                     fontSize="0.9rem"
                     backgroundColor="transparent"
                     width="100%"
                     boxSizing="border-box"
                     paddingInline="0.5em"
                     paddingBlock="0.7em"
                     border="none"
                     borderBottom="var(--border-height) solid var(--border-before-color)"
                     boxShadow="0 2px 4px rgba(0, 0, 0, 0.1)"
                        placeholder="Ambientación"
                        type="text"
                        name="ambientacion"
                        value={productData.ambientacion}
                        onChange={handleChange}
                    />
                </FormControl>
                <FormControl id="uso" isRequired>
                    <FormLabel>Uso</FormLabel>
                    <Input
                     color="white"
                     fontSize="0.9rem"
                     backgroundColor="transparent"
                     width="100%"
                     boxSizing="border-box"
                     paddingInline="0.5em"
                     paddingBlock="0.7em"
                     border="none"
                     borderBottom="var(--border-height) solid var(--border-before-color)"
                     boxShadow="0 2px 4px rgba(0, 0, 0, 0.1)"
                        placeholder="Uso"
                        type="text"
                        name="uso"
                        value={productData.uso}
                        onChange={handleChange}
                    />
                </FormControl>
                <FormControl id="calidad" isRequired>
                    <FormLabel>Calidad</FormLabel>
                    <Input
                     color="white"
                     fontSize="0.9rem"
                     backgroundColor="transparent"
                     width="100%"
                     boxSizing="border-box"
                     paddingInline="0.5em"
                     paddingBlock="0.7em"
                     border="none"
                     borderBottom="var(--border-height) solid var(--border-before-color)"
                     boxShadow="0 2px 4px rgba(0, 0, 0, 0.1)"
                        placeholder="Calidad"
                        type="text"
                        name="calidad"
                        value={productData.calidad}
                        onChange={handleChange}
                    />
                </FormControl>
                
                <Stack spacing={6} direction={['column', 'row']}>
                    <Button
                        mt="8"
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
                         w="full"
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
                        onClick={() => {
                            setProductData({
                                name: '',
                                img: '',
                                detail: '',
                                precio: '',
                                medidas: '',
                                piezas: '',
                                cantCajas: '',
                                tono: '',
                                material: '',
                                ambientacion: '',
                                uso: '',
                                calidad: '',
                            });
                        }}
                       >
                        Cancel
                    </Button>
                    <Button
                    mt="8"
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
                        bgGradient: "linear(to-r, #C1E05A, #EBE5CA)",
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
                        w="full"
                        onClick={handleSubmit}
                       >
                        Submit
                       
                    </Button>
                   
                </Stack>
                <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
   
    >
      {mostrarAlerta && <Alerta isOpen={mostrarAlerta} onClose={() => setMostrarAlerta(false)} />}
    </Box>
            </Stack>
            
        </Flex>
    )
}

export default CreateProductForm;
