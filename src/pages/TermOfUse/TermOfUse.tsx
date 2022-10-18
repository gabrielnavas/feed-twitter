import { VStack, Text, Flex, Box, Button } from'@chakra-ui/react'
import { Link } from 'react-router-dom'

const TermOfUse = () => {
  

  return (
    <Flex width='100vw' height='100vh' backgroundColor='black' justifyContent='center'>
      <VStack width="20%"  height='100%' position='sticky' top='100px' left='0'>
        <VStack padding='50px' spacing={5}>
          <Box>
            <Text>blablalb</Text>
          </Box>
          <Box>
            <Link to='signup'>
              <Button>Signup</Button>
            </Link>
          </Box>
        </VStack>
      </VStack>
    </Flex>
  )
}

export default TermOfUse