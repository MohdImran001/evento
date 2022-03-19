import Error from "next/error";

import { CalendarIcon } from "@chakra-ui/icons";
import { BadgeCheckIcon } from "@heroicons/react/solid";
import { LocationMarkerIcon, MailIcon } from "@heroicons/react/outline";
import {
  Box,
  Image,
  Heading,
  Text,
  Flex,
  Spacer,
  Center,
  Icon,
  Button,
  AspectRatio,
} from "@chakra-ui/react";

// Custom Components
import EmailField from "../components/forms/Email";
import NameField from "../components/forms/Name";

// DB Connection and Models
import dbConnect from "../lib/dbConnect";
import Event from "../models/Event";
import { formatEventData, getEmbedMapUrl, getMapUrl } from "../utils/event";

export default function Evento({ event, error }) {
  if (error) {
    return <Error statusCode={error.statusCode} title={error.message} />;
  }

  return (
    <Box>
      {/* Evento Cover Image */}
      <Box maxW="60rem" m="0 auto">
        <Image
          src={event?.coverImageUrl}
          alt="cover-image"
          maxH={{ base: "15rem", md: "30rem" }}
          w={{ base: "100%" }}
          objectFit="cover"
          borderRadius="10px"
          mt="1rem"
        />
        <Flex m="0 auto" maxW="50rem">
          <Box mt="1rem" ml="1rem">
            <Text color="gray.400" fontWeight="bolder">
              YOU&apos;RE INVITED TO JOIN
            </Text>
          </Box>
          <Spacer />
          <Box bg="white" w="90px" boxShadow="base" mt="-2rem" mr="1rem">
            <Center bg="red.500" w="100%" p="2px">
              <Text fontSize={{ base: "xs" }} color="white">
                <b>{event?.calendar?.month}</b>
              </Text>
            </Center>
            <Center mt="6px">
              <Heading>{event?.calendar?.date}</Heading>
            </Center>
            <Center py="2px">
              <Text fontSize={{ base: "xs" }} color="gray.600" fontWeight="500">
                {event?.calendar?.day}
              </Text>
            </Center>
          </Box>
        </Flex>
      </Box>
      {/* Evento Content */}
      <Box p={{ base: "1rem" }} borderColor="gray.200" m="0 auto" maxW="50rem">
        <Heading>{event?.title}</Heading>
        <Flex direction={{ base: "column" }} mt=".5rem">
          <Box my="5px">
            <CalendarIcon mt="-3px" mx="3px" color="#d86156" />
            <Text fontSize={{ base: "sm" }} color="#d86156" as="span" ml="5px">
              {event?.localizedDate}
            </Text>
          </Box>
          <Box>
            <Icon as={LocationMarkerIcon} color="#737577" w={5} h={5} />
            <Text
              fontSize={{ base: "sm" }}
              color="gray.500"
              as="span"
              ml="6px"
              mt="-2px"
            >
              {event?.location?.address}
            </Text>
          </Box>
        </Flex>

        {/* Evento Description */}
        <Box mt="3rem">
          <Heading as="h5" size="md">
            About Event
          </Heading>
          <br />
          <Text color="gray.500">{event?.about}</Text>
        </Box>

        {/* Join Event */}
        <Box mt="3rem">
          <Heading as="h5" size="md">
            Join Event
          </Heading>
          <Text fontSize="sm" mt="10px">
            Hello! To join the event, please register below.
          </Text>
          <br />
          {/* Form Container */}
          <Box p="1rem" border="1px" borderColor="#EEEEEE" maxW="30rem">
            <NameField />
            <EmailField />
            <Button
              leftIcon={
                <Icon as={BadgeCheckIcon} color="#FFFFFF" w={5} h={5} />
              }
              colorScheme="red"
              variant="solid"
              mt="2rem"
            >
              Register
            </Button>
          </Box>
        </Box>

        {/* Hosts */}
        <Box mt="3rem">
          <Heading as="h5" size="md">
            Hosts
          </Heading>
          <Text fontSize="sm" mt="10px">
            Feel free to connect with hosts for any help
          </Text>
          <br />
          <Box>
            <Flex direction={{ base: "column" }}>
              {event?.hosts.map((host) => (
                <Flex
                  border="1px"
                  borderColor="#EEE"
                  minW="auto"
                  borderRadius="md"
                  direction="row"
                  p="1rem"
                  maxW="30rem"
                  key={host._id}
                >
                  <Image
                    src={host?.profilePictureUrl}
                    alt="avatar-image"
                    w="50px"
                    h="50px"
                  />
                  <Box ml="1rem">
                    <Text fontWeight="bold"> {host?.name}</Text>
                    <Text fontSize="sm">{host.email}</Text>
                  </Box>
                </Flex>
              ))}
              <Box mt="1rem" cursor="pointer">
                <Flex>
                  <Icon as={MailIcon} w={5} h={5} color="#3787ff" />
                  <Text fontSize="sm" color="#3787ff" ml=".2rem">
                    Contact the host
                  </Text>
                </Flex>
              </Box>
            </Flex>
          </Box>
        </Box>

        {/* Location Map */}
        <Box mt="3rem">
          <Heading as="h5" size="md">
            Location
          </Heading>
          <br />
          <AspectRatio ratio={16 / 9} maxW="30rem">
            <iframe
              src={getEmbedMapUrl(event?.location?.place_id)}
              alt="demo"
            />
          </AspectRatio>
        </Box>
      </Box>
      <br />
      <br />
    </Box>
  );
}

export async function getServerSideProps(context) {
  // Wait for the DB Connection
  await dbConnect();

  const { evento_id } = context.params;
  let event = null;

  try {
    event = await Event.findById(evento_id)
      .populate("hosts", "name email profilePictureUrl")
      .lean();
  } catch (err) {
    console.log("ERROR => ", err);
  }

  // Return 404 error when Event is not found
  if (!event) {
    return {
      props: {
        event: null,
        error: { statusCode: 404, message: "Event Not Found" },
      },
    };
  }

  // Return event data after formatting
  return {
    props: {
      event: formatEventData(event),
      error: null,
    },
  };
}
