import { useState } from "react";
import * as Yup from "yup";
import { Formik, Form } from "formik";

import {
  Box,
  Image,
  Heading,
  Text,
  Flex,
  Spacer,
  Center,
  Icon,
  AspectRatio,
} from "@chakra-ui/react";

import {
  LocationMarkerIcon,
  MailIcon,
  CalendarIcon,
  ClockIcon,
} from "@heroicons/react/solid";

import { getMapUrl, getEmbedMapUrl } from "core/utils/event";
import registerAttendee from "lib/event/api/register-attendee";

import ReadOnlyEditor from "components/Editor";

import RegistrationForm from "components/Event/RegistrationForm";

const EventDetails = ({ eventData: event }) => {
  const [registered, setRegistered] = useState(false);

  return (
    <Box>
      {/* Evento Cover Image */}
      <Box maxW="70rem" m="0 auto">
        <Image
          src={event?.coverImageUrl}
          alt="cover-image"
          maxH={{ base: "15rem", md: "27rem" }}
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
            <Center bg="brandOrange" w="100%" p="2px">
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
      <Box p={{ base: "1rem" }} borderColor="gray.200" maxW="65rem" m="0 auto">
        <Heading color="brand" size="3xl" mt="3rem">
          {event?.title}
        </Heading>
        <Flex direction={{ base: "column" }} mt="2rem" experimental_spaceY={2}>
          <Flex experimental_spaceX={2}>
            <Box>
              <Icon as={CalendarIcon} color="gray.500" w={5} h={5} />
            </Box>
            <Text
              fontSize={{ base: "md" }}
              color="gray.500"
              as="span"
              mt="0rem"
            >
              {event?.localizedDate}
            </Text>
          </Flex>
          <Flex experimental_spaceX={2}>
            <Box>
              <Icon as={ClockIcon} color="gray.500" w={5} h={5} />
            </Box>
            <Text
              fontSize={{ base: "md" }}
              color="gray.500"
              as="span"
              mt="0rem"
            >
              {event?.localizedTime}
            </Text>
          </Flex>
          <Flex experimental_spaceX={2}>
            <Box>
              <Icon as={LocationMarkerIcon} color="gray.500" w={5} h={5} />
            </Box>
            <Text fontSize={{ base: "md" }} color="gray.500" as="span" ml="6px">
              <a href={getMapUrl(event?.location)}>{event?.location?.name}</a>
            </Text>
          </Flex>
        </Flex>

        <Flex justifyContent="space-between" alignItems="center">
          <Box w="45%">
            {/* Evento Description */}
            <Box>
              <Box ml="-1rem">
                <ReadOnlyEditor content={event?.about} />
              </Box>
            </Box>

            {/* Location Map */}
            <Box mt="3rem">
              <Heading as="h5" size="md">
                Location
              </Heading>
              <br />
              <AspectRatio ratio={16 / 9}>
                <iframe
                  src={getEmbedMapUrl(event?.location?.place_id)}
                  alt="demo"
                />
              </AspectRatio>
              <Flex mt="2rem">
                <Box>
                  <Icon
                    as={LocationMarkerIcon}
                    color="brandOrange"
                    w={5}
                    h={5}
                  />
                </Box>
                <Text
                  fontSize={{ base: "md" }}
                  color="brandOrange"
                  as="span"
                  ml="6px"
                >
                  <a href={getMapUrl(event.location)}>
                    {event?.location?.name}
                  </a>
                </Text>
              </Flex>
            </Box>
          </Box>
          <Box w="40%">
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
              <Box p="1rem" border="1px" borderColor="#EEEEEE">
                <Formik
                  initialValues={{
                    name: "",
                    email: "",
                  }}
                  validationSchema={Yup.object({
                    name: Yup.string()
                      .max(15, "Must be 15 characters or less")
                      .required("Required"),
                    email: Yup.string()
                      .email("Oops! There is a mistake in the email")
                      .required("Required"),
                  })}
                  onSubmit={async (values) => {
                    const message = await registerAttendee(values, event._id);
                    setRegistered(true);
                  }}
                >
                  <Form>
                    <RegistrationForm isRegistered={registered} />
                  </Form>
                </Formik>
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
                        src={host?.image}
                        alt="avatar-image"
                        w="50px"
                        h="50px"
                        borderRadius="full"
                      />
                      <Box ml="1rem">
                        <Text fontWeight="bold"> {host?.name}</Text>
                        <Text fontSize="sm">{host?.email}</Text>
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
          </Box>
        </Flex>
      </Box>
      <br />
      <br />
    </Box>
  );
};

export default EventDetails;
