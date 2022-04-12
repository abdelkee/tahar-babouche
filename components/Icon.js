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
        p={3}
        fontSize={'24px'}
        h={'full'}
        borderTop={activePage === name && '2px'}
        borderTopColor={myTheme.colors.primary}
        color={activePage === name ? myTheme.colors.secondary : myTheme.colors.shade}>
            {icon}
      </Box>
    </Link>
  )
}
