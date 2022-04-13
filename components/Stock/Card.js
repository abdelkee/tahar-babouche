import { Center, Divider, Text, VStack } from '@chakra-ui/react'
import { myTheme } from '../../utils/theme'
import ImageBox from './ImageBox'

export default function Card({product}) {
  return (
    <VStack
        as={'button'}
        bg={'white'} 
        border={'1px'} 
        borderColor={myTheme.colors.shade} 
        borderRadius={'lg'} 
        shadow={'md'}
        pb={2}>

            <ImageBox product={product} />
            <Center width={'80%'}><Divider orientation='horizontal' /></Center>
            <Text color={myTheme.colors.secondary} letterSpacing={2}>{product.name}</Text>

    </VStack>
  )
}
