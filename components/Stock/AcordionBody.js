import { Box, Collapse, HStack, Text } from "@chakra-ui/react";

export default function AcordionBody({isOpen, color}) {
  
  return (
    <Collapse in={isOpen} animateOpacity>
      <Box 
        bg={'gray.50'}
        w={'90%'}
        maxH={52}
        mt={1}
        ml={'10%'}
        borderWidth={1}
        borderColor={'gray.200'}
        overflow={'auto'} >
            {color.sizes && color.sizes.map(size => (
              <ProductSize key={size.size} size={size}/>
            ))}
      </Box>
    </Collapse>
  )
}

function ProductSize({size}) {
    return (
        <HStack py={2} px={4} justify={'space-between'} borderBottomWidth={1}>
            <Text>{`Nº: ${size.size}`}</Text>
            <Text>{size.quantity}</Text>
        </HStack>
    )
}