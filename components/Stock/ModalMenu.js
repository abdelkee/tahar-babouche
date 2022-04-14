import { Box, useDisclosure } from "@chakra-ui/react";
import { myTheme } from "../../utils/theme";
import AcordionBody from "./AcordionBody";
import AcordionHeader from "./AcordionHeader";

export default function ModalMenu({color}) {
  const { isOpen, onToggle } = useDisclosure()

  return (
    <Box w={'100%'} color={myTheme.colors.secondary}>
        <AcordionHeader onToggle={onToggle} isOpen={isOpen} color={color}/>
        <AcordionBody isOpen={isOpen} color={color} />
    </Box>
  )
}
