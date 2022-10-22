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
        w={7} 
        h={7} 
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

const ButtonNewPostFinish = (props: {onClick: Function}) => {
  return (
    <Button 
      colorScheme='blue' 
      padding='22px 32px 22px 32px'
      fontSize={18}
      onClick={() => props.onClick()}
      >
      Postar
    </Button>
  )
}

const BottomNewPost = (props: {onClick: Function}) => {
  return (
    <HStack justifyContent='space-between' width='100%'>
      <ActionsNewPost />
      <ButtonNewPostFinish onClick={props.onClick} />
    </HStack> 
  )
}

const TextAreaNewPost = (props: {description: string, onChange: Function}) => {
  return (
    <Textarea
      value={props.description}
      onChange={e => props.onChange(e.target.value)}
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
  const [description, setDescription] = useState('')

  console.log(description);
  

  const createPost = async () => {
    const respUsers = await fetch('http://localhost:4000/user')
    const users = await respUsers.json()
    const user = users[0]

    const respPost = await fetch('http://localhost:4000/post', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({description, userId: user.id})
    })
    const post = respPost.json()
    return post
  } 
  
  return (
    <VStack w='80%'>
      <Box w='100%'>
        <TextAreaNewPost description={description} onChange={(text: string) => setDescription(text)} />
      </Box>
      <BottomNewPost onClick={createPost} />
    </VStack>
  )
}

const NewPostInput = () => {
  return (
    <HStack 
      w='100%' 
      paddingLeft='10%' 
      paddingRight='10%'
      paddingTop='1.5%' 
      paddingBottom='.5%' 
      borderTop='2px solid #65778655'>
      <PostLeftSide urlPhoto='https://bit.ly/dan-abramov' />
      <PostRightSide />
    </HStack>
  )
}

export { NewPostInput }