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
      <div className='logo'>
        <p>Zappa-Store</p>
        <span class="material-symbols-outlined">
          steps
        </span>
      </div>

      <Menu>
        <MenuButton>
          Categorías
          <span class="material-symbols-outlined">
            arrow_drop_down
          </span>
        </MenuButton>
        <div className='categorias'>
          <MenuList>
            <MenuItem>Deportivos</MenuItem>
            <MenuItem>Casuales</MenuItem>
            <MenuItem>Formales</MenuItem>
          </MenuList>
        </div>
      </Menu>
      <CartWidget />
    </div>
  )
}

export default NavBar