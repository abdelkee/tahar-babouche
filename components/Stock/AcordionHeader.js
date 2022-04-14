import { Center, Divider, HStack, Square, Text } from "@chakra-ui/react";
import { BiChevronDown } from "react-icons/bi";

import { myTheme } from "../../utils/theme";

export default function AcordionHeader({onToggle, isOpen, color}) {
  const total = () => {
    const quantities = color.sizes.map(size => size.quantity)
    const sum = quantities.reduce((total, size) => total + size, 0)
    return sum
  }

  return (
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
            <Center height='70%' bg={myTheme.colors.secondary} >
                <Divider orientation='vertical' />
            </Center>
            <Text flex={1} >{total()}</Text>
            <Square size={12} as={'button'} transform={'auto'} rotate={isOpen ? '180deg' : 0} >
                <BiChevronDown 
                  size={'24px'} 
                  onClick={onToggle} /> 
            </Square>
    </HStack>
  )
}
