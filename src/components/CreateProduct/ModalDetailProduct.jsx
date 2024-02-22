import { useDisclosure, Button } from '@chakra-ui/react';
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton } from '@chakra-ui/react';
import ModalEditProduct from './ModalEditProduct';

function ModalDetailProduct({ product }) {
  const { isOpen, onOpen, onClose } = useDisclosure();


  return (
    <>
      <Button onClick={onOpen}>Detail</Button>
      <Modal size="full" isOpen={isOpen} onClose={onClose} isCentered motionPreset='slideInBottom'>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{product && product.name}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <section className="text-gray-700 body-font overflow-hidden bg-white">
              <div className="container px-5 py-24 mx-auto">
                <div className="lg:w-4/5 mx-auto flex flex-wrap">
                  <img
                    src={product && product.img}
                    alt={product && product.name}
                    className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200"
                  />

                  <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                    <h2 className="text-sm title-font text-gray-500 tracking-widest">
                      <span className="title-font font-medium text-xl text-gray-900">
                        <p><strong className='mr-1'></strong> {product && product.uso}</p>
                      </span>
                    </h2>
                    <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                      {product && product.name}
                    </h1>
                    <div className="flex mb-4">
                      <span className="flex items-center">



                        <strong>Total de Cajas:</strong>
                        <span className="text-gray-600 ml-1">{product && product.cantCajas} |</span>
                        <strong>Piezas:</strong>
                        <span className="text-gray-600 ml-1"> {product && product.piezas} |</span>


                      </span>
                    </div>
                    <p className="leading-relaxed">
                      {product && product.detail}


                      <div className='mt-3'>
                        <strong>Tipo de material:</strong>
                        <span className="text-gray-600 ml-1"> {product && product.material}</span>
                      </div>
                      <div >
                        <strong >Ambientación:</strong>
                        <span className="text-gray-600 ml-1 mr-3"> {product && product.ambientacion}</span>
                      </div>
                    </p>
                    <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
                      <div className="flex">

                        <strong className='mr-3 '>Tono:</strong>
                        <img
                          src={product && product.img}
                          alt={product && product.name}
                          strokeWidth="2"
                          className="w-6 h-"

                        />


                      </div>
                      <div className="flex ml-6 items-center">



                        <strong className='mr-3'>Medida:</strong>
                        <div className="relative">

                          <span className="rounded border appearance-none border-gray-400 py-2 focus:outline-none focus:border-red-500 text-base pl-3 pr-10">
                            {product && product.medidas}
                          </span>



                          <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex">

                      <span className="title-font font-medium text-2xl text-gray-900">
                      ${product && product.precio}
                      </span>


                      <button className="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded">
                        <ModalEditProduct product={product}  />
                      </button>

                    </div>
                  </div>
                </div>
              </div>
            </section>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Cerrar
            </Button>
            <Button variant='ghost'>Acción secundaria</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      
    </>
  );
}

export default ModalDetailProduct;
