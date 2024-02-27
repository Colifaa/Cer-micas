import React, { useEffect, useState } from 'react';
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Button, FormControl, Flex, FormLabel, Textarea, Input } from '@chakra-ui/react';
import supabase from '../../../lib/supabaseClient'; // Importa tu instancia de Supabase

function AdminProfileModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState('');
  const [img, setImg] = useState('');
  const [profileImg, setProfileImg] = useState('');
  const [userId, setUserId] = useState('');
  const [previewImg, setPreviewImg] = useState(null); // Estado para la vista previa de la imagen seleccionada

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  useEffect(() => {
    fetchProfileImage();
  }, []);


  const fetchProfileImage = async () => {
    try {
      let { data: Profile, error } = await supabase
        .from('Profile')
        .select('img')
        .limit(1);

      if (error) {
        throw error;
      }

      if (Profile && Profile.length > 0) {
        setProfileImg(Profile[0].img);
      }
    } catch (error) {
      console.error('Error fetching profile image:', error.message);
    }
  };

  const handleNameChange = (e) => setName(e.target.value);
    const handleImgChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      const base64String = reader.result;
      setImg(base64String); // Guardar la imagen como formato base64 en el estado
      setPreviewImg(base64String); // Actualizar la vista previa de la imagen seleccionada
    };

    reader.readAsDataURL(file); // Leer el archivo como base64
  }; 
  
  const handleUpdateProfile = async () => {
    try {
      const { data, error } = await supabase
        .from('Profile')
        .update({ name, img: img ? img : null })
        .eq('user_id', userId);

      if (error) {
        throw error;
      }
      console.log('Profile updated successfully:', data);
      setIsOpen(false);
    } catch (error) {
      console.error('Error updating profile:', error.message);
    }
  };

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const user = await supabase.auth.getUser();
        if (user) {
          console.log("user", user);
          setUserId(user.data.user.id);
        } else {
          throw new Error('User is not authenticated');
        }
      } catch (error) {
        throw new Error('Error fetching user info: ' + error.message);
      }
    };
    // Llamar a la función para obtener la información del usuario al montar el componente
    fetchUserInfo();
  }, []);
  return (
    <>
      <Button colorScheme="blue" onClick={handleOpen}>
       Perfil
      </Button>
      <Modal size="2xl" isOpen={isOpen} onClose={handleClose}>
      <ModalOverlay
      bg='blackAlpha.300'
      backdropFilter='blur(10px) hue-rotate(90deg)'
    />
  
        <ModalContent>
          <ModalHeader>Edit Profile</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex direction="column" alignItems="center">
              <div className="avatar">
                <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  {previewImg && <img src={previewImg} alt="Profile Preview" />} {/* Mostrar la vista previa de la imagen */}
                  {!previewImg && <img src={profileImg} alt="Profile" />} {/* Mostrar la imagen del perfil */}
                </div>
              </div>
              <FormControl mt={4} className="max-w-xs textarea textarea-bordered">
                <FormLabel>Name</FormLabel>
                <Textarea placeholder="Tag" className="" value={name} onChange={handleNameChange} />
              </FormControl>
              <FormControl mt={4} className="max-w-xs">
                <FormLabel>Image</FormLabel>
                <Input type="file" className="file-input file-input-bordered file-input-primary" onChange={handleImgChange} />
              </FormControl>
            </Flex>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleUpdateProfile}>
              Save
            </Button>
            <Button onClick={handleClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default AdminProfileModal;
