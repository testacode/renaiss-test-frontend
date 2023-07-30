"use client";

import {
  Box,
  Button,
  Card,
  CardHeader,
  chakra,
  Divider,
  Flex,
  Heading,
  Text,
  useBoolean,
} from "@chakra-ui/react";
import { useReducer } from "react";
import { useForm } from "react-hook-form";
import { CiCirclePlus } from "react-icons/ci";

import { fakePromise } from "../utils";
import { InputPrompt } from "./";

const Content = () => {
  const [isLoading, setIsLoading] = useBoolean();
  // Initialize app state
  const initialState = {};
  const [state, updateState] = useReducer(
    (prevState, newState) => ({
      ...prevState,
      ...newState,
    }),
    initialState,
  );
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setIsLoading.on();
    await fakePromise(data);
    setIsLoading.off();
  };

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
              OdamaChat
            </Heading>
            <Button
              bg="#F97316"
              colorScheme="orange"
              leftIcon={<CiCirclePlus />}
              minW="160px"
              size="sm"
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
            <Card p="24px 28px" w="100%">
              <Flex direction="column">
                <Flex align="baseline" gap="12px" mb="12px">
                  <Text color="green" fontWeight="bold">
                    Ana Clara
                  </Text>
                  <Text color="#94A3B8" fontSize="xs">
                    05:00pm
                  </Text>
                </Flex>
                <Divider />
                <Flex mt="14px">
                  <Text fontSize="sm">
                    Necesito los archivos que te pedí ayer
                  </Text>
                </Flex>
              </Flex>
            </Card>
            <Card p="24px 28px" w="100%">
              <Flex direction="column">
                <Flex align="baseline" gap="12px">
                  <Text className="loading" color="orange" fontWeight="bold">
                    OdamaChat
                  </Text>
                </Flex>
              </Flex>
            </Card>
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
