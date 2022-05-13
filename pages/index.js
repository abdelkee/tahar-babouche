import { Box } from "@chakra-ui/react";
import AppBar from "../components/Stock/AppBar";
import Body from "../components/Stock/Body";
import { bg } from "../utils/theme";
 
export default function Stock() {

  return (
    <Box bg={bg} h={'full'} w={'full'} py={4}>
        <AppBar/>
        <Body/>
    </Box>
  )
}
