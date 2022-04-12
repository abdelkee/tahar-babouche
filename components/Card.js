import { Box, Center, Circle, Divider, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { myTheme } from '../utils/theme'

export default function Card({product}) {
  return (
    <VStack
        as={'button'}
        bg={'white'} 
        border={'1px'} 
        borderColor={myTheme.colors.shade} 
        borderRadius={'lg'} 
        shadow={'base'}
        pb={2}>
            <Box h={'100px'} w={'full'} position='relative' bg={'white'} >
                <Image src={'./images/maqloba.jpg'} boxSize={'full'} objectFit={'cover'} borderRadius={'lg'}/>
                <Circle 
                    bg={myTheme.colors.secondary}
                    size={6}
                    fontSize={'xs'}
                    color={'white'}
                    position={'absolute'}
                    bottom={0}
                    left={2}>
                        {product.quantity}
                </Circle>
            </Box>
            <Center width={'80%'}><Divider orientation='horizontal' /></Center>
            <Text color={myTheme.colors.secondary} letterSpacing={2}>{product.name}</Text>
    </VStack>
  )
}
