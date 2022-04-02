import { useRouter } from "next/router";

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
  Skeleton,
} from "@chakra-ui/react";
import { CogIcon } from "@heroicons/react/solid";

import useFetchEvents from "./useFetchEvents";
import { getLocalizedDate, getLocalizedTime } from "core/utils/event";

const EventList = () => {
  const router = useRouter();
  const { isLoading, isError, events, error } = useFetchEvents();

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <Skeleton isLoaded={!isLoading}>
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
          {events &&
            events.map((event) => (
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
                    onClick={() => router.push(`/app/events/${event._id}/edit`)}
                    variant={"outline"}
                    colorScheme={"gray"}
                    size={"sm"}
                    leftIcon={
                      <Icon as={CogIcon} w={5} h={5} color="gray.600" />
                    }
                  >
                    Settings
                  </Button>
                </Td>
              </Tr>
            ))}
        </Tbody>
      </Table>
    </Skeleton>
  );
};

export default EventList;
