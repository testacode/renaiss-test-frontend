"use client";

import {
  Box,
  Button,
  Card,
  CardBody,
  Circle,
  Divider,
  Flex,
  Heading,
  Icon,
  IconButton,
  Text,
} from "@chakra-ui/react";
import { FiSearch } from "react-icons/fi";
import { PiClockCountdownLight, PiTrashSimple } from "react-icons/pi";

import { InputPrompt } from ".";

const Sidebar = ({ config, ...rest }) => {
  const { desktop, mobile } = config;

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
            <InputPrompt mb="20px" mt="33px" />
          </CardBody>
        </Card>
        <Card className="chat-history">
          <CardBody>
            <Heading as="h3" mb="10px" size="md">
              Historial de Búsquedas
            </Heading>
            <Divider mb="18px" />
            <Flex className="chat-history-list">
              <Flex
                className="chat-history-single"
                justify="space-between"
                w="full"
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
                      User Flow con un texto muy largo para ver si funciona el
                      overflow
                    </Text>
                    <Flex
                      align="center"
                      as={Text}
                      color="#94A3B8"
                      fontSize="13px"
                      gap="2px"
                    >
                      <Icon as={PiClockCountdownLight} />
                      Hoy, quedan 24 hs.
                    </Flex>
                  </Flex>
                </Flex>
                <IconButton
                  aria-label="delete"
                  icon={<PiTrashSimple />}
                  variant="link"
                />
              </Flex>
            </Flex>
          </CardBody>
        </Card>
        <Button
          alignSelf="end"
          aria-label="close sidebar"
          display={{ base: "flex", md: "none" }}
          onClick={mobile.onClose}
        >
          Cerrar
        </Button>
      </Flex>
    </Box>
  );
};

export default Sidebar;
