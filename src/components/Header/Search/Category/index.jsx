import React, { useState } from "react";
import { styled, alpha } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const StyledMenu = styled(Menu)(({ theme }) => ({
  "& .MuiPaper-root": {
    backgroundColor: "#1d40af",
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color: "white",
    boxShadow:
      "rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "&:active": {
        backgroundColor: alpha(theme.palette.primary.main, 0.8),
      },
    },
  },
}));

export default function Category() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        sx={{ display: { sm: "flex", xs: "none" } }}
        id="demo-customized-button"
        aria-controls={open ? "demo-customized-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        disableElevation
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />}
        style={{ backgroundColor: "#F4F5F6", color: "black", textTransform: "none" }}
      >
        Categories
      </Button>
      <StyledMenu
        id="demo-customized-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        {["Category 1", "Category 2", "Category 3", "Category 4"].map((category, index) => (
          <MenuItem key={index} onClick={handleClose} disableRipple>
            {category}
          </MenuItem>
        ))}
      </StyledMenu>
    </div>
  );
}
