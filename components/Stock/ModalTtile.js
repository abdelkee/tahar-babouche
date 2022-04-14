import { ModalHeader, Text } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { myTheme } from "../../utils/theme";

export default function ModalTtile() {
  const { productSelected } = useSelector(state => state.stockSlice);

  return (
    <ModalHeader
        textAlign={'center'}
        textTransform={'capitalize'}
        color={myTheme.colors.secondary}>
            <Text>{productSelected.category}</Text>
            <Text fontSize={'md'}>{productSelected.name}</Text>
    </ModalHeader>
  )
}
