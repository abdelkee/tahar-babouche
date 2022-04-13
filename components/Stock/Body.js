import { SimpleGrid, VStack } from "@chakra-ui/react";
import Card from "./Card";

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
  
export default function Body() {
  return (
    <SimpleGrid columns={3} spacing={4} w={'full'} pb={14} px={4} pt={52}>
        {products.map(product => (
          <Card key={product._id} product={product} />
        ))}
    </SimpleGrid>
  )
}
