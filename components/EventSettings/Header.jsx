import {
  Box,
  Heading,
  Text,
  IconButton,
  Icon,
  Flex,
  useClipboard,
} from "@chakra-ui/react";
import { DocumentDuplicateIcon } from "@heroicons/react/solid";

import useEvent from "./useEvent";
import { BASE_URL } from "core/constants";
import { getLocalizedDate, getLocalizedTime } from "core/utils/event";

export default function Header({ event_id }) {
  const { isLoading, isError, event, error } = useEvent(
    event_id,
    "_id title eventDate"
  );

  return (
    <Box>
      <Heading size="3xl" maxW="70rem" m="5rem auto" color="brand">
        {isLoading && "loading..."}
        {isError && error.message}
        {event && event.title}
      </Heading>
      {event?.eventDate && (
        <Text color="brandOrange" mt="-4rem">
          {getLocalizedDate(event?.eventDate)} at{" "}
          {getLocalizedTime(event?.eventDate)}
        </Text>
      )}
      <Flex mt="1rem" experimental_spaceX={2}>
        <Text
          color="secondary"
          border={"1px solid #eee"}
          px="10px"
          py="7px"
          borderRadius="2px"
          bg="gray.100"
        >
          {BASE_URL + `/${event?._id}`}
        </Text>
        <IconButton icon={<Icon as={DocumentDuplicateIcon} w={5} h={5} />} />
      </Flex>
    </Box>
  );
}
