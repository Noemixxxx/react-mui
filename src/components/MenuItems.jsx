import React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import PinDropIcon from '@mui/icons-material/PinDrop';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import { useNavigate } from "react-router-dom";
import MaterialUIPickers from "./Horas";
import { Stack } from "@mui/system";

const MenuItems = () => {
  const navigate = useNavigate();
  return (
   < Stack spacing={3}>
    {/* <ListItemButton  onClick={() => navigate("/reports")}>
        <ListItemIcon>
          <PermIdentityIcon />
        </ListItemIcon>
        <ListItemText primary="Iniciá Sesión" />
      </ListItemButton> */}

    <React.Fragment>
       <ListItemButton onClick={() => navigate("/")}>
         <ListItemIcon>
          <PinDropIcon />
        </ListItemIcon>
        <ListItemText primary="Alojamientos" />
      </ListItemButton>

      <ListItemButton onClick={() => navigate("/notes")}>
        <ListItemIcon>
          <CreditCardIcon />
        </ListItemIcon>
        <ListItemText primary="Forma de Pago" />
      </ListItemButton>

      
      
        <MaterialUIPickers></MaterialUIPickers>

    </React.Fragment>
    </Stack>
  );
};

export default MenuItems;
