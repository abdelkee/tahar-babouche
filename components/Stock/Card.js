import { Center, Divider, Text, VStack } from '@chakra-ui/react'
import { useDispatch } from 'react-redux'
import { setProdcuctSelected } from '../../redux/reducers/stockReducer'
import { myTheme } from '../../utils/theme'
import ImageBox from './ImageBox'

export default function Card({product, onOpen}) {
  const dispatch = useDispatch()
  const handleClick = () => {
    dispatch(setProdcuctSelected(product))
    onOpen()
  }

  return (
    <VStack
        as={'button'}
        onClick={handleClick}
        bg={'white'} 
        border={'1px'} 
        borderColor={myTheme.colors.shade} 
        borderRadius={'lg'} 
        shadow={'md'}
        pb={2}>

            <ImageBox product={product} />
            <Center width={'80%'}><Divider orientation='horizontal' /></Center>
            <Text fontSize={'sm'} color={myTheme.colors.secondary} letterSpacing={2}>{product.name}</Text>

    </VStack>
  )
}
