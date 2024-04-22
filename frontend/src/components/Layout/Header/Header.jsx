import React from "react";
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  HStack,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import { ColorModeSwitcher } from "../../../../../ColorModeSwitcher.jsx";
import { RiDashboardFill, RiLogoutBoxLine, RiMenu5Fill } from "react-icons/ri";
import { Link } from "react-router-dom";
const NavButton = ({ url = "/", title = "Home" }) => {
  return (
    <Link to={url}>
      <Button variant={"ghost"}>{title}</Button>
    </Link>
  );
};
const logoutHandler=()=>{
    console.log("logout");
}
const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const isAuthenticated = true;
  const user={
    role:"admin"
  }
  return (
    <>
      <ColorModeSwitcher />
      <Button
        onClick={onOpen}
        colorScheme="yellow"
        width={12}
        height={12}
        rounded={"full"}
        position={"fixed"}
        top={6}
        left={6}
      >
        <RiMenu5Fill />
      </Button>
      <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay backdropFilter={"blur(3px)"} />
        <DrawerContent>
          <DrawerHeader borderBottomWidth={"1px"}>Course Bundler</DrawerHeader>
          <DrawerBody>
            <VStack spacing={"8"} alignItems={"flex-start"}>
              <NavButton url="/" title="Home" />
              <NavButton url="/courses" title="Browse Courses" />
              <NavButton url="/request" title="Request a Course" />
              <NavButton url="/contact" title="Contact Us" />
              <NavButton url="/about" title="About" />
              <HStack
                justifyContent={"space-evenly"}
                position={"absolute"}
                bottom={"2rem"}
                width={"80%"}
              >
                {isAuthenticated ? (
                  <>
                    <VStack>
                      <HStack>
                        <Link to="/profile">
                          <Button variant={"ghost"} colorScheme="yellow">
                            Profile
                          </Button>
                        </Link>

                        <Button variant={"ghost"} onClick={logoutHandler}>
                          <RiLogoutBoxLine /> Logout
                        </Button>
                      </HStack>
                      {
                        user && user.role==="admin" && <Link to="/admin/dashboard">
                            <Button colorScheme="purple" variant={"ghost"}> <RiDashboardFill style={{margin:"4px"}}/> Dashboard</Button>
                        </Link>
                      }
                    </VStack>
                  </>
                ) : (
                  <>
                    <Link to="/login">
                      <Button colorScheme="yellow">Login</Button>
                    </Link>
                    <p>OR</p>
                    <Link to="/signup">
                      <Button colorScheme="yellow">Sign Up</Button>
                    </Link>
                  </>
                )}
              </HStack>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Header;
