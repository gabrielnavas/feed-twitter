import { VStack, Flex, Box, Checkbox, Button, HStack, Heading } from'@chakra-ui/react'
import { Input, Text } from '@chakra-ui/react'
import { useState } from 'react'

import { Link as LinkReactDom } from 'react-router-dom'

const SignUpConfirmationCode = () => {
  const [codeConfirmation, setCodeConfirmation] = useState([0,0,0,0,0,0])

  const fontSize = 50
  const width = 20
  const padding = '40px 5px 40px 5px'

  return (
    <Flex  minH='100vh' backgroundColor='black' justifyContent='center' >
        <VStack 
          spacing={5} 
          width={['200px', '400px', '800px']} 
          margin='50px' border='2px solid lightblue'
          padding={20}
          borderRadius={20}>
          <Box>
            <Text>
              <Heading as='h4' size='1.5xl' noOfLines={1} color='lightblue'>
                Confirm the code sent to the registered email
              </Heading>
            </Text>
          </Box>
          <HStack width='100%' spacing={5} justifyContent='center'>
            {
              new Array(6)
                .fill('')
                .map((_, index) => (
                  <Input
                    width={width}
                    textAlign='center'
                    fontSize={fontSize}
                    padding={padding}
                    type='text'
                    value={codeConfirmation[0]}
                    // onChange={e => {
                    //   const codeConfirmationCopy = [...codeConfirmation]
                    //   codeConfirmationCopy[0] = Number(e.target.value)
                    //   setCodeConfirmation(codeConfirmation)
                    // }}
                    placeholder='John'
                  />
                ))
            }
          </HStack>
          {/* <Flex width='100%' justifyContent='flex-end'>
            <Button colorScheme='blue' marginRight={['50px', '10px']}>Signup</Button>
          </Flex> */}
        </VStack>
    </Flex>
  )
}

export default SignUpConfirmationCode