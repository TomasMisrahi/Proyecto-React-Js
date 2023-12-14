import React from 'react'
import CartWidget from './CartWidget'
import { Flex, Spacer, Box, Menu, MenuButton, MenuList, MenuItem} from '@chakra-ui/react'

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

                <Box p='4' bg='purple.400'>
                    <CartWidget />
                </Box>
            </Flex>

        </div>
    )
}

export default Navbar