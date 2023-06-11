import React, { useState } from 'react';
import More from "./More";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Box, Stack } from "@mui/material";

export default function Menu() {
  const [anchorElAbout, setAnchorElAbout] = useState(null);
  const [anchorElServices, setAnchorElServices] = useState(null);
  const [anchorElProducts, setAnchorElProducts] = useState(null);

  const handleClickAbout = (event) => {
    setAnchorElAbout(event.currentTarget);
  };

  const handleClickServices = (event) => {
    setAnchorElServices(event.currentTarget);
  };

  const handleClickProducts = (event) => {
     setAnchorElAbout(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorElAbout(null);
    setAnchorElServices(null);
    setAnchorElProducts(null);
  };

  const openAbout = Boolean(anchorElAbout);
  const openServices = Boolean(anchorElServices);
  const openProducts = Boolean(anchorElProducts);

  const idAbout = openAbout ? "about-popover" : undefined;
  const idServices = openServices ? "services-popover" : undefined;
  const idProducts = openProducts ? "products-popover" : undefined;

  return (
    <div className="container w-5/6 sm:w-full mx-auto">
      <div className="hidden sm:flex justify-between items-center py-3 text-sm">
        <div>
          <Button
            aria-describedby={idAbout}
            variant="text"
            size="small"
            onClick={handleClickAbout}
            className="hidden lg:flex"
          >
            About Us
          </Button>
          <Popover
            id={idAbout}
            open={openAbout}
            anchorEl={anchorElAbout}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
          >
            <Box sx={{ display: "flex", padding: "15px" }}>
              <Stack>
                <Typography variant="h6" sx={{ p: 2 }}>
                  Header
                </Typography>
                {Array(5)
                  .fill()
                  .map((_, index) => (
                    <Typography key={index} sx={{ p: 2 }}>
                      Subheader
                    </Typography>
                  ))}
              </Stack>
              <Stack>
                <Typography variant="h6" sx={{ p: 2 }}>
                  Header
                </Typography>
                {Array(5)
                  .fill()
                  .map((_, index) => (
                    <Typography key={index} sx={{ p: 2 }}>
                      Subheader
                    </Typography>
                  ))}
              </Stack>
              <img
                className="p-4 hidden xl:block"
                src="/subMenu.png"
                alt=""
              />
            </Box>
          </Popover>
        </div>
        <div direction="row" spacing={2} justifyContent="center">
          <Button
            aria-describedby={idServices}
            variant="text"
            size="small"
            onClick={handleClickServices}
            className="hidden lg:flex"
          >
            Services
          </Button>
          <Popover
            id={idServices}
            open={openServices}
            anchorEl={anchorElServices}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
          >
            <Box sx={{ display: "flex", padding: "15px" }}>
              <Stack>
                <Typography variant="h6" sx={{ p: 2 }}>
                  Services Header
                </Typography>
                {Array(5)
                  .fill()
                  .map((_, index) => (
                    <Typography key={index} sx={{ p: 2 }}>
                      Services Subheader
                    </Typography>
                  ))}
              </Stack>
              <Stack>
                <Typography variant="h6" sx={{ p: 2 }}>
                  Services Header
                </Typography>
                {Array(5)
                  .fill()
                  .map((_, index) => (
                    <Typography key={index} sx={{ p: 2 }}>
                      Services Subheader
                    </Typography>
                  ))}
              </Stack>
              <img
                className="p-4 hidden xl:block"
                src="/subMenu.png"
                alt=""
              />
            </Box>
          </Popover>
        </div>
        <div>
          <Button
            aria-describedby={idProducts}
            variant="text"
            size="small"
            onClick={handleClickProducts}
            className="hidden lg:flex"
          >
            Products
          </Button>
          <Popover
            id={idProducts}
            open={openProducts}
            anchorEl={anchorElProducts}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
          >
            <Box sx={{ display: "flex", padding: "15px" }}>
              <Stack>
                <Typography variant="h6" sx={{ p: 2 }}>
                  Header
                </Typography>
                {Array(5)
                  .fill()
                  .map((_, index) => (
                    <Typography key={index} sx={{ p: 2 }}>
                      Subeader
                    </Typography>
                  ))}
              </Stack>
              <Stack>
                <Typography variant="h6" sx={{ p: 2 }}>
                  Header
                </Typography>
                {Array(5)
                  .fill()
                  .map((_, index) => (
                    <Typography key={index} sx={{ p: 2 }}>
                      Subheader
                    </Typography>
                  ))}
              </Stack>
              <img
                className="p-4 hidden xl:block"
                src="/subMenu.png"
                alt=""
              />
            </Box>
          </Popover>
        </div>
        <More className="sm:flex hidden lg:hidden" />
        <p className="hidden sm:hidden lg:flex">Privacy</p>
        <p className="hidden sm:hidden lg:flex">Security</p>
        <p className="hidden sm:hidden lg:flex">Docs</p>
      </div>
    </div>
  );
}
