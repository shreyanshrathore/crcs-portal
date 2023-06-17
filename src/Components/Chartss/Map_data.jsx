import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import CottageIcon from '@mui/icons-material/Cottage';
import PublicIcon from '@mui/icons-material/Public';
import Info from './Map_data_info' 


export default function NestedList({data}) {
  const [open, setOpen] = React.useState(true);
  const { name, val } = data;

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      <ListItemButton>
        <ListItemIcon>
          <PublicIcon />
        </ListItemIcon>
        <ListItemText primary={`State: ${name}`} />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
        <CottageIcon />
        </ListItemIcon>
        <ListItemText primary={`No. of Societies: ${val}`} />
      </ListItemButton>
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Inbox" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
            {/* <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <StarBorder />
              </ListItemIcon>
              <ListItemText primary="Starred" />
            </ListItemButton> */}
            <Info name = {name}/>
        </List>
      </Collapse>
    </List>
  );
}