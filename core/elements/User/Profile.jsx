import { useSession } from "next-auth/react";
import { Box, Avatar, Text, Flex } from "@chakra-ui/react";

export default function Profile() {
  const { data } = useSession();
  if (!data) return <Avatar size={"sm"} />;

  return (
    <Box> 
      <Flex>
        <Text mt="7px" px="10px" fontWeight="normal">{data?.user?.name}</Text>
        <Avatar  size={"sm"} src={data?.user?.image} />
      </Flex>
    </Box>
  ) 
}
