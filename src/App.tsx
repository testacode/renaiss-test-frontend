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
import { MODELS, ROLES, TEMPERATURE } from "./components/OpenIa";
import { ChatContext } from "./context";
import { createConversation, deleteConversation } from "./utils";

const App = () => {
  // Mobile Sidebar controls
  const {
    isOpen: isMobileSidebarOpen,
    onOpen: onMobileSidebarOpen,
    onClose: onMobileSidebarClose,
  } = useDisclosure();
  // Desktop Sidebar controls
  const {
    isOpen: isDesktopSidebarOpen,
    onOpen: onDesktopSidebarOpen,
    onClose: onDesktopSidebarClose,
  } = useDisclosure({ defaultIsOpen: true });
  // Initialize app state
  const initialState = {
    conversations: [],
    model: MODELS[1].value, // gpt-3.5-turbo
    selected: null,
    temperature: TEMPERATURE, // 0.7
  };
  // App state
  const [state, updateState] = useReducer(
    (prevState, newState) => ({
      ...prevState,
      ...newState,
    }),
    initialState,
  );

  const sidebarsConfig = {
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

  const providerValue = {
    api: {
      getSelectedCoversation: () => state.selected,
      onAddDialog: async (id, text, author = "Bot") => {
        const updatedConversation = {
          ...state.selected,
          messages: [
            ...state.selected.messages,
            { author, content: text, role: ROLES.USER },
          ],
        };
        // Updating state "selected" and "conversations"
        await updateState({
          conversations: state.conversations.map((conversation) => {
            if (conversation.id === id) {
              return updatedConversation;
            } else {
              return conversation;
            }
          }),
          selected: updatedConversation,
        });
      },
      onCreateConversation: (prompt) => {
        const newConversation = createConversation(prompt);

        updateState({
          conversations: [...state.conversations, newConversation],
          selected: newConversation,
        });
      },
      onDeleteConversation: (id) => {
        const isSelected = !!state?.selected?.id;
        const filteredConversations = deleteConversation(
          id,
          state.conversations,
        );
        updateState({
          conversations: filteredConversations,
          selected: isSelected ? null : state.selected,
        });
      },
      setSelectedConversation: (selected) => updateState({ selected }),
    },
    state,
    updateState,
  };

  return (
    <ChatContext.Provider value={providerValue}>
      <Box bg="#F8FAFC" className="app" minH="100vh">
        {/* Top Navbar */}
        <Navbar config={sidebarsConfig} />
        <Flex>
          {/* Desktop Sidebar */}
          <Sidebar
            className="sidebar"
            display={{
              base: "none",
              md: isDesktopSidebarOpen ? "block" : "none",
            }}
            onClose={onDesktopSidebarClose}
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
              <Sidebar
                className="mobile-sidebar"
                onClose={onMobileSidebarClose}
              />
            </DrawerContent>
          </Drawer>
          {/* Content */}
          <Content />
        </Flex>
      </Box>
    </ChatContext.Provider>
  );
};

export default App;
