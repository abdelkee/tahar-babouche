import { Avatar, Box, Tag, Text } from '@chakra-ui/react'
import { myTheme } from '../../utils/theme'

export default function CategoryTag({name, src}) {
  return (
    <Box as='button'>
      <Tag 
          size='lg' 
          bg={'white'} 
          border={'2px'}
          borderColor={myTheme.colors.shade} 
          borderRadius='full' 
          color={myTheme.colors.secondary}>

            <Avatar
                src={src}
                size='xs'
                name='Segun Adebayo'
                ml={-2}
                mr={2} />
            <Text>{name}</Text>
      </Tag>
    </Box>
  )
}