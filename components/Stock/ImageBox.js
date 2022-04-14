import { Box, Image, Text } from "@chakra-ui/react";
import { myTheme } from "../../utils/theme";

export default function ImageBox({product}) {
  return (
    <Box h={'100px'} w={'full'} position='relative' bg={'white'} >
        <Image 
            src={product.image} 
            boxSize={'full'} 
            objectFit={'cover'} 
            borderRadius={'lg'}/>
        
        <Text 
          bgGradient={`linear(to-r, ${myTheme.colors.secondary}, ${myTheme.colors.accent1})`}
          position={'absolute'}
          bottom={-2}
          left={0}
          px={2}
          fontSize={'10px'} 
          letterSpacing={2}
          color={'white'}>{product.tag}</Text>

    </Box>
  )
}
