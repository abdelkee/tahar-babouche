import { Box, HStack, Heading, Input, SimpleGrid, VStack } from "@chakra-ui/react";
import { BiSearchAlt2 } from "react-icons/bi";

import Card from "../components/Card";
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

const products = [
  {
    _id: '1',
    name: 'colle',
    category: 'dambira',
    quantity: '10',
  },
  {
    _id: '2',
    name: 'cousu',
    category: 'dambira',
    quantity: '1',
  },
  {
    _id: '3',
    name: 'simple',
    category: 'maqloba',
    quantity: '4',
  },
  {
    _id: '4',
    name: '3qad',
    category: 'maqloba',
    quantity: '23',
  },
  {
    _id: '5',
    name: 'mozon',
    category: 'maqloba',
    quantity: '11',
  },
  {
    _id: '6',
    name: 'khmisa',
    category: 'maqloba',
    quantity: '6',
  },
  {
    _id: '7',
    name: 'simple',
    category: 'pointu',
    quantity: '3',
  },
  {
    _id: '8',
    name: 'khenjer',
    category: 'pointu',
    quantity: '19',
  },
  {
    _id: '10',
    name: 'mozon',
    category: 'sabo',
    quantity: '14',
  },
  {
    _id: '11',
    name: 'terz',
    category: 'sabo',
    quantity: '2',
  },
  {
    _id: '12',
    name: 'mqcher',
    category: 'sbat',
    quantity: '10',
  },
  {
    _id: '10',
    name: 'mozon',
    category: 'sabo',
    quantity: '22',
  },
  {
    _id: '11',
    name: 'terz',
    category: 'sabo',
    quantity: '28',
  },
  {
    _id: '12',
    name: 'mqcher',
    category: 'sbat',
    quantity: '13',
  }
]
 
export default function Stock() {
  return (
    <Box bg={myTheme.colors.bg} h={'full'} w={'full'} py={4}>
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
          bg={myTheme.colors.primary}>
            <Heading color={myTheme.colors.secondary} letterSpacing={2}>Stock</Heading>
            <HStack overflowX={'auto'} w={'full'} px={2}>
              {categories.map(category => (
                <CategoryTag key={category} name={category} src={`./images/${category}.jpg`} />
              ))}
            </HStack>
                
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
        </VStack>

        {/* 2nd section */}
      <VStack>
        <SimpleGrid columns={3} spacing={4} w={'full'} pb={14} px={4} pt={52}>
          {products.map(product => (
            <Card key={product._id} product={product} />
          ))}
        </SimpleGrid>
      </VStack>
    </Box>
  )
}
