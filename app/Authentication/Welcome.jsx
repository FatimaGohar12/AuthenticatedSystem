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
const Welcome = () => {


    return (
        <Flex

            align='center'
            justify='center'

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
        </Flex >
    );
};

export default Welcome;