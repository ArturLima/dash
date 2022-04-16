import { Text, Avatar, Box, Flex } from "@chakra-ui/react";

interface ProfileProps {
  showProfileDate?: boolean;
}

export function Profile({ showProfileDate = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileDate && (
        <Box mr="4" textAlign="right">
          <Text>Artur Lima</Text>
          <Text color="gray.300" fontSize="small">
            arturpeixotoo@gmail.com
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="Artur Lima"
        src="https://github.com/ArturLima.png"
      />
    </Flex>
  );
}
