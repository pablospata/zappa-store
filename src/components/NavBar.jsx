import React from 'react'
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/react'
import CartWidget from './CartWidget'

const NavBar = () => {
  return (
    <div className='navbar'>
      <p className='logo'>Zappa-Store</p>
      <Menu>
        <MenuButton>
          Categorías
        </MenuButton>
        <MenuList>
          <MenuItem>Deportivos</MenuItem>
          <MenuItem>Casuales</MenuItem>
          <MenuItem>Formales</MenuItem>
        </MenuList>
      </Menu>
      <CartWidget/>
    </div>
  )
}

export default NavBar