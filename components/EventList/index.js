import Link from "next/link";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  Icon,
  Image,
  Button,
} from "@chakra-ui/react";
import { CogIcon } from "@heroicons/react/solid";

import { getLocalizedDate, getLocalizedTime } from "../../core/utils/event";
import useFetchEvents from "./useFetchEvents";

const EventList = () => {
  const { isLoading, isError, events, error } = useFetchEvents();

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <Table variant="simple">
      <TableCaption>Events (All)</TableCaption>
      <Thead>
        <Tr>
          <Th>Preview Image</Th>
          <Th>Title</Th>
          <Th>Date</Th>
          <Th>Start Time</Th>
          <Th>People</Th>
          <Th>Manage</Th>
        </Tr>
      </Thead>
      <Tbody>
        {events.map((event) => (
          <Tr key={event._id} cursor="pointer">
            <Td>
              <Image
                src={event?.coverImageUrl}
                alt="preview-image"
                objectFit="cover"
                borderRadius="5px"
                w="150px"
                h="100px"
              />
            </Td>
            <Td>{event?.title}</Td>
            <Td>{getLocalizedDate(event?.eventDate)}</Td>
            <Td>{getLocalizedTime(event?.eventDate)}</Td>
            <Td>0</Td>
            <Td>
              <Button
                variant={"outline"}
                colorScheme={"gray"}
                size={"sm"}
                leftIcon={<Icon as={CogIcon} w={5} h={5} color="gray.600" />}
              >
                Settings
              </Button>
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

export default EventList;
