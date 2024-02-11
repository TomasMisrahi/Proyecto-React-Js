import React from 'react'
import CartWidget from './CartWidget'
import { Flex, Spacer, Box, Menu, MenuButton, MenuList, MenuItem, Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <Flex bg='#B4B4B4' alignItems="center">
                <Link to={"/"}>
                    <Box w='100px' h='100' bg='#3D5FC8 ' justifyContent="center">
                        Mi Ecommerce
                    </Box>
                </Link>
                <Spacer />

                <Menu>
                    <MenuButton as={Button} bg='#3D5FC8 '>
                        Categorias
                    </MenuButton>
                    <MenuList>
                        <Link to={"/categoria/A"}>
                            <MenuItem>Nike Air Force</MenuItem>
                        </Link>
                        <Link to={"/categoria/B"}>
                            <MenuItem>Nike Jordan</MenuItem>
                        </Link>
                        <Link to={"/categoria/C"}>
                            <MenuItem>Nike Dunk</MenuItem>
                        </Link>
                    </MenuList>
                </Menu>

                <Spacer />
                <Link to={"/cart"}>
                    <Box w='220px' h='100' bg='#3D5FC8 '>
                        <CartWidget />
                    </Box>
                </Link>
            </Flex>
        </div>
    )
}

export default Navbar