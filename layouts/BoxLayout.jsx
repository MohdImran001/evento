import { Box, Flex, Heading, Text, Icon } from "@chakra-ui/react";

export default function BoxLayout({ children, title, summary, icon }) {
  return (
    <Flex experimental_spaceX={5} mt="5rem" mb="7rem">
      <Box color="gray.500">
        <Icon as={icon} w={8} h={8} />
      </Box>
      <Box mt="1px" w="100%">
        <Heading size="lg" color="brand">
          {title}
        </Heading>
        <Text size="sm" color="secondary" mt=".5rem">
          {summary}
        </Text>
        <Box mt="1rem">{children}</Box>
      </Box>
    </Flex>
  );
}
