import React from 'react'
import CartWidget from './CartWidget'
import { Flex, Spacer, Box, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <Flex>
                <Box p='4' bg='blue.400'>
                    My Ecommerce
                </Box>
                <Spacer />

                <Menu>
                    <MenuButton>
                        Categorias
                    </MenuButton>
                    <MenuList>
                        <MenuItem>1</MenuItem>
                        <MenuItem>2</MenuItem>
                        <MenuItem>3</MenuItem>
                        <MenuItem>4</MenuItem>
                        <MenuItem>5</MenuItem>
                    </MenuList>
                </Menu>

                <Spacer />
                <Link to= {"/cart"}>
                    <Box p='4' bg='purple.400'>
                        <CartWidget />
                    </Box>
                </Link>
            </Flex>

        </div>
    )
}

export default Navbar