import { SimpleGrid, useDisclosure } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import Card from "./Card";
import ModalBox from "./ModalBox";

const products = [
    {
      _id: '1',
      name: 'colle',
      category: 'dambira',
      tag: 'Dambira',
      quantity: '10',
      image: './images/dambira.jpg',
      colors: [
        {
          name: 'hmer',
          color: '#FF0000',
          sizes: [
            {
              size: 36,
              quantity: 2,
            },
            {
              size: 37,
              quantity: 4,
            },
            {
              size: 38,
              quantity: 1,
            },
            {
              size: 39,
              quantity: 5,
            },
            {
              size: 40,
              quantity: 3,
            },
            {
              size: 41,
              quantity: 5,
            },
            {
              size: 42,
              quantity: 1,
            },
          ]
        },
        {
          name: 'khder',
          color: '#46C616',
          sizes: [
            {
              size: 37,
              quantity: 7,
            },
            {
              size: 40,
              quantity: 1,
            },
            {
              size: 41,
              quantity: 8,
            }
          ]
        },
        {
          name: 'sfer',
          color: '#F3F712',
          sizes: [
            {
              size: 39,
              quantity: 8,
            },
            {
              size: 42,
              quantity: 3,
            }
          ]
        },
        {
          name: 'limouni',
          color: '#FF9F13',
          sizes: [
            {
              size: 38,
              quantity: 2,
            }
          ]
        },
      ]
    },
    {
      _id: '3',
      name: 'simple',
      category: 'maqloba',
      tag: 'Maqloba',
      quantity: '4',
      image: './images/maqloba.jpg'
    },
    {
      _id: '9',
      name: '3qad-chachia',
      category: 'maqloba',
      tag: 'Maqloba',
      quantity: '4',
      image: './images/maqloba.jpg'
    },
    {
      _id: '2',
      name: 'cousu',
      category: 'dambira',
      tag: 'Dambira',
      quantity: '1',
      image: './images/dambira.jpg'
    },
    {
      _id: '6',
      name: 'khmisa',
      category: 'maqloba',
      tag: 'Maqloba',
      quantity: '6',
      image: './images/maqloba.jpg'
    },
    {
      _id: '7',
      name: 'simple',
      category: 'pointu',
      tag: 'Pointu',
      quantity: '3',
      image: './images/pointu.jpg'
    },
    {
      _id: '4',
      name: '3qad',
      category: 'maqloba',
      tag: 'Maqloba',
      quantity: '23',
      image: './images/maqloba.jpg'
    },
    {
      _id: '10',
      name: 'mozon',
      category: 'sabo',
      tag: 'Sabo',
      quantity: '14',
      image: './images/sabo.jpg'
    },
    {
      _id: '8',
      name: 'khenjer',
      category: 'pointu',
      tag: 'Pointu',
      quantity: '19',
      image: './images/pointu.jpg'
    },
    {
      _id: '11',
      name: 'terz',
      category: 'sabo',
      tag: 'Sabo',
      quantity: '2',
      image: './images/sabo.jpg'
    },
    {
      _id: '5',
      name: 'mozon',
      category: 'maqloba',
      tag: 'Maqloba',
      quantity: '11',
      image: './images/maqloba.jpg'
    },
    {
      _id: '12',
      name: 'mqcher',
      category: 'sbat',
      tag: 'Sbat',
      quantity: '10',
      image: './images/sbat.jpg'
    }
  ]
  
export default function Body() {
  const { categorySelected } = useSelector(state => state.stockSlice)
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <SimpleGrid columns={3} spacing={4} w={'full'} pb={14} px={4} pt={36}>
        {
          categorySelected !== ''
          ?
          products && products.filter(prod => {
              return prod.category === categorySelected
          }).map(product => (
            <Card key={product._id} product={product} onOpen={onOpen} />
          )) 
          :
          products && products.map(product => (
            <Card key={product._id} product={product} onOpen={onOpen} />
          ))
        }
        <ModalBox isOpen={isOpen} onClose={onClose} />
    </SimpleGrid>
  )
}
