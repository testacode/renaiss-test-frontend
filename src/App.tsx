/* eslint-disable @typescript-eslint/ban-ts-comment */
"use client";

import "./App.css";

import {
  Box,
  Drawer,
  DrawerContent,
  Flex,
  useDisclosure,
} from "@chakra-ui/react";
import { useReducer } from "react";

import { Content, Navbar, Sidebar } from "./components";

const App = () => {
  // @ts-ignore
  const {
    isOpen: isMobileSidebarOpen,
    onOpen: onMobileSidebarOpen,
    onClose: onMobileSidebarClose,
  } = useDisclosure();
  const {
    isOpen: isDesktopSidebarOpen,
    onOpen: onDesktopSidebarOpen,
    onClose: onDesktopSidebarClose,
  } = useDisclosure({ defaultIsOpen: true });
  // Initialize app state
  const initialState = {
    isNavbarOpen: true,
  };
  // @ts-ignore
  const [state, updateState] = useReducer(
    // @ts-ignore
    (prevState, newState) => ({
      ...prevState,
      ...newState,
    }),
    initialState,
  );

  const config = {
    desktop: {
      isOpen: isDesktopSidebarOpen,
      onClose: onDesktopSidebarClose,
      onOpen: onDesktopSidebarOpen,
    },
    mobile: {
      isOpen: isMobileSidebarOpen,
      onClose: onMobileSidebarClose,
      onOpen: onMobileSidebarOpen,
    },
  };

  return (
    <Box bg="#F8FAFC" className="app" minH="100vh">
      {/* Top Navbar */}
      <Navbar config={config} />
      <Flex>
        {/* Desktop Sidebar */}
        <Sidebar
          className="sidebar"
          config={config}
          display={{
            base: "none",
            md: isDesktopSidebarOpen ? "block" : "none",
          }}
        />
        {/* Mobile Sidebar */}
        <Drawer
          isOpen={isMobileSidebarOpen}
          placement="left"
          returnFocusOnClose={false}
          size="full"
          onClose={onMobileSidebarClose}
          onOverlayClick={onMobileSidebarClose}
        >
          <DrawerContent>
            <Sidebar className="mobile-sidebar" config={config} />
          </DrawerContent>
        </Drawer>
        {/* Content */}
        <Content />
      </Flex>
    </Box>
  );
};

export default App;
