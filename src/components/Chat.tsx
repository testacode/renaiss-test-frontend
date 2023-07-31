import { Card, Divider, Flex, Text } from "@chakra-ui/react";

const Chat = ({
  color = "green",
  isLoading = false,
  message,
  time = "",
  who,
  ...rest
}) => {
  const className = isLoading ? "loading" : "";

  return (
    <Card p="24px 28px" w="100%" {...rest}>
      <Flex direction="column">
        <Flex align="baseline" gap="12px" mb="12px">
          <Text className={className} color={color} fontWeight="bold">
            {who}
          </Text>
          {time && (
            <Text color="#94A3B8" fontSize="xs">
              {time}
            </Text>
          )}
        </Flex>
        <Divider />
        <Flex mt="14px">
          <Text fontSize="sm">{message}</Text>
        </Flex>
      </Flex>
    </Card>
  );
};

export default Chat;
