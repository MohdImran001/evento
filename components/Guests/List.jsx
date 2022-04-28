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
} from "@chakra-ui/react";

import useGuests from "lib/hooks/queries/useGuests";

export default function GuestsList({ event_id }) {
  const { isLoading, isError, guests } = useGuests(event_id);

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
            </Tr>
          </Thead>
          <Tbody>
            {guests?.map((guest) => (
              <Tr _hover={{ shadow: "lg" }} key={guest?._id}>
                <Td>{guest?.name}</Td>
                <Td>{guest?.email}</Td>
              </Tr>
            ))}
            <Tr>
              <Td></Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </Skeleton>
  );
}
