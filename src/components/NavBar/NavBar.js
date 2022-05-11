import "../../css/NavBar.css";
import {useState} from "react";
import CartWidget from "../CartWidget/CartWidget";
import {Link } from "react-router-dom";
import {IconButton, Toolbar,Typography} from "@mui/material";
import { Box } from "@mui/system";
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const NavBar = () => {

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (e)=> {
    setAnchorEl(e.currentTarget); 
  }

  const openMenu = Boolean(anchorEl)

  const handleClose = ()=>{
    setAnchorEl(null)
  }

  return (

    <Box elevation={0} sx={{backgroundColor:"rgb(235, 57, 211)", width:"100%"}}>
      <Toolbar>
        <Box
         sx={{
           display:"flex",
           justifyContent:"space-between",
           alignItems:"center",
           width:"100%",
         }}
         component="div"
         >
           <Box>
             <IconButton aria-controls='basic-menu' aria-haspopup='true' aria-expanded={openMenu ? "true" : undefined} onClick={handleClick}>
               <MenuOutlinedIcon/>
             </IconButton>
              <Menu id='basic-menu'anchorEl={anchorEl} open={openMenu} onClose={handleClose} >
                  <MenuItem onClick={handleClose}><Link to="/">Inicio</Link></MenuItem>
                  <MenuItem onClick={handleClose}><Link to="categorias/hogar">Hogar</Link></MenuItem>
                  <MenuItem onClick={handleClose}><Link to="categorias/linea-Milano">Linea Milano</Link></MenuItem>
                  <MenuItem onClick={handleClose}><Link to="categorias/automovil">Automóvil</Link></MenuItem>
              </Menu>
           </Box>

           <Box>
            <Link to="/">
              <Typography  sx={{color:"white",fontSize:{xs:"18px", sm:"30px"}}}>La Boutique del Aroma </Typography>
            </Link>
           </Box>

           <Box>
            <Link to="/cart">
              <CartWidget/>
            </Link>
           </Box>
        </Box>
      </Toolbar>
    </Box>


  );
};

export default NavBar;









