import React from 'react'
import { Spinner, Flex } from '@chakra-ui/react'

const Loader = () => {
    return (
        <div>
            <Flex align="center" justify="end">
                <Spinner
                    marginTop='20px'
                    marginRight='15px'
                    thickness='4px'
                    speed='0.65s'
                    emptyColor='gray.200'
                    color='blue.500'
                    size='xl'
                />
            </Flex>
        </div>
    )
}

export default Loader