import { Box } from "@chakra-ui/react";
import AppBar from "../components/Stock/AppBar";
import Body from "../components/Stock/Body";

import { myTheme } from '../utils/theme';
 
export default function Stock() {
  return (
    <Box bg={myTheme.colors.bg} h={'full'} w={'full'} py={4}>
        <AppBar/>
        <Body/>
    </Box>
  )
}
