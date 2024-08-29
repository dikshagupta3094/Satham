import React from "react";
import sathm from "../assets/Logo/sathm_logo_without_background.png";
import Devi_Ahilya_Vishwavidyalaya_Logo from "../assets/Logo/Devi_Ahilya_Vishwavidyalaya_Logo.png";
import { NavLink } from "react-router-dom";
import { BsAirplaneFill } from "react-icons/bs";
import { FaHome } from "react-icons/fa";
import { SiBookstack } from "react-icons/si";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaHandshake } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { FaIndustry } from "react-icons/fa";
import image_bg3 from "../assets/Logo/image_bg3.jpg";
import Footer from "../Components/Footer";

//drawer
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { MdArrowRight } from "react-icons/md";

const drawerWidth = 250;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

function HomeLayout({ children }) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  // const [isDropdownVisible, setDropdownVisible] = useState(false);
  // const [isSubmenuVisible, setSubmenuVisible] = useState(false);
  return (
    <div>
      {/* Logo design and text design */}
      <div
        className="flex flex-col items-center justify-center p-3  bg-cover "
        style={{ backgroundImage: `url(${image_bg3})` }}
      >
        <div className="flex flex-col md:flex-row items-center justify-between w-full space-y-4 md:space-y-0  md:space-x-4 lg:space-x-8">
          {/* on medium size design */}
          <img
            src={Devi_Ahilya_Vishwavidyalaya_Logo}
            className="md:w-36 md:h-36 md:block hidden"
            alt="Devi Ahilya Logo"
          />
          {/* For smaller device */}
          <img
            src={sathm}
            className="block md:hidden w-40 h-40 sm:"
            alt="Small Device Logo"
          />
          <div className="text-center md:px-2 lg:px-2">
            <h1 className="md:text-3xl lg:text-4xl text-lg font-bold  text-blue-900 sm:px-0 py-0">
              SCHOOL OF AVIATION, TOURISM AND HOSPITALITY MANAGEMENT
            </h1>
            <span className="text-lg md:text-xl lg:text-2xl text-blue-900  font-bold">
              [SATHM]
            </span>
            <p className="text-lg md:text-2xl lg:text-3xl  md:text-gray-800 text-blue-900  mt-2 tracking-wider font-bold text-center">
              DEVI AHILYA VISHWAVIDYALAYA, INDORE
            </p>
            <p className="text-xl   md:text-gray-600 text-blue-900  mt-1 tracking-wider font-semibold text-center">
              Accredited A+ Grade by NACC
            </p>
          </div>
          <img
            src={sathm}
            alt="SATHM Logo"
            className="md:w-40 md:h-40 md:block hidden"
          />
        </div>
      </div>

      {/* Navbar */}
      <div className="border  border-gray-400 "></div>

      <div className="hidden md:flex items-center justify-evenly  bg-blue-900 py-4  text-white font-semibold lg:text-xl sm:sm:text-[15px] w-full  sticky top-0 z-10">
        <NavLink to="/" className="hover:underline">
          Home
        </NavLink>
        <NavLink to="/about" className="hover:underline">
          About
        </NavLink>
        <NavLink to="/academics" className="hover:underline">
          Academics
        </NavLink>
        <NavLink to="/faculties" className="hover:underline">
          Faculties
        </NavLink>
        <NavLink to="/events" className="hover:underline">
          Events & Activities
        </NavLink>
        <NavLink to="/corporate_linkage" className="hover:underline">
          Corporate Linkages
        </NavLink>
        <NavLink to="/mou" className="hover:underline">
          MOUs
        </NavLink>
      </div>

      {/* Responsive navbar */}
      <Box className="flex md:hidden">
        <CssBaseline />
        <AppBar
          position="fixed"
          open={open}
          style={{
            backgroundColor: "transparent",
            color: "#000033",
            boxShadow: "none",
            opacity: "initial",
          }}
        >
          <Toolbar className="flex justify-between">
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{ mr: 2, ...(open && { display: "none" }) }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
          variant="persistent"
          anchor="left"
          open={open}
        >
          <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "ltr" ? <RxCross2 /> : <RxCross2 />}
            </IconButton>
          </DrawerHeader>
          <Divider />
          <List className="flex flex-col gap-y-2">
            <NavLink to="/" onClick={handleDrawerClose}>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <FaHome />
                  </ListItemIcon>
                  <ListItemText primary={"Home"}></ListItemText>
                </ListItemButton>
              </ListItem>
            </NavLink>

            <NavLink to="/about" onClick={handleDrawerClose}>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <BsAirplaneFill />
                  </ListItemIcon>
                  <ListItemText primary={"About"}></ListItemText>
                </ListItemButton>
              </ListItem>
            </NavLink>

            <NavLink to="/academics" onClick={handleDrawerClose}>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <SiBookstack />
                  </ListItemIcon>
                  <ListItemText primary={"Academics"}></ListItemText>
                </ListItemButton>
              </ListItem>
            </NavLink>

            <NavLink to="/faculties" onClick={handleDrawerClose}>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <FaPeopleGroup />
                  </ListItemIcon>
                  <ListItemText primary={"Faculties"}></ListItemText>
                </ListItemButton>
              </ListItem>
            </NavLink>

            <NavLink to="/events" onClick={handleDrawerClose}>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <CalendarMonthIcon />
                  </ListItemIcon>
                  <ListItemText primary={"Events & Activities"}></ListItemText>
                </ListItemButton>
              </ListItem>
            </NavLink>

            <NavLink to="/corporate_linkage" onClick={handleDrawerClose}>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <FaIndustry />
                  </ListItemIcon>
                  <ListItemText primary={"Corporate Linkages"}></ListItemText>
                </ListItemButton>
              </ListItem>
            </NavLink>

            <NavLink to="/mou">
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <FaHandshake />
                  </ListItemIcon>
                  <ListItemText primary={"MOUs"}></ListItemText>
                </ListItemButton>
              </ListItem>
            </NavLink>
          </List>
        </Drawer>
      </Box>

      {children}

      {/* Footer import */}
      <Footer />
    </div>
  );
}

export default HomeLayout;
