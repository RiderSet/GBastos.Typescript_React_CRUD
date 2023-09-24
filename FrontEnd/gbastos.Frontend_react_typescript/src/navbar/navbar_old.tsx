import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import './navbar.scss';

const options = [
  'Incluir nova categoria',
  'Atualizar Categoria',
  'Deletar Categoria',
];

export default function Navbar() {

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  const open = Boolean(anchorEl);
  const handleClickListItem = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (
    event: React.MouseEvent<HTMLElement>,
    index: number,
  ) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
   <div>
     <List component="nav" aria-label="Device settings" sx={{ bgcolor: 'background.paper' }} >
        <ListItem id="lock-button" aria-haspopup="listbox" aria-controls="lock-menu" aria-label="Nova" aria-expanded={open ? 'true' : undefined} onClick={handleClickListItem}>
           <ListItemText primary="Incluir categoria" secondary={options[0]} />
        </ListItem>
        <ListItem id="lock-button" aria-haspopup="listbox" aria-controls="lock-menu" aria-label="Nova" aria-expanded={open ? 'true' : undefined} onClick={handleClickListItem}>
           <ListItemText primary="Alterar Categoria" secondary={options[1]} />
        </ListItem>
        <ListItem id="lock-button" aria-haspopup="listbox" aria-controls="lock-menu" aria-label="Nova" aria-expanded={open ? 'true' : undefined} onClick={handleClickListItem}>
           <ListItemText primary="Excluir Categoria" secondary={options[2]} />
        </ListItem>
     </List>
     <Menu id="lock-menu" anchorEl={anchorEl} open={open} onClose={handleClose} MenuListProps={{ 'aria-labelledby': 'lock-button', role: 'listbox',}} >
       {options.map((option, index) => (
         <MenuItem key={option} disabled={index === 0} selected={index === selectedIndex} onClick={(event) => handleMenuItemClick(event, index)} >{option}</MenuItem>
       ))}
     </Menu>
   </div>
 );
}