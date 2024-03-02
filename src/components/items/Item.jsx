import React from 'react'
import { Card, CardBody, Stack, Heading, Divider, CardFooter, ButtonGroup, Button, Image } from '@chakra-ui/react'
import { Link } from 'react-router-dom'


const Item = ({ nombre, imagen, id }) => {
    return (
        <Card maxW='sm' margin='80px' alignItems="center" boxShadow='0px 0px 10px 0px'>
            <CardBody>
                <Stack mt='6' spacing='3'>
                    <Image src={imagen} alt={nombre} borderRadius='md' />
                    <Heading size='md'>
                        {nombre}
                    </Heading>
                </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
                <ButtonGroup spacing='2'>
                    <Button>
                        <Link to={`/item/${id}`}>
                            Ver detalle
                        </Link>
                    </Button>
                </ButtonGroup>
            </CardFooter>
        </Card>
    )
}

export default Item

