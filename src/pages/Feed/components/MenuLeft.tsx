import { Text ,Center, VStack, Box } from'@chakra-ui/react'

import { Icon } from '@chakra-ui/react'
import { MdReceipt } from 'react-icons/md'
import { BiHash } from 'react-icons/bi'
import { AiOutlineBell, AiOutlineMessage } from 'react-icons/ai'
import { CgProfile } from 'react-icons/cg'
import { FiSettings } from 'react-icons/fi'



const ButtonMenuLeft = (props: {title: string, icon: any}) => {
  return (
    <Center 
      justifyContent='start' 
      width='100%' 
      padding='4% 10% 4% 0%'
      borderRadius='27px' 
      border='2px solid #65778655' 
      cursor='pointer' 
      _hover={{
      color: "#E1E8ED",
      borderColor: "#1DA1F2",
    }}>
      <Box marginLeft='12%'>
        {props.icon}
      </Box>
      <Text fontSize={18} fontWeight='bold' color='#E1E8ED' marginLeft='13px'>
        {props.title}
      </Text>
    </Center>
  )
}

const MenuLeft = () => {
  const widthIcon = 30
  const color = '#1DA1F2'

  const buttons = [
    {
      title: 'Home',
      icon: <Icon as={MdReceipt} w={widthIcon} h={widthIcon} color={color} />,
    }, {
      title: 'Explore',
      icon: <Icon as={BiHash} w={widthIcon} h={widthIcon} color='#1DA1F2' />,
    }, {
      title: 'Messages',
      icon: <Icon as={AiOutlineMessage} w={widthIcon} h={widthIcon} color='#1DA1F2' />,
    }, {
      title: 'Notifications',
      icon: <Icon as={AiOutlineBell} w={widthIcon} h={widthIcon} color='#1DA1F2' />,
    }, {
      title: 'Profile',
      icon: <Icon as={CgProfile} w={widthIcon} h={widthIcon} color='#1DA1F2' />,
    }, {
      title: 'Settings',
      icon: <Icon as={FiSettings} w={widthIcon} h={widthIcon} color='#1DA1F2' />,
    }
  ]

  return (
    <VStack width="100%"  height='100%' position='sticky' top='100px' left='0' spacing={6}>
      {
        buttons.map(button => <ButtonMenuLeft title={button.title} icon={button.icon} />)
      }
    </VStack>
  )
}

export { MenuLeft }