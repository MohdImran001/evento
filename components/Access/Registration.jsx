import { useState } from "react";

import { Box, Heading, Text, Flex, Switch, Icon } from "@chakra-ui/react";
import { UserAddIcon } from "@heroicons/react/solid";

export default function Registration() {
  const [checked, setChecked] = useState(true);

  return (
    <>
      <Box>
        <Heading color="brand" size="md">
          Event Access
        </Heading>
        <Text color="gray.500" mt=".5rem">
          Cap the number of guests or turn off registration as needed
        </Text>
      </Box>
      <Box w="40%" border="1px solid #EEE" p="1.5rem" mt="1rem">
        <Flex experimental_spaceX={2}>
          <Icon as={UserAddIcon} w={6} h={6} />
          <Heading color="brand" size="sm" mt="5px">
            Registration
          </Heading>
        </Flex>
        <Flex mt="2rem" justifyContent="space-between">
          <Text>Accept Registration</Text>
          <Switch
            mt="3px"
            isChecked={checked}
            colorScheme="green"
            onChange={() => setChecked(!checked)}
          />
        </Flex>
        <Text color="gray.500" fontSize="sm" pt="2rem">
          {checked &&
            `Currently accepting registrations. Turn this off to prevent new
            guests from registering for the event.`}
          {!checked &&
            `Registration is currently closed. No new guests can register for the event.`}
        </Text>
      </Box>
    </>
  );
}
