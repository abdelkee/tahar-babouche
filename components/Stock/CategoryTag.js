import { Avatar, Box, Center, Tag, Text } from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux';
import { BiCheckCircle } from 'react-icons/bi';

import { myTheme } from '../../utils/theme'
import { setCategorySelected } from '../../redux/reducers/stockReducer';

export default function CategoryTag({name, src}) {
  const dispatch = useDispatch();
  const { categorySelected } = useSelector(state => state.stockSlice);

  const handleClick = () => {
    if(categorySelected === name) {
      dispatch(setCategorySelected(''));
    } else {
      dispatch(setCategorySelected(name));
    }
  }
  return (
    <Box as='button' onClick={handleClick}>
      <Tag 
          size='lg' 
          bg={categorySelected === name ? myTheme.colors.primary : 'white'} 
          border={'2px'}
          borderColor={categorySelected === name ? myTheme.colors.secondary : myTheme.colors.shade} 
          borderRadius='full' 
          color={myTheme.colors.secondary}>

            {categorySelected === name ?
            <Center ml={-2} mr={2} ><BiCheckCircle size={'24px'} /></Center> :
            <Avatar
                src={src}
                size='xs'
                name='Segun Adebayo'
                ml={-2}
                mr={2} />}
            <Text>{name}</Text>
      </Tag>
    </Box>
  )
}
