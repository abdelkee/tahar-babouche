import { HStack } from "@chakra-ui/react";
import { FaBoxes, FaMoneyBillWave, FaBox } from "react-icons/fa";
import { BiCoin, BiCog } from "react-icons/bi";

import { myTheme } from '../utils/theme';
import Icon from "./Icon";


export default function NavBar() {
  
  return (
    <HStack 
      w={'full'}
      h={'56px'}
      position={'fixed'}
      zIndex={'3'}
      bottom={0}
      left={0}
      bg={'white'}
      borderTop={'1px'}
      borderTopColor={myTheme.colors.shade}
      color={myTheme.colors.accent2}
      align={'center'}
      justify={'space-evenly'} >

          <Icon icon={<FaBoxes/>} name='stock' path={'/'} />
          <Icon icon={<FaBox/>} name='order' path={'/order'} />
          <Icon icon={<FaMoneyBillWave/>} name='sale' path={'/sale'} />
          <Icon icon={<BiCoin/>} name='expense' path={'/expense'} />
          <Icon icon={<BiCog/>} name='settings' path={'/settings'} />
    </HStack>
  )
}
