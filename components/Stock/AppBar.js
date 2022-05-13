import { Avatar, Box, Center, Circle, Heading, HStack, Input, Tag, Text, VStack } from "@chakra-ui/react";
import { accent2, primary, secondary, shade } from "../../utils/theme";
import { BiSearchAlt2, BiMenu, BiCheckCircle } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { setCategorySelected } from "../../redux/reducers/stockReducer";

const categories = [
  'dambira',
  'maqloba',
  'pointu',
  'sabo',
  'sandala',
  'sbat'
]

export default function AppBar() {
  const { categorySelected } = useSelector(state => state.stockSlice);
  const dispatch = useDispatch()

  const handleClick = (name) => {
    if(categorySelected === name) {
      dispatch(setCategorySelected(''))
    } else {
      dispatch(setCategorySelected(name))
    }
  }
  return (
    <VStack 
        w={'full'} 
        spacing={6} 
        borderBottom={'1px'} 
        borderBottomColor={primary} 
        position={'fixed'}
        top={0}
        left={0}
        py={4}
        zIndex={'2'} 
        bgGradient={`linear(to-r,${secondary} ,${accent2})`}>
          
          {/* Top section */}
          <HStack w={'full'} color={shade} justify={'space-between'} px={4}>
            <Heading letterSpacing={2}>Tahar B</Heading>
            <HStack spacing={4}>

              {/* Search button */}
              <Circle
                onClick={() => {}}
                as={'button'}>
                  <BiSearchAlt2 size={24}/>
              </Circle>

              {/* Menu button */}
              <Circle
                onClick={() => {}} 
                as={'button'}>
                  <BiMenu size={24}/>
              </Circle>
            </HStack>
          </HStack>

          {/* Bottom section */}
          <HStack overflowX={'auto'} w={'full'} px={2}>

            {/* Categories list */}
            {categories?.map(category => (
              <Box onClick={() => handleClick(category)}>
                <Tag 
                    size='lg' 
                    bg={categorySelected === category ? primary : 'white'} 
                    border={'2px'}
                    borderColor={categorySelected === category ? primary : shade} 
                    borderRadius='sm' 
                    color={secondary}>
                      {categorySelected === category ?
                      <Center ml={-2} mr={2} ><BiCheckCircle size={'24px'} /></Center> :
                      <Avatar
                          src={`./images/${category}.jpg`}
                          size='xs'
                          name='Segun Adebayo'
                          ml={-2}
                          mr={2} />}
                      <Text>{category}</Text>
                </Tag>
              </Box>
            ))}
          </HStack>
    </VStack>
  )
}

function SearchBar() {
  return (
    <HStack 
        w={'80%'} 
        px={2} 
        spacing={2} 
        color={secondary} 
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