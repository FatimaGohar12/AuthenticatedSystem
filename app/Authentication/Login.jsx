'use client'
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
} from '@chakra-ui/react';
import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';
const Login = () => {


    return (
        <Flex

            align='center'
            justify='center'

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
        </Flex >
    );
};

export default Login;