import { HStack } from "@chakra-ui/react";
import CategoryTag from "./CategoryTag";

const categories = [
    'dambira',
    'maqloba',
    'pointu',
    'sabo',
    'sandala',
    'sbat'
  ]
  
export default function CategoryList() {
  return (
    <HStack overflowX={'auto'} w={'full'} px={2}>
        {categories.map(category => (
          <CategoryTag key={category} name={category} src={`./images/${category}.jpg`} />
        ))}
    </HStack>
  )
}
