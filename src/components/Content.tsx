"use client";

import {
  Box,
  Button,
  Card,
  CardHeader,
  chakra,
  Flex,
  Heading,
  useBoolean,
} from "@chakra-ui/react";
import { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { CiCirclePlus } from "react-icons/ci";

import { ChatContext } from "../context";
import { Chat, InputPrompt } from "./";

const Content = () => {
  const [isLoading, setIsLoading] = useBoolean();
  const { api, state } = useContext(ChatContext);
  // Form initialization
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
  } = useForm();
  // On Form submittion
  const onSubmit = async (data) => {
    setIsLoading.on();
    api.onAddDialog(state.selected.id, data.chat, "Human");
    setIsLoading.off();
  };
  const handleCreateConversation = () => api.onCreateConversation("");
  const hasSelectedConversation = !!state?.selected;
  const hasSelectedMessages = state?.selected?.messages?.length;
  const showMessages = hasSelectedConversation && hasSelectedMessages;

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({ chat: "" });
    }
  }, [isSubmitSuccessful, reset]);

  return (
    <Box className="content" h="calc(100vh - 70px)" p="32px" w="100%">
      <Card h="100%">
        <CardHeader borderBottom="1px solid #eee">
          <Flex align="center" justify="space-between">
            <Heading
              overflow="hidden"
              pr="15px"
              size="xs"
              textOverflow="ellipsis"
              whiteSpace="nowrap"
            >
              {state?.selected?.name || ""}
            </Heading>
            <Button
              bg="#F97316"
              colorScheme="orange"
              leftIcon={<CiCirclePlus />}
              minW="160px"
              size="sm"
              onClick={handleCreateConversation}
            >
              Nueva Búsqueda
            </Button>
          </Flex>
        </CardHeader>
        <Flex bg="#F8FAFC" direction="column" h="100%">
          <Flex
            className="chat-conversation"
            direction="column"
            gap="20px"
            h="100%"
            overflow="hidden"
            p={6}
          >
            {showMessages &&
              state.selected.messages.map((message, i) => {
                if (!message.content) return null;

                return (
                  <Chat
                    key={i}
                    message={message.content}
                    who={message.author}
                  />
                );
              })}
          </Flex>
          <Flex
            bg="white"
            borderTop="1px solid #eee"
            className="chat-input"
            h="99px"
            pb="25px"
            pt="34px"
            px="25px"
          >
            <chakra.form flex={1} onSubmit={handleSubmit(onSubmit)}>
              <InputPrompt
                hasWand
                config={{
                  errors,
                  isLoading,
                  name: "chat",
                  register,
                }}
              />
            </chakra.form>
          </Flex>
        </Flex>
      </Card>
    </Box>
  );
};

export default Content;
