import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { Link } from "react-router-dom";


const Header = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ bgcolor: "white" }}>
          <Toolbar>
            {/* <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2,color:"black" }}
            >
            </IconButton> */}
            <Typography variant="h6" component="div" sx={{ flexGrow: 1,color:"black" }}>
              APP LOGO
            </Typography>
            <Link to="dashboard">
            <Button color="inherit" sx={{color:"black"}}>DASHBOARD</Button>
            </Link>
            <Link to="create">
            <Button color="inherit" sx={{color:"black"}}>CREATE ADS</Button>
            </Link>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Header;


// import React from "react";
// import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
// import Toolbar from "@mui/material/Toolbar";
// import Typography from "@mui/material/Typography";
// import Button from "@mui/material/Button";
// import IconButton from "@mui/material/IconButton";
// import MenuIcon from "@mui/icons-material/Menu";
// import Hidden from "@mui/material/Hidden";
// import { Link } from "react-router-dom";

// const Header = () => {
//   return (
//     <>
//       <Box sx={{ flexGrow: 1 }}>
//         <AppBar position="static" sx={{ bgcolor: "white" }}>
//           <Toolbar>
//             <IconButton
//               size="large"
//               edge="start"
//               color="inherit"
//               aria-label="menu"
//               sx={{ mr: 2, color: "black" }}
//             >
//               <MenuIcon />
//             </IconButton>
//             <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: "black" }}>
//               APP LOGO
//             </Typography>
//             <Hidden mdDown>
//               <Link to="dashboard">
//                 <Button color="inherit" sx={{ color: "black" }}>
//                   DASHBOARD
//                 </Button>
//               </Link>
//               <Link to="create">
//                 <Button color="inherit" sx={{ color: "black" }}>
//                   CREATE ADS
//                 </Button>
//               </Link>
//             </Hidden>
//           </Toolbar>
//         </AppBar>
//       </Box>
//     </>
//   );
// };

// export default Header;
