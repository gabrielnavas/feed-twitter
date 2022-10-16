import { Button, Textarea, Avatar, Box, HStack, VStack } from'@chakra-ui/react'

import { Icon } from '@chakra-ui/react'
import { useState } from 'react'
import { GoFileMedia } from 'react-icons/go'


const PostLeftSide = (props: {urlPhoto: string}) => {
  return (
    <VStack w='20%' justifyContent='flex-start' height='100%'>
      <Avatar marginRight='5px' width='55%' height='55%' borderRadius='50%' name='Dan Abrahmov' src={props.urlPhoto} />
    </VStack>
  )
}

const IconAction = (props: {icon: any}) => {
  return (
    <Box>
      <Icon 
        as={props.icon} 
        w={10} 
        h={10} 
        color='#1DA1F2'
        cursor='pointer' 
        _hover={{
        color: "#E1E8ED",
        borderColor: "#1DA1F2",
        backgroundColor:'#65778655',
        borderRadius: '40%',
      }} />
    </Box>
  )
}

const ActionsNewPost = () => {
  return (
    <HStack>
      <IconAction icon={GoFileMedia} />
    </HStack>
  )
}

const ButtonNewPostFinish = () => {
  return (
    <Button 
      colorScheme='blue' 
      padding='25px 35px 25px 35px'
      fontSize={22}>
      Postar
    </Button>
  )
}

const BottomNewPost = () => {
  return (
    <HStack justifyContent='space-between' width='100%'>
      <ActionsNewPost />
      <ButtonNewPostFinish />
    </HStack> 
  )
}

const TextAreaNewPost = () => {
  const [textPost, setTextPost] = useState('')

  return (
    <Textarea
      value={textPost}
      onChange={e => setTextPost(e.target.value)}
      placeholder='Here is a sample placeholder'
      minH='150px'
      w='100%'
      borderRadius='20px'
      padding={5}
      fontWeight='400'
      fontSize={25}
      outline='none'
      color='white'
      _hover={{
        color: "#E1E8ED",
        borderColor: "#1DA1F2",
      }}
      bg='black'
    />
  )
}

const PostRightSide = (props: {}) => {
  return (
    <VStack w='80%'>
      <Box w='100%'>
        <TextAreaNewPost />
      </Box>
      <BottomNewPost />
    </VStack>
  )
}

const NewPostInput = () => {
  return (
    <HStack w='100%' paddingLeft='10%' paddingRight='10%' paddingTop='1.5%' paddingBottom='.5%' borderTop='2px solid #65778655'>
      <PostLeftSide urlPhoto='https://bit.ly/dan-abramov' />
      <PostRightSide />
    </HStack>
  )
}

export { NewPostInput }