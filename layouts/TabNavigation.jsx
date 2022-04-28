import { useRouter } from "next/router";
import Link from "next/link";

import {
  LockClosedIcon,
  PencilAltIcon,
  EmojiHappyIcon,
} from "@heroicons/react/outline";
import { Box, Flex, Text, Icon } from "@chakra-ui/react";

import Header from "components/EventSettings/Header";

const getUrl = (tab, pathsArray) => {
  pathsArray.splice(pathsArray.length - 1, 1, tab);
  return pathsArray.join("/");
};

export default function TabNavigation({ children, event_id }) {
  const router = useRouter();
  const pathsArray = router.asPath.split("/");
  const activeTab = pathsArray[pathsArray.length - 1];

  return (
    <>
      <Header event_id={event_id} />
      <Box borderBottomColor="#EEE" borderBottomWidth="1px" mt="7rem">
        <Flex experimental_spaceX={5}>
          <Box
            _hover={{ bg: "gray.100", borderTopRadius: 10 }}
            p="1rem"
            bg={activeTab === "edit" ? "gray.100" : ""}
            borderTopRadius={activeTab === "edit" ? 10 : 0}
            borderBottomWidth={activeTab === "edit" ? "4px" : 0}
            borderBottomColor={activeTab === "edit" ? "brandBlue" : ""}
            color={activeTab === "edit" ? "brandBlue" : ""}
          >
            <Flex experimental_spaceX={2} cursor="pointer">
              <Icon as={PencilAltIcon} w={5} h={5} mt="1.5px" />
              <Link href={getUrl("edit", pathsArray)}>Details</Link>
            </Flex>
          </Box>
          <Box
            _hover={{ bg: "gray.100", borderTopRadius: 10 }}
            p="1rem"
            bg={activeTab === "guests" ? "gray.100" : ""}
            borderTopRadius={activeTab === "guests" ? 10 : 0}
            borderBottomWidth={activeTab === "guests" ? "4px" : 0}
            borderBottomColor={activeTab === "guests" ? "brandBlue" : ""}
            color={activeTab === "guests" ? "brandBlue" : ""}
          >
            <Flex experimental_spaceX={2} cursor="pointer">
              <Icon as={EmojiHappyIcon} w={5} h={5} mt="2px" />
              <Text>
                <Link href={getUrl("guests", pathsArray)}>Guests</Link>
              </Text>
            </Flex>
          </Box>
          <Box
            _hover={{ bg: "gray.100", borderTopRadius: 10 }}
            p="1rem"
            bg={activeTab === "access" ? "gray.100" : ""}
            borderTopRadius={activeTab === "access" ? 10 : 0}
            borderBottomWidth={activeTab === "access" ? "4px" : 0}
            borderBottomColor={activeTab === "access" ? "brandBlue" : ""}
            color={activeTab === "access" ? "brandBlue" : ""}
          >
            <Flex experimental_spaceX={2} cursor="pointer">
              <Icon as={LockClosedIcon} w={5} h={5} />
              <Text>
                <Link href={getUrl("access", pathsArray)}>Access</Link>
              </Text>
            </Flex>
          </Box>
        </Flex>
      </Box>
      <Box mt="3rem">{children}</Box>
      <Box mt="10rem" mb="10rem"></Box>
    </>
  );
}
