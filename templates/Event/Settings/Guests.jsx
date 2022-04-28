import { Box, Button, Icon, Flex, Text, useDisclosure } from "@chakra-ui/react";
import { PlusIcon, DownloadIcon, UsersIcon } from "@heroicons/react/solid";

import AppLayout from "layouts/AppLayout";
import TabNavigation from "layouts/TabNavigation";

import GuestsList from "components/Guests/List";
import GuestsCount from "components/Guests/Count";
import AddNewGuestsModal from "components/Guests/New";

export default function EventGuestsTemplate({ event_id }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <AppLayout>
      <TabNavigation event_id={event_id}>
        <Flex justifyContent="space-between" alignItems="center" px=".5rem">
          <Flex experimental_spaceX={4}>
            <Icon as={UsersIcon} color="gray.500" w={6} h={6} />
            <Text fontSize="lg">
              <GuestsCount event_id={event_id} />
            </Text>
          </Flex>
          <Box>
            <Button
              bg="brandBlue"
              color="white"
              _hover={{ bg: "brandBlue" }}
              _active={{ bg: "brandBlue" }}
              leftIcon={<Icon as={PlusIcon} />}
              onClick={() => onOpen()}
            >
              add guests
            </Button>
            <Button ml="1rem" leftIcon={<Icon as={DownloadIcon} />}>
              download csv
            </Button>
          </Box>
        </Flex>

        <Box border="1px solid #EEE" borderRadius="5px" mt="2rem">
          <GuestsList event_id={event_id} />
        </Box>

        <AddNewGuestsModal isOpen={isOpen} onClose={onClose} />
      </TabNavigation>
    </AppLayout>
  );
}
