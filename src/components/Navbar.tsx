"use client";

import { Flex, HStack, IconButton, useColorModeValue } from "@chakra-ui/react";
import { BsLayoutTextSidebar } from "react-icons/bs";
import { IoSettingsOutline } from "react-icons/io5";

// BsLayoutTextSidebar
const Navbar = ({ config, ...rest }) => {
  const { desktop, mobile } = config;
  const handleToggleDesktopSidebar = () => {
    console.log("click desktop", desktop);
    desktop.isOpen ? desktop.onClose() : desktop.onOpen();
  };

  const handleToggleMobileSidebar = () => {
    console.log("click mobile", mobile);
    mobile.isOpen ? mobile.onClose() : mobile.onOpen();
  };
  return (
    <Flex
      alignItems="center"
      bg="#F97316"
      borderBottomColor={useColorModeValue("gray.200", "gray.700")}
      borderBottomWidth="1px"
      className="navbar"
      height="70px"
      justifyContent={{ base: "space-between", md: "space-between" }}
      ml={{ base: 0, md: 0 }}
      px={{ base: 4, md: 4 }}
      {...rest}
    >
      <IconButton
        aria-label="open menu"
        color="white"
        display={{ base: "flex", md: "none" }}
        icon={<BsLayoutTextSidebar />}
        variant="outline"
        onClick={handleToggleMobileSidebar}
      />
      <HStack
        justify={{ base: "flex-end", md: "space-between" }}
        spacing={{ base: "0", md: "6" }}
        w={{ base: "0", md: "100%" }}
      >
        <IconButton
          aria-label="open menu"
          bg={config.desktop.isOpen ? "transparent" : "white"}
          color={config.desktop.isOpen ? "white" : "#F97316"}
          colorScheme="orange"
          display={{ base: "none", md: "flex" }}
          icon={<BsLayoutTextSidebar />}
          size="md"
          variant={config.desktop.isOpen ? "outline" : "solid"}
          _hover={{
            backgroundColor: config.desktop.isOpen ? "white" : "#F97316",
            color: config.desktop.isOpen ? "#F97316" : "white",
          }}
          onClick={handleToggleDesktopSidebar}
        />
        <IconButton
          aria-label="open menu"
          color="white"
          icon={<IoSettingsOutline />}
          size="md"
          variant="outline"
        />
      </HStack>
    </Flex>
  );
};

export default Navbar;
