import { Link, Avatar, Box, Text, HStack, VStack } from'@chakra-ui/react'

import { Icon } from '@chakra-ui/react'
import { AiOutlineHeart, AiOutlineShareAlt } from 'react-icons/ai'
import { BiCommentDetail } from 'react-icons/bi'

const PostLeftSide = (props: {urlPhoto: string}) => {
  return (
    <VStack height='100%'>
      <Avatar 
        w={36}
        h={36}
        borderRadius='50%' 
        name='Dan Abrahmov' 
        src={props.urlPhoto} />
    </VStack>
  )
}

const IconAction = (props: {icon: any}) => {
  return (
    <Box>
      <Icon 
        as={props.icon} 
        w={30} 
        h={30} 
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

const ActionsPost = () => {
  return (
    <HStack justifyContent='space-around' width='70%' paddingTop='3%'>
      <IconAction icon={BiCommentDetail} />
      <IconAction icon={AiOutlineShareAlt} />
      <IconAction icon={AiOutlineHeart} />
    </HStack>
  )
}

const PostRightSide = (props: {description: string, createdAt: Date}) => {
  return (
    <VStack height='100%'>
      <HStack width='100%' justifyContent='start' spacing={10}>
        <Link 
        fontSize={22} 
        fontFamily='sans-serif'
        fontWeight='bold' color='white'>
          Gabriel Navas
        </Link>
        <Text 
          fontSize={22} 
          fontFamily='sans-serif'
          color='white'>
            @gabnavas
        </Text>
        <Text 
        fontSize={21} 
        fontFamily='sans-serif'
        color='lightgray'>{props.createdAt.toString().split('T')[0]}</Text>
      </HStack>
      <Box>
        <Text
          fontSize={20} 
          fontFamily='sans-serif'
          color='white'> 
          {props.description}
        </Text>
      </Box>
      <ActionsPost />
    </VStack>
  )
}

type PropsPost = {
  description: string
  createdAt: Date
  id: number
}

const Post = (props: PropsPost) => {
  return (
    <HStack paddingLeft='10%' paddingRight='10%' paddingTop='3%' borderTop='2px solid #65778655'>
      <PostLeftSide urlPhoto='https://bit.ly/dan-abramov' />
      <PostRightSide description={props.description} createdAt={props.createdAt} />
    </HStack>
  )
}

export { Post }