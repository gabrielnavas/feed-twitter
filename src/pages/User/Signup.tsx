import { VStack, Flex, Box, Checkbox, Button, HStack, Heading } from'@chakra-ui/react'
import { Input, Text } from '@chakra-ui/react'
import { useState } from 'react'

import { Link as LinkReactDom } from 'react-router-dom'

const SignUp = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirmation, setPasswordConfirmation] = useState('')

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
              <Heading as='h2' size='2xl' noOfLines={1} color='lightblue'>
                Sign up
              </Heading>
            </Text>
          </Box>
          <Box width='100%'>
            <Text mb='8px'>Name:</Text>
            <Input
              type='text'
              value={firstName}
              onChange={e => setFirstName(e.target.value)}
              placeholder='John'
            />
          </Box>
          <Box width='100%'>
            <Text mb='8px'>Lastname:</Text>
            <Input
              type='text'
              value={lastName}
              onChange={e => setLastName(e.target.value)}
              placeholder='Smith'
            />
          </Box>
          <Box width='100%'>
            <Text mb='8px'>E-mail:</Text>
            <Input
              type='email'
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder='johnsmith@email.com'
            />
          </Box>
          <Box width='100%'>
            <Text mb='8px'>Username:</Text>
            <Input
              type='text'
              value={username}
              onChange={e => setUsername(e.target.value)}
              placeholder='johnsmith'
            />
          </Box>
          <Box width='100%'>
            <Text mb='8px'>Password:</Text>
            <Input
              type='password'
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder='********'
            />
          </Box>
          <Box width='100%'>
            <Text mb='8px'>Password confirmation:</Text>
            <Input
              type='password'
              value={passwordConfirmation}
              onChange={e => setPasswordConfirmation(e.target.value)}
              placeholder='********'
            />
          </Box>
          <Box width='100%'>
            <Checkbox defaultChecked>Approved with <LinkReactDom to='term_of_use'>terms of use</LinkReactDom></Checkbox>
          </Box>
          <Flex width='100%' justifyContent='flex-end'>
            <Button colorScheme='blue' marginRight={['50px', '10px']}>Signup</Button>
          </Flex>
        </VStack>
    </Flex>
  )
}

export default SignUp