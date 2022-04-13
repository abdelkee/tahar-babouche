import { SimpleGrid } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import Card from "./Card";

const products = [
    {
      _id: '1',
      name: 'colle',
      category: 'dambira',
      tag: 'Dambira',
      quantity: '10',
    },
    {
      _id: '2',
      name: 'cousu',
      category: 'dambira',
      tag: 'Dambira',
      quantity: '1',
    },
    {
      _id: '3',
      name: 'simple',
      category: 'maqloba',
      tag: 'Maqloba',
      quantity: '4',
    },
    {
      _id: '4',
      name: '3qad',
      category: 'maqloba',
      tag: 'Maqloba',
      quantity: '23',
    },
    {
      _id: '5',
      name: 'mozon',
      category: 'maqloba',
      tag: 'Maqloba',
      quantity: '11',
    },
    {
      _id: '6',
      name: 'khmisa',
      category: 'maqloba',
      tag: 'Maqloba',
      quantity: '6',
    },
    {
      _id: '7',
      name: 'simple',
      category: 'pointu',
      tag: 'Pointu',
      quantity: '3',
    },
    {
      _id: '8',
      name: 'khenjer',
      category: 'pointu',
      tag: 'Pointu',
      quantity: '19',
    },
    {
      _id: '10',
      name: 'mozon',
      category: 'sabo',
      tag: 'Sabo',
      quantity: '14',
    },
    {
      _id: '11',
      name: 'terz',
      category: 'sabo',
      tag: 'Sabo',
      quantity: '2',
    },
    {
      _id: '12',
      name: 'mqcher',
      category: 'sbat',
      tag: 'Sbat',
      quantity: '10',
    }
  ]
  
export default function Body() {
  const { categorySelected } = useSelector(state => state.stockSlice)

  return (
    <SimpleGrid columns={3} spacing={4} w={'full'} pb={14} px={4} pt={52}>
        {
          categorySelected !== ''
          ?
          products && products.filter(prod => {
              return prod.category === categorySelected
          }).map(product => (
            <Card key={product._id} product={product} />
          )) 
          :
          products && products.map(product => (
            <Card key={product._id} product={product} />
          ))
        }
    </SimpleGrid>
  )
}
