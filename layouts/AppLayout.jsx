import NextLink from "next/link";
import { signOut } from "next-auth/react";
import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useDisclosure,
  useColorModeValue,
  Stack,
  Icon,
  Heading,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, AddIcon } from "@chakra-ui/icons";
import { PaperAirplaneIcon } from "@heroicons/react/solid";
import Profile from "core/elements/User/Profile";
import { useRouter } from "next/router";

const Links = [{ name: "Dashboard", to: "/app" }];

const NavLink = ({ children, link }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    href={link}
  >
    {children}
  </Link>
);

export default function AppLayout({ children }) {
  const router = useRouter();
  const pathsArray = router.asPath.split("/");
  const heading =
    pathsArray[pathsArray.length - 1] === "app"
      ? "Your Events"
      : "Manage Your Event";

  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box bg="gray.100" px={4}>
        <Flex
          h={16}
          alignItems={"center"}
          justifyContent={"space-between"}
          maxW="70rem"
          m="0 auto"
        >
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Box>
              <Icon as={PaperAirplaneIcon} color="green.500" w={8} h={8} />
            </Box>
            <HStack
              as={"nav"}
              spacing={2}
              display={{ base: "none", md: "flex" }}
            >
              <NextLink href="/app" passHref>
                <Link>Dashboard</Link>
              </NextLink>
            </HStack>
          </HStack>
          <Flex alignItems={"center"}>
            <Button
              variant={"solid"}
              colorScheme="green"
              size={"sm"}
              mr={4}
              leftIcon={<AddIcon />}
            >
              Create an event
            </Button>
            <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
              >
                <Profile />
              </MenuButton>
              <MenuList>
                {/* <MenuItem>Profile</MenuItem>
                <MenuItem>Settings</MenuItem> */}
                {/* <MenuDivider /> */}
                <MenuItem onClick={() => signOut()}>Sign Out</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
      <Box borderBottomWidth="1px" borderBottomColor="#eee">
        <Heading size="sm" maxW="70rem" m="1rem auto">
          {heading}
        </Heading>
      </Box>
      <Box maxW="70rem" m="2rem auto">
        {children}
      </Box>
    </>
  );
}
