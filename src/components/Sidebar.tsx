"use client";

import {
  Box,
  Button,
  Card,
  CardBody,
  chakra,
  Circle,
  Divider,
  Flex,
  Heading,
  Icon,
  IconButton,
  Text,
  useBoolean,
} from "@chakra-ui/react";
import { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { FiSearch } from "react-icons/fi";
import { PiClockCountdownLight, PiTrashSimple } from "react-icons/pi";

import { ChatContext } from "../context";
import { InputPrompt } from ".";

const Sidebar = ({ onClose, ...rest }) => {
  const [isLoading, setIsLoading] = useBoolean();
  const { api, state } = useContext(ChatContext);
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
  } = useForm();

  const handleOnDelete = (id) => api.onDeleteConversation(id);
  const handleOnSelect = (conversation) =>
    api.setSelectedConversation(conversation);

  const onSubmit = async (data) => {
    setIsLoading.on();
    await api.onCreateConversation(data.prompt);
    setIsLoading.off();
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({ prompt: "" });
    }
  }, [isSubmitSuccessful, reset]);

  return (
    <Box
      bg="#F8FAFC"
      h="full"
      minW={{ base: 0, md: 500 }}
      p={{ base: "32px", md: "32px 0 32px 32px" }}
      transition="3s ease"
      w={{ base: "full", md: 60 }}
      {...rest}
    >
      <Flex direction="column" gap="22px">
        <Card className="chat-prompt">
          <CardBody>
            <Heading as="h2" mb="10px" size="lg">
              Sistema
            </Heading>
            <Text
              color="#64748B"
              fontFamily="helvetica, sans-serif"
              fontSize="lg"
              lineHeight="25px"
            >
              Para conseguir una respuesta adecuada a tus necesidades, escribe
              un prompt para el sistema.
            </Text>
            <chakra.form onSubmit={handleSubmit(onSubmit)}>
              <InputPrompt
                hasWand={false}
                mb="20px"
                mt="33px"
                config={{
                  errors,
                  isLoading,
                  name: "prompt",
                  register,
                }}
              />
            </chakra.form>
          </CardBody>
        </Card>
        <ChatHistory
          conversations={state.conversations}
          onDelete={handleOnDelete}
          onSelect={handleOnSelect}
        />
        <Button
          alignSelf="end"
          aria-label="close sidebar"
          display={{ base: "flex", md: "none" }}
          onClick={onClose}
        >
          Cerrar
        </Button>
      </Flex>
    </Box>
  );
};

const ChatHistoryItem = ({ conversation, onDelete, onSelect }) => {
  const handleDelete = () => onDelete(conversation.id);
  const handleSelect = () => onSelect(conversation);

  return (
    <Flex
      className="chat-history-single"
      cursor="pointer"
      justify="space-between"
      w="full"
      onClick={handleSelect}
    >
      <Flex align="center" overflow="hidden">
        <Circle bg="#FDBA74" color="white" mr="13px" size="35px">
          <Icon as={FiSearch} />
        </Circle>
        <Flex
          direction="column"
          lineHeight="18px"
          overflow="hidden"
          pr="14px"
          textOverflow="ellipsis"
          whiteSpace="nowrap"
        >
          <Text
            display="inline-block"
            fontSize="16px"
            overflow="hidden"
            textOverflow="ellipsis"
            whiteSpace="nowrap"
          >
            {conversation?.name || "-"}
          </Text>
          <Flex
            align="center"
            as={Text}
            color="#94A3B8"
            fontSize="13px"
            gap="2px"
          >
            <Icon as={PiClockCountdownLight} />
            {conversation?.time || "-"}
          </Flex>
        </Flex>
      </Flex>
      <IconButton
        aria-label="delete"
        icon={<PiTrashSimple />}
        variant="link"
        onClick={handleDelete}
      />
    </Flex>
  );
};

const ChatHistory = ({ conversations, onDelete, onSelect }) => {
  const hasConversations = conversations?.length > 0;

  return (
    <Card className="chat-history">
      <CardBody>
        <Heading as="h3" mb="10px" size="md">
          Historial de Búsquedas
        </Heading>
        <Divider mb="18px" />
        <Flex className="chat-history-list" direction="column" gap="20px">
          {!hasConversations && <Text>Sin historial</Text>}
          {hasConversations &&
            conversations.map((conversation) => {
              return (
                <ChatHistoryItem
                  key={conversation.id}
                  conversation={conversation}
                  onDelete={onDelete}
                  onSelect={onSelect}
                />
              );
            })}
        </Flex>
      </CardBody>
    </Card>
  );
};

export default Sidebar;
