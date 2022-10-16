import { Box, VStack, Flex } from'@chakra-ui/react'

import { MenuLeft } from './components/MenuLeft';
import { NewPostInput } from './components/NewPostInput';
import { Post } from './components/Post';

function App() {
  return (
    <Flex width='100%' backgroundColor='black' justifyContent='center'>
      <Flex width="70%" backgroundColor='black' height='100%' alignItems='start'>
        <VStack width="20%"  height='100%' position='sticky' top='100px' left='0'>
          <MenuLeft />
        </VStack>
        <VStack width="60%" height='100%' spacing={20} borderLeft='2px solid #65778655' borderRight='2px solid #65778655'>
          <NewPostInput />
          {
            new Array(200).fill('').map(_ => (<Post />))
          }
        </VStack>
        <VStack width="20%" backgroundColor='yellow' height='100%' position='sticky' top='100px' left='0'>
          <Box w='40px' h='40px' bg='yellow.200'>
            1
          </Box>
        </VStack>
      </Flex>
    </Flex>
  );
}

export default App;
