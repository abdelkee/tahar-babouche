import { AspectRatio, Box, Center, Divider, HStack, Image, Text, VStack } from '@chakra-ui/react'
import { useDispatch } from 'react-redux'
import { FaCartPlus, FaBoxOpen, FaArrowCircleDown } from "react-icons/fa";
import { setProdcuctSelected } from '../../redux/reducers/stockReducer'
import { accent1, secondary, shade } from '../../utils/theme'

export default function Card({product, onOpen}) {
  const dispatch = useDispatch()
  const handleClick = () => {
    dispatch(setProdcuctSelected(product))
    onOpen()
  }

  return (
    <VStack
        bg={'white'} 
        borderTop={'1px'} 
        borderColor={shade} 
        borderRadius={'sm'} 
        shadow={'md'}
        overflow={'hidden'}>

            <ImageBox product={product} />
            <Center width={'80%'}><Divider orientation='horizontal' /></Center>
            <Text 
              fontSize={'md'} 
              color={secondary} 
              letterSpacing={2} 
              textAlign={'center'}
              noOfLines={1}>
                {product.name}
            </Text>

            {/* Actions section */}
            <HStack w={'full'} bg={secondary} color={shade} justify={'space-evenly'}>
              <IconBtn action={handleClick}>
                <FaBoxOpen size={20}/>
              </IconBtn>
              <IconBtn>
                <FaCartPlus size={20}/>
              </IconBtn>
              <IconBtn>
                <FaArrowCircleDown size={20}/>
              </IconBtn>
            </HStack>
    </VStack>
  )
}

function ImageBox({product}) {
  return (
    <AspectRatio w={'full'} ratio={1} >
      <Box position='relative' bg={'white'} borderRadius={'sm'}>
          <Image 
              src={product.image} 
              boxSize={'full'} 
              objectFit={'cover'} />
          
          <Text 
            bgGradient={`linear(to-r, ${secondary}, ${accent1})`}
            position={'absolute'}
            bottom={0}
            left={2}
            px={2}
            fontSize={'10px'} 
            letterSpacing={2}
            color={'white'}>
              {product.tag}
          </Text>
      </Box>
    </AspectRatio>
  )
}

function IconBtn({children, action}) {
  return (
    <Center py={3} as={'button'} flex={1} onClick={action}>
      {children}
    </Center>
  )
}