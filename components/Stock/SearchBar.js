import { HStack, Input } from "@chakra-ui/react";
import { BiSearchAlt2 } from "react-icons/bi";
import { myTheme } from "../../utils/theme";

export default function SearchBar() {
  return (
    <HStack 
        w={'80%'} 
        px={2} 
        spacing={2} 
        color={myTheme.colors.secondary} 
        bg={'white'} 
        borderRadius={'md'}
        border={'1px'}
        borderColor={'gray.400'}>

        <BiSearchAlt2 size={'24px'} />
        <Input
            variant={'unstyled'}
            height={10}
            type={'search'} 
            focusBorderColor={'transparent'}
            letterSpacing={2}/>
            
    </HStack>
  )
}
