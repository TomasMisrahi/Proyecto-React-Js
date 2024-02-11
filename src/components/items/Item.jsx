import React from 'react'
import { Card, CardBody, Stack, Heading, Divider, CardFooter, ButtonGroup, Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom'


const Item = ({ titulo, id }) => {
    return (
        <Card maxW='sm' margin='80px' alignItems="center" boxShadow='0px 0px 10px 0px'>
            <CardBody>
                <Stack mt='6' spacing='3'>
                    <Heading size='md'>{titulo}</Heading>
                </Stack> 
            </CardBody>
            <Divider />
            <CardFooter>
                <ButtonGroup spacing='2'>
                    <Button>
                        <Link to={`/producto/${id} `}>
                            Ver detalle
                        </Link>
                    </Button>
                </ButtonGroup>
            </CardFooter> 
        </Card>
    )
}

export default Item

