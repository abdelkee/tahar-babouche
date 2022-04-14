import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalOverlay, VStack } from "@chakra-ui/react";
import { useSelector } from "react-redux";

import ModalImage from "./ModalImage";
import ModalMenu from "./ModalMenu";
import ModalTtile from "./ModalTtile";

export default function ModalBox({isOpen, onClose}) {
    const { productSelected } = useSelector(state => state.stockSlice);

    return (
    <>
      <Modal
        isCentered={true}
        size={'sm'}
        motionPreset="slideInBottom" 
        colorScheme={'yellow'} 
        onClose={onClose} 
        isOpen={isOpen}
        >

          <ModalOverlay />
          <ModalContent pb={5} maxH={'80%'} >
              <ModalImage />
              <ModalTtile />
              <ModalCloseButton />
              <ModalBody overflow={'auto'}>
                <VStack spacing={4}>
                  {productSelected.colors && productSelected.colors.map(color => (
                    <ModalMenu key={color.name} color={color} />
                  ))}
                  
                </VStack>
              </ModalBody>
          </ModalContent>
      </Modal>
    
    </>
  )
}
