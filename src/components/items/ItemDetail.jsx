import React from 'react'
import { Card, CardBody, Stack, Heading, Text, Divider, CardFooter, ButtonGroup } from '@chakra-ui/react'
import ItemCount from './ItemCount'

const ItemDetail = ({ producto }) => {

  return (
    <Card maxW='sm' margin='100px' alignItems="center" boxShadow='0px 0px 10px 0px'>
      <CardBody>
        <Stack mt='6' spacing='3'>
          <Heading size='md'>{producto.titulo}</Heading>
          <Text>
            {producto.descripcion}
          </Text>
          <Text color='blue.600' fontSize='2xl'>
            ${producto.precio}
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ItemCount />
      </CardFooter>
    </Card>
  )
}

export default ItemDetail

