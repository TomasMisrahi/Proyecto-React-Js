import React from 'react'
import { Card, CardBody, Stack, Heading, Text, Divider, CardFooter, ButtonGroup, } from '@chakra-ui/react' 
import ItemCount from './ItemCount'


//<Image src={airForceBW} borderRadius='lg'/>   

const Item = () => {
    return (
        <Card maxW='sm'>
            <CardBody>             
                <Stack mt='6' spacing='3'>
                    <Heading size='md'>Living room Sofa</Heading>
                    <Text>
                        This sofa is perfect for modern tropical spaces, baroque inspired
                        spaces, earthy toned spaces and for people who love a chic design with a
                        sprinkle of vintage design.
                    </Text>
                    <Text color='blue.600' fontSize='2xl'>
                        $450
                    </Text>
                </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
                <ButtonGroup spacing='2'>
                    <ItemCount />
                </ButtonGroup>
            </CardFooter>
        </Card>
    )
}

export default Item