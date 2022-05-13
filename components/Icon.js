import { Center } from "@chakra-ui/react";
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
    <Link href={path} passHref>
      <Center
        onClick={handleClick}
        p={3}
        fontSize={activePage === name ? '24px' : '22px'}
        h={'full'}
        flex={'1'}
        borderTop={activePage === name && '2px'}
        borderTopColor={primary}
        color={shade}
        opacity={activePage === name ? 1 : 0.2}>
            {icon}
      </Center>
    </Link>
  )
}
