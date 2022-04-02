import { useSession } from "next-auth/react";
import { Avatar } from "@chakra-ui/react";

export default function Profile() {
  const { data } = useSession();
  if (!data) return <Avatar size={"sm"} />;

  return <Avatar size={"sm"} src={data?.user?.image} />;
}
