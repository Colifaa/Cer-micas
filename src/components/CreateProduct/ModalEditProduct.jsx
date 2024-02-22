import React, { useState } from 'react';
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  Image,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  Stack,
  Flex,
  ModalBody,
  ModalCloseButton,
  InputGroup,
  InputLeftAddon,
} from '@chakra-ui/react';

import supabase from '../../../lib/supabaseClient';

function ModalEditProduct({ product }) {
  const [editingProduct, setEditingProduct] = useState({ ...product });
  const [isOpen, setIsOpen] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditingProduct({ ...editingProduct, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setEditingProduct({ ...editingProduct, img: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data, error } = await supabase
        .from('products')
        .update(editingProduct)
        .eq('id', editingProduct.id);
      if (error) {
        throw error;
      }
      console.log('Producto actualizado correctamente:', data);
    } catch (error) {
      console.error('Error al actualizar el producto:', error.message);
    }
  };

  return (
    <>
         <Button onClick={() => setIsOpen(true)}>Editar</Button>
      <Modal size="4xl" isOpen={isOpen} onClose={() => setIsOpen(false)} isCentered motionPreset='slideInBottom'>
        <ModalOverlay    bg='blackAlpha.300'
      backdropFilter='blur(10px) hue-rotate(90deg)' />
        <ModalContent>
         
          <ModalCloseButton />
          
          <Flex
            minH={'100vh'}
            align={'center'}
            justify={'center'}
           

        > 


          <Stack

spacing={4}
w="full"
maxW={'6xl'}
rounded={'xl'}
boxShadow={'lg'}
p={6}
my={12}>
 
          <form onSubmit={handleSubmit}>
          <ModalHeader textAlign="center" >{product && product.name}</ModalHeader>
            <ModalBody>


            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              
  {editingProduct.img && ( // Verificar si hay una imagen
  
    <Image
      src={editingProduct.img}
      alt="Producto"
      boxSize="200px"
      rounded="full"
      objectFit="contain"
      mx="auto" // Centrar horizontalmente
      my={4} // Espacio vertical
      display="block" // Hacer que el margen automático funcione correctamente
    />
  )}
 
  <Input
  mt="2"
    placeholder='large size'
    size='lg'
    type="file"
    accept="image/*"
    onChange={handleImageChange}
  />
</div>

            <FormControl>
            <Flex
         
            align={'center'}
            justify={'center'}
           

        > 
 
  </Flex>
</FormControl>

              <FormControl>
                <FormLabel>Nombre:</FormLabel>
                <Input
                  type="text"
                  name="name"
                  value={editingProduct.name}
                  onChange={handleInputChange}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Detalle:</FormLabel>
                <Input
                  type="text"
                  name="detail"
                  value={editingProduct.detail}
                  onChange={handleInputChange}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Ambientación:</FormLabel>
                <Input
                  type="text"
                  name="ambientacion"
                  value={editingProduct.ambientacion}
                  onChange={handleInputChange}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Calidad:</FormLabel>
                <Input
                  type="text"
                  name="calidad"
                  value={editingProduct.calidad}
                  onChange={handleInputChange}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Total de Cajas:</FormLabel>
                <Input
                  type="number"
                  name="cantCajas"
                  value={editingProduct.cantCajas}
                  onChange={handleInputChange}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Piezas:</FormLabel>
                <Input
                  type="number"
                  name="piezas"
                  value={editingProduct.piezas}
                  onChange={handleInputChange}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Material:</FormLabel>
                <Input
                  type="text"
                  name="material"
                  value={editingProduct.material}
                  onChange={handleInputChange}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Medidas:</FormLabel>
                <Input
                  type="text"
                  name="medidas"
                  value={editingProduct.medidas}
                  onChange={handleInputChange}
                />
              </FormControl>
              <FormControl>
  <FormLabel>Precio:</FormLabel>
  <InputGroup>
    <InputLeftAddon children="$" />
    <Input
      type="number"
      name="precio"
      value={editingProduct.precio}
      onChange={handleInputChange}
    />
  </InputGroup>
</FormControl>
              <FormControl>
                <FormLabel>Tono:</FormLabel>
                <Input
                  type="text"
                  name="tono"
                  value={editingProduct.tono}
                  onChange={handleInputChange}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Uso:</FormLabel>
                <Input
                  type="text"
                  name="uso"
                  value={editingProduct.uso}
                  onChange={handleInputChange}
                />
              </FormControl>
            
         
            </ModalBody>
            <ModalFooter>
              <Button type="submit" colorScheme="blue">Guardar</Button>
              <Button onClick={() => setIsOpen(false)} colorScheme="red" ml={3}>Cerrar</Button>
            </ModalFooter>
            
          </form>
          
          </Stack>
          </Flex>
        </ModalContent>
      </Modal>
      
    </>
  );
}

export default ModalEditProduct;
