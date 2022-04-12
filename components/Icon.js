import { Box } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";

import { myTheme } from "../utils/theme";
import { setActivePage } from "../redux/reducers/globalReducer";
import Link from "next/link";

export default function Icon({icon, name, path}) {
  const { activePage } = useSelector(state => state.globalSlice);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setActivePage(name)) 
  }

  
  return (
    <Link href={path}>
      <Box
        onClick={handleClick}
        bg={myTheme.colors.secondary}
        p={3}
        border={'1px'}
        borderColor={activePage === name ? 'white' : 'transparent'}
        borderRadius={'50%'} 
        fontSize={'24px'} 
        color={activePage === name ? 'white' : myTheme.colors.accent2}>
            {icon}
      </Box>
    </Link>
  )
}
