import { useState } from "react";
import {
  Table,
  TableContainer,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  AlertIcon,
  Alert,
  Skeleton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Icon,
  IconButton,
  useDisclosure,
} from "@chakra-ui/react";
import { XIcon, CollectionIcon, CogIcon } from "@heroicons/react/outline";

import RemoveGuestModal from "./Remove";
import useGuests from "lib/hooks/queries/useGuests";

export default function GuestsList({ event_id }) {
  const { isLoading, isError, guests } = useGuests(event_id);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [guest, setGuest] = useState({ name: "", _id: "" });

  if (isError) {
    return (
      <Alert status="error" variant="left-accent">
        <AlertIcon />
        Oops! an unexpected error occured while retrieving guests from the
        server
      </Alert>
    );
  }

  return (
    <Skeleton isLoaded={!isLoading}>
      <TableContainer>
        <Table variant="simple" size="md">
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>Email</Th>
              <Th>Manage</Th>
            </Tr>
          </Thead>
          <Tbody>
            {guests?.map((guest) => (
              <Tr key={guest?._id}>
                <Td>{guest?.name}</Td>
                <Td>{guest?.email}</Td>
                <Td>
                  <Menu>
                    <MenuButton
                      as={IconButton}
                      aria-label="Options"
                      icon={<Icon as={CogIcon} w={5} />}
                      variant="outline"
                    />
                    <MenuList>
                      <MenuItem
                        icon={<Icon as={CollectionIcon} w={5} h={5} mt="5px" />}
                        onClick={() => {}}
                      >
                        View Responses
                      </MenuItem>
                      <MenuItem
                        icon={<Icon as={XIcon} w={5} h={5} mt="6px" />}
                        onClick={() => {
                          setGuest({ name: guest?.name, _id: guest?._id });
                          onOpen();
                        }}
                        color="red.500"
                      >
                        Remove Guest
                      </MenuItem>
                    </MenuList>
                  </Menu>
                </Td>
              </Tr>
            ))}
            <Tr></Tr>
          </Tbody>
        </Table>

        <RemoveGuestModal
          isOpen={isOpen}
          onClose={onClose}
          event_id={event_id}
          guest={guest}
        />
      </TableContainer>
    </Skeleton>
  );
}
