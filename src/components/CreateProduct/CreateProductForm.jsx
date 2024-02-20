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
    Text
} from '@chakra-ui/react'
import { SmallCloseIcon } from '@chakra-ui/icons'


function CreateProductForm() {
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
            bg={useColorModeValue('gray.50', 'gray.800')}

        >
            <Stack

                spacing={4}
                w="full"
                maxW={'6xl'}
                bg={useColorModeValue('white', 'gray.700')}
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
                </FormControl>
                <FormControl id="detail" isRequired>
                    <FormLabel>Detail</FormLabel>
                    <Input
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
                        placeholder="Calidad"
                        type="text"
                        name="calidad"
                        value={productData.calidad}
                        onChange={handleChange}
                    />
                </FormControl>
                <Stack spacing={6} direction={['column', 'row']}>
                    <Button
                        bg={'red.400'}
                        color={'white'}
                        w="full"
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
                        _hover={{
                            bg: 'red.500',
                        }}>
                        Cancel
                    </Button>
                    <Button
                        bg={'blue.400'}
                        color={'white'}
                        w="full"
                        onClick={handleSubmit}
                        _hover={{
                            bg: 'blue.500',
                        }}>
                        Submit
                    </Button>
                </Stack>
            </Stack>
        </Flex>
    )
}

export default CreateProductForm;
