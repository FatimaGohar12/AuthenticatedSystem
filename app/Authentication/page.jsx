
'use client'
import React, { useState } from 'react'
import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Stack,
    Button,
    Heading,
    Text,
    HStack,
    IconButton,
} from '@chakra-ui/react'
import ReactCardFlip from 'react-card-flip';
import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';
const Authentication = () => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleFlip = () => {
        setIsFlipped((prevState) => !prevState);
    };
    return (
        <>
            <Flex
                backgroundColor="#ecf0f3"

                border="2px solid white"
                borderRadius="12px"
                height="550px"
                width="70%"
                margin=" 22px auto"
                justifyContent="center"
                alignItems="center"
                boxShadow="10px 10px 10px #ecf0f3, -10px -10px 10px #f9f9f9"

            >
                {/* SIGNUP-FLEX */}
                <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
                    <Flex
                        border="1px solid blue"
                        width="90%"
                        height="480px" rounded={'lg'}
                        justifyContent="center"
                        alignItems="center"
                        boxShadow={'lg'}
                        backgroundColor="white"

                    >
                        <Stack >
                            <Stack align='center'>
                                <Heading fontSize='3xl'>Sign in to Website</Heading>
                                {/* <Text fontSize='lg' color='gray.600'>
                        to enjoy all of our cool <span style={{ color: 'blue.400' }}>features</span> ✌️
                    </Text> */}
                                <HStack spacing={4}>
                                    <IconButton
                                        aria-label="Facebook"
                                        icon={<FaFacebook />}
                                        isRound
                                        size="lg"
                                        colorScheme="facebook"
                                    />
                                    <IconButton
                                        aria-label="LinkedIn"
                                        icon={<FaLinkedin />}
                                        isRound
                                        size="lg"
                                        colorScheme="linkedin"
                                    />
                                    <IconButton
                                        aria-label="Twitter"
                                        icon={<FaTwitter />}
                                        isRound
                                        size="lg"
                                        colorScheme="twitter"
                                    />
                                </HStack>
                            </Stack>
                            <Box
                                rounded={'lg'}

                                boxShadow={'lg'}
                                p={8}
                            >
                                <Stack spacing={4}>
                                    <FormControl id="email">
                                        <FormLabel>Email address</FormLabel>
                                        <Input
                                            type="email"
                                            width="350px"
                                            height="40px"


                                        />
                                    </FormControl>
                                    <FormControl id="password">
                                        <FormLabel>Password</FormLabel>
                                        <Input
                                            type="password"


                                        />
                                    </FormControl>
                                    <Text fontSize="sm" mt="2">
                                        ForgetPassword
                                    </Text>
                                    <Stack spacing={10}>
                                        <Button
                                            onClick={handleFlip}
                                            bg={'#4B70E2'}
                                            color={'white'}
                                            _hover={{
                                                bg: 'blue.500',
                                            }}
                                            width="180px"
                                            height="50px"
                                            boxShadow="8px 8px 16px #d1d9e6,
                                -8px -8px 16px #f9f9f9"
                                            borderRadius="25px"



                                        >
                                            SIGNIN
                                        </Button>
                                    </Stack>
                                </Stack>
                            </Box>
                        </Stack >
                    </Flex>
                    {/* LOGIN-FLEX */}
                    <Flex
                        border="1px solid blue"
                        width="80%"
                        height="480px"
                        rounded={'lg'}
                        boxShadow={'lg'}
                        backgroundColor="white"
                        alignItems="center"

                    >

                        <Stack spacing={8} mx='auto' maxW='lg' py={12} px={6}>
                            <Stack align='center'>
                                <Heading fontSize='3xl'>Hello Friends</Heading>
                                <Text fontSize='lg' color='gray.600'

                                    textAlign="center">
                                    Enter Your Personal Details start journey with Us
                                </Text>
                                <Stack spacing={10}>
                                    <Button
                                        onClick={handleFlip}
                                        bg={'#4B70E2'}
                                        color={'white'}
                                        _hover={{
                                            bg: 'blue.500',
                                        }}
                                        width="180px"
                                        height="50px"
                                        boxShadow="8px 8px 16px #d1d9e6,
                                -8px -8px 16px #f9f9f9"
                                        borderRadius="25px"



                                    >
                                        SIGNUP
                                    </Button>
                                </Stack>
                            </Stack>

                        </Stack >
                    </Flex>
                </ReactCardFlip>
            </Flex>
        </>
    )
}

export default Authentication
