import { useState } from "react";
import { useRouter } from "next/router";

import {
  Center,
  Box,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  Icon,
  Image,
  IconButton,
  Skeleton,
  Flex,
  Text,
  Heading,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
} from "@chakra-ui/react";

import {
  DotsVerticalIcon,
  ExternalLinkIcon,
  PencilAltIcon,
  DocumentRemoveIcon,
  ClipboardCopyIcon,
  PlusIcon,
} from "@heroicons/react/solid";

import {
  getLocalizedDate,
  getLocalizedTime,
  getDate,
  getMonth,
  copyUrl,
} from "core/utils/event";

import GuestsCount from "components/Guests/Count";

import useEvents from "./useEvents";
import useNewEvent from "lib/hooks/mutations/useNewEvent";
import useDeleteEvent from "lib/hooks/mutations/useDeleteEvent";
import { BASE_URL } from "core/constants";

const EventList = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const { mutate: createNewEvent } = useNewEvent();
  const { mutate: deleteEvent } = useDeleteEvent();
  const { isLoading, isError, events, error } = useEvents();

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <>
      <Box>
        <Heading size="4xl" m="5rem auto" color="brand">
          Events
        </Heading>
        <Box textAlign="right">
          <Button
            leftIcon={<Icon as={PlusIcon} />}
            mb="2rem"
            px="3rem"
            bg="brandOrange"
            color="#FFF"
            _hover={{ bg: "brandOrange" }}
            _active={{ bg: "brandOrange" }}
            onClick={() => {
              setLoading(true);
              createNewEvent();
            }}
            isLoading={loading}
          >
            New Event
          </Button>
        </Box>
      </Box>
      <Skeleton isLoaded={!isLoading}>
        <Table variant="simple">
          <TableCaption>Events (All)</TableCaption>
          <Thead bg="orange.100">
            <Tr>
              <Th>Event</Th>
              <Th>People</Th>
              <Th>Status</Th>
              <Th></Th>
            </Tr>
          </Thead>
          <Tbody>
            {events &&
              events.map((event) => (
                <Tr
                  key={event._id}
                  color="secondary"
                  fontSize="sm"
                  _hover={{ shadow: "base" }}
                >
                  <Td>
                    <Flex experimental_spaceX="20px">
                      <Box bg="white" w="70px" borderRadius="5px">
                        <Center w="100%" p="2px">
                          <Text fontSize={{ base: "xs" }} color="red.500">
                            <b>{getMonth(event?.eventDate).toUpperCase()}</b>
                          </Text>
                        </Center>
                        <Center mt="6px">
                          <Heading size="lg" color="secondary">
                            {getDate(event?.eventDate)}
                          </Heading>
                        </Center>
                      </Box>
                      <Image
                        src={
                          event.coverImageUrl.length > 0
                            ? event.coverImageUrl
                            : "/no-image.png"
                        }
                        alt="preview-image"
                        objectFit="cover"
                        borderRadius="2px"
                        w="70px"
                        h="70px"
                      />
                      <Box ml="1rem">
                        <Heading size="md" fontWeight="normal" color="brand">
                          {event?.title}
                        </Heading>
                        <Text mt="8px">{event?.location?.name}</Text>
                        <Text>
                          {getLocalizedDate(event?.eventDate)} at{" "}
                          {getLocalizedTime(event?.eventStartTime)}
                        </Text>
                      </Box>
                    </Flex>
                  </Td>
                  <Td>
                    <GuestsCount event_id={event?._id} />
                  </Td>
                  <Td>{event?.status}</Td>
                  <Td>
                    <Menu>
                      <MenuButton
                        as={IconButton}
                        aria-label="Options"
                        icon={<Icon as={DotsVerticalIcon} w={5} />}
                        variant="outline"
                      />
                      <MenuList>
                        <MenuItem
                          icon={<Icon as={ExternalLinkIcon} w={5} h={5} />}
                          onClick={() =>
                            window.open(`${BASE_URL}/${event._id}`, "_blank")
                          }
                        >
                          View
                        </MenuItem>
                        <MenuItem
                          icon={<Icon as={ClipboardCopyIcon} w={5} h={5} />}
                          onClick={() => copyUrl(`${BASE_URL}/${event._id}`)}
                        >
                          Copy URL
                        </MenuItem>
                        <MenuItem
                          icon={<Icon as={PencilAltIcon} w={5} h={5} />}
                          onClick={() =>
                            router.push(`/app/events/${event._id}/edit`)
                          }
                        >
                          Manage
                        </MenuItem>
                        <MenuItem
                          icon={<Icon as={DocumentRemoveIcon} w={5} h={5} />}
                          onClick={() => deleteEvent(event._id)}
                        >
                          Delete
                        </MenuItem>
                      </MenuList>
                    </Menu>
                  </Td>
                </Tr>
              ))}
          </Tbody>
        </Table>
      </Skeleton>
    </>
  );
};

export default EventList;
