import { VStack, Flex, Box, Checkbox, Button, HStack, Heading, useMediaQuery } from'@chakra-ui/react'
import { Input, Text } from '@chakra-ui/react'
import { useEffect, useState } from 'react'

import { Link as LinkReactDom } from 'react-router-dom'
import { useClipboardContents } from './getClipboardContents'

const SignUpConfirmationCode = () => {
  const [codeConfirmation, setCodeConfirmation] = useState(['','','','','',''])
  const [isLargerThanHD] = useMediaQuery([
    '(min-width: 1000px)',
  ])
  const getClipboard = useClipboardContents()

  useEffect(() => {
    let allZero = true
    for (let i = 0; i < codeConfirmation.length; i++) {
      if(codeConfirmation[i] !== '') {
        allZero = false
        console.log(codeConfirmation);
        
      }
    }
  }, [codeConfirmation])

  const handleKeyDown = async (event: any, indexInput: number)=>{
    event.preventDefault();
    let charCode = String.fromCharCode(event.which).toLowerCase();
    if((event.ctrlKey || event.metaKey) && charCode === 'v') {
      const textClipBoard = await getClipboard()
      const codeConfirmationCopy = [...codeConfirmation]
      for (let i = indexInput; i < codeConfirmationCopy.length; i++) {
        codeConfirmationCopy[i] = textClipBoard.charAt(i)
      }
      setCodeConfirmation(codeConfirmationCopy)
    }
  }

  return (
    <Flex  minH='100vh' backgroundColor='black' justifyContent='center' >
      <VStack 
        spacing={5} 
        alignSelf='center'
        width={['200px', '400px', '800px']} 
        margin='50px' 
        border={isLargerThanHD ? '2px solid lightblue' : 'none'} 
        padding={20}
        borderRadius={20}>
        <Heading as='h6' fontSize='20px' color='lightblue'>
          Confirm the code sent to the registered email
        </Heading>
        <HStack width='100%' spacing={5} justifyContent='center' alignItems='center' marginTop='5px'>
          {
            new Array(6)
              .fill('')
              .map((_, index) => (
                <Input
                  onKeyDown={event => handleKeyDown(event, index)} 
                  width={isLargerThanHD ? 50 : 20}
                  textAlign='center'
                  fontSize={isLargerThanHD ? 50: 5}
                  padding={isLargerThanHD ? '40px 5px 40px 0px' : 'none'}
                  type='text'
                  value={codeConfirmation[index]}
                  onChange={e => {
                    const value = e.target.value && e.target.value.length > 0 ? e.target.value[0] : e.target.value
                    const codeConfirmationCopy = [...codeConfirmation]
                    codeConfirmationCopy[index] = String(value)
                    setCodeConfirmation(codeConfirmationCopy)
                    console.log(codeConfirmationCopy);
                  }}
                  placeholder='John'
                />
              ))
          }
        </HStack>
        {/* <Flex width='100%' justifyContent='flex-end' paddingRight='3em'>
          <Button colorScheme='blue' marginRight={['50px', '10px']}>Signup</Button>
        </Flex> */}
      </VStack>
    </Flex>
  )
}

export default SignUpConfirmationCode