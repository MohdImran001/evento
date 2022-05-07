import {
  Box,
  Heading,
  Text,
  IconButton,
  Icon,
  Flex,
  Skeleton,
} from "@chakra-ui/react";
import { DocumentDuplicateIcon } from "@heroicons/react/solid";

import { BASE_URL } from "core/constants";
import { copyUrl, getLocalizedDate, getLocalizedTime } from "core/utils/event";

import useEvent from "lib/hooks/queries/useEvent";

export default function Header({ event_id }) {
  const { isLoading, isError, event, error } = useEvent(
    event_id,
    "_id title eventDate eventStartTime"
  );

  return (
    <Skeleton isLoaded={!isLoading}>
      <Box>
        <Heading size="3xl" maxW="70rem" m="5rem auto" color="brand">
          {isError && error.message}
          {event && event.title}
        </Heading>
        {event?.eventDate && (
          <Text color="brandOrange" mt="-4rem">
            {getLocalizedDate(event?.eventDate)} at{" "}
            {getLocalizedTime(event?.eventStartTime)}
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
          <IconButton
            icon={<Icon as={DocumentDuplicateIcon} w={5} h={5} />}
            onClick={() => copyUrl(`${BASE_URL}/${event_id}`)}
          />
        </Flex>
      </Box>
    </Skeleton>
  );
}
