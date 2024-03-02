import { useEffect, useState } from 'react';
import { Card, CardBody, Stack, Heading, Text, Divider, CardFooter, Container, Image } from '@chakra-ui/react'
import { useParams } from 'react-router-dom';
import { doc, getDoc, getFirestore } from 'firebase/firestore';
import ItemCount from './ItemCount';

const ItemDetail = ({ items }) => {
  const { id } = useParams();
  const [item, setItem] = useState([]);

  useEffect(() => {
    const db = getFirestore();
    const ropaRef = doc(db, "zapatillas", `${id}`);

    getDoc(ropaRef).then((snapshot) => {
      if (snapshot.exists()) {
        setItem(snapshot.data());
      } else {
        console.log("Error: No se encuentra el producto");
      }
    });
  }, [id]);

  const itemFilter = items.filter((item) => item.id == id);

  return (
    <Container maxW='xl' mt='8'>
      {itemFilter.map((item) => (
        <div key={item.id}>
          <Card maxW='sm' margin='100px' alignItems="center" boxShadow='0px 0px 10px 0px'>
            <Image src={item.imagen} alt={item.nombre} borderRadius='lg' />
            <CardBody>
              <Stack mt='6' spacing='3'>
                <Heading size='md'>{item.nombre}</Heading>
                <Text>
                  {item.descripcion}
                </Text>
                <Text color='blue.600' fontSize='2xl'>
                  ${item.precio}
                </Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
              <ItemCount
                id={item.id}
                nombre={item.nombre}
                precio={item.precio}
                stock={item.stock}
                item={item}
                imagen={item.imagen}
              />
            </CardFooter>
          </Card>
        </div>
      ))}
    </Container>
  );
};

export default ItemDetail

