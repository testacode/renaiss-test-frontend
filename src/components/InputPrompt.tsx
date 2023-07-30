"use client";

import {
  Flex,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { LiaTelegram } from "react-icons/lia";
import { PiMagicWand } from "react-icons/pi";

const InputPrompt = ({ hasWand, ...rest }) => {
  return (
    <InputGroup {...rest}>
      <Input placeholder="Insertar prompt" type="text" />
      <InputRightElement w="unset">
        <Flex>
          <IconButton
            _focus={{ outline: "none" }}
            _focusVisible={{ outline: "none" }}
            _hover={{ border: "none" }}
            aria-label="enviar prompt"
            color="#F97316"
            icon={<LiaTelegram />}
            outline="none"
            variant="link"
            onClick={() => console.log("click")}
          />
          {hasWand && (
            <IconButton
              _focus={{ outline: "none" }}
              _focusVisible={{ outline: "none" }}
              _hover={{ border: "none" }}
              aria-label="enviar prompt"
              color="#10B981"
              icon={<PiMagicWand />}
              outline="none"
              variant="link"
              onClick={() => console.log("click")}
            />
          )}
        </Flex>
      </InputRightElement>
    </InputGroup>
  );
};

export default InputPrompt;
