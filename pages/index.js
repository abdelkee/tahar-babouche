import { Box, Container, Heading, HStack, Input, theme, VStack } from "@chakra-ui/react";
import CategoryTag from "../components/CategoryTag";

import { myTheme } from '../utils/theme';

const categories = [
  'dambira',
  'maqloba',
  'pointu',
  'sabo',
  'sandala',
  'sbat'
]
 
export default function Stock() {
  return (
    <Container bg={myTheme.colors.bg} h={'full'} w={'full'} p={4}>
      <VStack>
      {/* 1st section */}
          <VStack w={'full'} spacing={6} borderBottom={'1px'} borderBottomColor={myTheme.colors.shade}>
            <Heading color={myTheme.colors.secondary} letterSpacing={2}>Stock</Heading>
            <HStack overflowX={'auto'} w={'full'}>
              {categories.map(category => (
                <CategoryTag name={category} src={`./images/${category}.jpg`} />
              ))}
               
            </HStack>
            <Box>
              <Input type={'search'} 
                placeholder="Search" 
                mb={6} 
                focusBorderColor={myTheme.colors.primary} 
                color={myTheme.colors.secondary} />
            </Box>
          </VStack>

        {/* 2nd section */}

      </VStack>
    </Container>
  )
}
