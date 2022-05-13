import { AspectRatio, Box, Center, Collapse, Divider, HStack, Image, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Square, Text, useDisclosure, VStack } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { secondary, shade } from "../../utils/theme";
import { BiChevronDown } from "react-icons/bi";


export default function StockModal({isOpen, onClose}) {
    const { productSelected } = useSelector(state => state.stockSlice);

    return (
    <>
      <Modal
        isCentered={true}
        size={'sm'}
        motionPreset="slideInBottom" 
        colorScheme={'yellow'} 
        onClose={onClose} 
        isOpen={isOpen}>

          <ModalOverlay />
          <ModalContent pb={5} maxH={'80%'} >
              <ModalImage />
              <ModalTitle />
              <ModalCloseButton />
              <ModalBody overflow={'auto'}>
                
                {/* Colors list */}
                <VStack spacing={4}>
                  {productSelected.colors && productSelected.colors.map(color => (
                    <ColorCard key={color.name} color={color} />
                  ))}
                </VStack>
              </ModalBody>
          </ModalContent>
      </Modal>
    
    </>
  )
}

function ModalImage() {
  const { productSelected } = useSelector(state => state.stockSlice);
return (
  <AspectRatio 
      w={'25%'} 
      ratio={4/3} 
      bg={'white'}
      shadow={'md'} 
      position={'absolute'} 
      top={-4} 
      left={4}
      borderRadius={'md'}
      border={'1px'}
      borderColor={shade} >
          <Image src={productSelected.image} objectFit={'cover'} borderRadius={'md'}/>
  </AspectRatio>
)
}

function ModalTitle() {
  const { productSelected } = useSelector(state => state.stockSlice);
  return (
    <ModalHeader
        textAlign={'center'}
        textTransform={'capitalize'}
        color={secondary}>
            <Text>{productSelected.category}</Text>
            <Text fontSize={'md'}>{productSelected.name}</Text>
    </ModalHeader>
  )
}

function ColorCard({color}) {
  const { isOpen, onToggle } = useDisclosure()

  const total = () => {
    const quantities = color.sizes.map(size => size.quantity)
    const sum = quantities.reduce((total, size) => total + size, 0)
    return sum
  }
  return (
    <Box w={'100%'} color={secondary}>

      {/* Color info */}
      <HStack 
        w={'full'} 
        h={12} 
        bg={'gray.50'}
        borderRadius={'md'}
        overflow={'hidden'}
        spacing={4}
        pl={4}
        borderWidth={1}
        borderColor={'gray.200'}
        borderLeft={'4px'}
        borderLeftColor={color.color}
        fontWeight={'bold'} >
          <Text letterSpacing={2} textTransform={'capitalize'}>{color.name}</Text>
          <Center height='70%' bg={secondary} >
              <Divider orientation='vertical' />
          </Center>
          <Text flex={1} >{total()}</Text>
          <Square size={12} as={'button'} transform={'auto'} rotate={isOpen ? '180deg' : 0} >
              <BiChevronDown 
                size={'24px'} 
                onClick={onToggle} /> 
          </Square>
      </HStack>

      {/* Sizes info */}
      <Collapse in={isOpen} animateOpacity>
        <Box 
          bg={'white'}
          w={'74%'}
          maxH={48}
          mt={1}
          ml={'26%'}
          borderWidth={1}
          borderColor={'gray.200'}
          overflow={'auto'} >
              {color.sizes && color.sizes.map(size => (
                <HStack key={size} justify={'space-between'} borderBottomWidth={1}>
                  <Text py={2} px={4} bg={secondary} color={shade}>{size.size}</Text>
                  <Text py={2} px={4} >{size.quantity}</Text>
                </HStack>
              ))}
        </Box>
      </Collapse>
    </Box>
  )
}
