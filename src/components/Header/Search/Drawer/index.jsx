import React, { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";

export default function TemporaryDrawer() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen((prevState) => !prevState);
  };

  const list = (
    <Box
      sx={{ width: "auto" }}
      role="presentation"
      onClick={toggleDrawer}
      onKeyDown={toggleDrawer}
    >
      <List>
        {["Category 1", "Category 2", "Category 3", "Category 4"].map(
          (text, index) => (
            <ListItemButton key={text} disablePadding>
              <ListItemText primary={text} />
            </ListItemButton>
          )
        )}
      </List>
    </Box>
  );

  return (
    <Box>
      <Button onClick={toggleDrawer}>
        <MenuIcon />
      </Button>
      <Drawer anchor="top" open={isDrawerOpen} onClose={toggleDrawer}>
        {list}
      </Drawer>
    </Box>
  );
}
