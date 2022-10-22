import { useEffect, useState } from 'react';

import { VStack, Flex } from'@chakra-ui/react'

import { MenuLeft } from './components/MenuLeft';
import { NewPostInput } from './components/NewPostInput';
import { Post } from './components/Post';

type Post = {
  id: number
  description: string
  createdAt: Date
}

function Feed() {
  const [posts, setPosts] = useState<Post[]>([])

  const getAllPosts = async () => {
    const resp = await fetch('http://localhost:4000/post')
    const posts = resp.json()
    return posts
  }

  useEffect(() => {
    (async () => {
      const posts = await getAllPosts()
      setPosts(posts)
    })()
  }, [])

  return (
    <Flex width='100%' minH='100vh' backgroundColor='black' justifyContent='center'>
      <Flex width="70%" backgroundColor='black' height='100%' alignItems='start'>
        <VStack width="20%" height='100%' position='sticky' top='100px' left='0' marginRight='1em'>
          <MenuLeft />
        </VStack>
        <VStack 
          width="60%" 
          minH='100vh' 
          height='100%' 
          spacing={20} 
          borderLeft='2px solid #65778655' 
          borderRight='2px solid #65778655'>
          <NewPostInput />
          {
            posts.map(post => (
              <Post 
                key={post.id + post.createdAt.toString()} 
                description={post.description}
                createdAt={post.createdAt}
                id={post.id} 
              />))
          }
        </VStack>
        {/* <VStack width="20%" backgroundColor='yellow' height='100%' position='sticky' top='100px' left='0'>
          <Box w='40px' h='40px' bg='yellow.200'>
            1
          </Box>
        </VStack> */}
      </Flex>
    </Flex>
  );
}

export default Feed;
