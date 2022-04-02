import { useRouter } from "next/router";
import Link from "next/link";

import {
  LockClosedIcon,
  PencilAltIcon,
  EmojiHappyIcon,
} from "@heroicons/react/outline";
import { Box, Flex, Text, Icon, Heading } from "@chakra-ui/react";

const getUrl = (tab, pathsArray) => {
  pathsArray.splice(pathsArray.length - 1, 1, tab);
  return pathsArray.join("/");
};

export default function TabNavigation({ children }) {
  const router = useRouter();
  const pathsArray = router.asPath.split("/");
  const activeTab = pathsArray[pathsArray.length - 1];

  return (
    <>
      <Box borderBottomColor="#EEE" borderBottomWidth="1px">
        <Box>
          <Heading>Event Name</Heading>
        </Box>
        <br />
        <br />

        <Flex experimental_spaceX={5}>
          <Box
            _hover={{ bg: "gray.100", borderTopRadius: 10 }}
            p="1rem"
            borderBottomWidth={activeTab === "edit" ? "2px" : 0}
            borderBottomColor={activeTab === "edit" ? "green.500" : ""}
            color={activeTab === "edit" ? "green" : ""}
          >
            <Flex experimental_spaceX={1} cursor="pointer">
              <Icon as={PencilAltIcon} w={5} h={5} mt="2px" />
              <Link href={getUrl("edit", pathsArray)}>Details</Link>
            </Flex>
          </Box>
          <Box
            _hover={{ bg: "gray.100", borderTopRadius: 10 }}
            p="1rem"
            borderBottomWidth={activeTab === "guests" ? "2px" : 0}
            borderBottomColor={activeTab === "guests" ? "green.500" : ""}
            color={activeTab === "guests" ? "green" : ""}
          >
            <Flex experimental_spaceX={1} cursor="pointer">
              <Icon as={EmojiHappyIcon} w={5} h={5} mt="2px" />
              <Text>
                <Link href={getUrl("guests", pathsArray)}>Guests</Link>
              </Text>
            </Flex>
          </Box>
          <Box
            _hover={{ bg: "gray.100", borderTopRadius: 10 }}
            p="1rem"
            borderBottomWidth={activeTab === "access" ? "2px" : 0}
            borderBottomColor={activeTab === "access" ? "green.500" : ""}
            color={activeTab === "access" ? "green" : ""}
          >
            <Flex experimental_spaceX={1} cursor="pointer">
              <Icon as={LockClosedIcon} w={5} h={5} />
              <Text>
                <Link href={getUrl("access", pathsArray)}>Access</Link>
              </Text>
            </Flex>
          </Box>
        </Flex>
      </Box>
      <Box>{children}</Box>
    </>
  );
}
