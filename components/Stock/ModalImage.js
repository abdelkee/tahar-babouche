import { AspectRatio, Image } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { myTheme } from "../../utils/theme";

export default function ModalImage() {
    const { productSelected } = useSelector(state => state.stockSlice);
  return (
    <AspectRatio 
        w={'25%'} 
        ratio={4/3} 
        bg={'white'}
        shadow={'md'} 
        position={'absolute'} 
        top={-4} 
        left={4}
        borderRadius={'md'}
        border={'1px'}
        borderColor={myTheme.colors.shade} >

            <Image src={productSelected.image} objectFit={'cover'} borderRadius={'md'}/>
    </AspectRatio>
  )
}
