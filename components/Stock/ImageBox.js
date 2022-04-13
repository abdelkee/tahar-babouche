import { Box, Circle, Image } from "@chakra-ui/react";
import { myTheme } from "../../utils/theme";

export default function ImageBox({product}) {
  return (
    <Box h={'100px'} w={'full'} position='relative' bg={'white'} >
        <Image 
            src={'./images/maqloba.jpg'} 
            boxSize={'full'} 
            objectFit={'cover'} 
            borderRadius={'lg'}/>

        <Circle 
            bg={myTheme.colors.secondary}
            size={6}
            fontSize={'xs'}
            color={'white'}
            position={'absolute'}
            bottom={0}
            left={2}> {product.quantity} </Circle>
    </Box>
  )
}
