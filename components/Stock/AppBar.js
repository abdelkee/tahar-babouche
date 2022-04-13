import { Heading, VStack } from "@chakra-ui/react";
import { myTheme } from "../../utils/theme";
import CategoryList from "./CategoryList";
import SearchBar from "./SearchBar";

export default function AppBar() {
  return (
    <VStack 
        w={'full'} 
        spacing={6} 
        borderBottom={'1px'} 
        borderBottomColor={myTheme.colors.shade} 
        position={'fixed'}
        top={0}
        left={0}
        py={4}
        zIndex={'2'} 
        bgGradient={`linear(to-r,${myTheme.colors.secondary} ,${myTheme.colors.accent2})`}>

          <Heading color={myTheme.colors.shade} letterSpacing={2}>Stock</Heading>
          <CategoryList/>
          <SearchBar/>

    </VStack>
  )
}
