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
import AlertEdit from '../AlertsAdmin/AlertEdit';

function ModalEditProduct({ product }) {
  const [editingProduct, setEditingProduct] = useState({ ...product });
  const [isOpen, setIsOpen] = useState(false);
  const [showAlert, setShowAlert] = useState(false); // Nuevo estado para controlar la visibilidad del AlertEdit

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
      setShowAlert(true); // Mostrar el AlertEdit después de editar el producto correctamente
      setTimeout(() => {
        window.location.reload(); // Recargar la página después de 2 segundos
    }, 2000);
    } catch (error) {
      console.error('Error al actualizar el producto:', error.message);
    }
  };

  return (
    <>
     
     <button className="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded" onClick={() => setIsOpen(true)}>
  Editar
</button>

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
  my={12}
  alignItems="center" // Agregar esta línea para centrar verticalmente los elementos
>
 
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
 
 <Flex   
       align={'center'}
       justify={'center'}
        > 

  <input
  mt="2"
    placeholder='large size'
    size='lg'
    type="file"
    accept="image/*"
    onChange={handleImageChange}
    className="file-input file-input-bordered file-input-success w-full max-w-xs" 
  />
  </Flex>
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
                <input
                  className="input input-bordered input-accent w-full max-w-xs"
                  type="text"
                  name="name"
                  value={editingProduct.name}
                  onChange={handleInputChange}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Detalle:</FormLabel>
                <textarea 
           className="textarea textarea-bordered textarea-lg w-full max-w-md"
                  type="text"
                  name="detail"
                  value={editingProduct.detail}
                  onChange={handleInputChange}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Ambientación:</FormLabel>
                <input
                className="input input-bordered input-accent w-full max-w-xs"
                  type="text"
                  name="ambientacion"
                  value={editingProduct.ambientacion}
                  onChange={handleInputChange}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Calidad:</FormLabel>
                <input
                  className="input input-bordered input-accent w-full max-w-xs"
                  type="text"
                  name="calidad"
                  value={editingProduct.calidad}
                  onChange={handleInputChange}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Total de Cajas:</FormLabel>
                <input
                  className="input input-bordered input-accent w-full max-w-xs"
                  type="number"
                  name="cantCajas"
                  value={editingProduct.cantCajas}
                  onChange={handleInputChange}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Piezas:</FormLabel>
                <input
                  className="input input-bordered input-accent w-full max-w-xs"
                  type="number"
                  name="piezas"
                  value={editingProduct.piezas}
                  onChange={handleInputChange}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Material:</FormLabel>
                <input
                  className="input input-bordered input-accent w-full max-w-xs"
                  type="text"
                  name="material"
                  value={editingProduct.material}
                  onChange={handleInputChange}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Medidas:</FormLabel>
                <input
                  type="text"
                  className="input input-bordered input-accent w-full max-w-xs"
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
  w="100"
      type="number"
      name="precio"
      value={editingProduct.precio}
      onChange={handleInputChange}
    />
  </InputGroup>
</FormControl>
              <FormControl>
                <FormLabel>Tono:</FormLabel>
                <input
                  type="text"
                  name="tono"
                  className="input input-bordered input-accent w-full max-w-xs"
                  value={editingProduct.tono}
                  onChange={handleInputChange}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Uso:</FormLabel>
                <input
                  type="text"
                  className="input input-bordered input-accent w-full max-w-xs"
                  name="uso"
                  placeholder='uso'
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

      <AlertEdit
        isOpen={showAlert}
        onClose={() => setShowAlert(false)}
        title="Producto editado correctamente"
        message="El producto ha sido editado satisfactoriamente."
      />
      
    </>
  );
}

export default ModalEditProduct;
