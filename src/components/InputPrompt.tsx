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

const InputPrompt = ({ hasWand, config, ...rest }) => {
  const { errors, isLoading, name, register } = config;
  return (
    <InputGroup {...rest}>
      <Input
        errorBorderColor="crimson"
        isDisabled={isLoading}
        isInvalid={!!errors[name]}
        placeholder="Insertar prompt"
        type="text"
        {...register(name)}
      />
      <InputRightElement w="unset">
        <Flex>
          <IconButton
            _focus={{ outline: "none" }}
            _focusVisible={{ outline: "none" }}
            _hover={{ border: "none" }}
            aria-label="enviar prompt"
            color="#F97316"
            icon={<LiaTelegram />}
            isLoading={isLoading}
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
              isDisabled={isLoading}
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
